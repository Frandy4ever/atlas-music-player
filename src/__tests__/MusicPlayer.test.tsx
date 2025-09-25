import { render, screen, fireEvent } from "@testing-library/react";
import MusicPlayer from "@/components/MusicPlayer";

async function renderAndWaitReady() {
  render(<MusicPlayer />);
  // Wait for initial data flow:
  // 1) /api/v1/playlist
  // 2) 1s loading timeout
  // 3) /api/v1/songs/1 (details)
  await screen.findByText("Song 1", {}, { timeout: 5000 });
}

describe("MusicPlayer Component", () => {
  beforeEach(() => {
    localStorage.removeItem("lastPlayingSong");
  });

  test(
    "Default current song is the first playlist item (mock data)",
    async () => {
      await renderAndWaitReady();
      expect(screen.getByText("Song 1")).toBeInTheDocument();
    },
    10000
  );

  test(
    "Play/Pause toggles",
    async () => {
      await renderAndWaitReady();

      const playBtn = await screen.findByRole(
        "button",
        { name: /play/i },
        { timeout: 5000 }
      );
      fireEvent.click(playBtn);

      expect(
        await screen.findByRole("button", { name: /pause/i }, { timeout: 5000 })
      ).toBeInTheDocument();

      const pauseBtn = screen.getByRole("button", { name: /pause/i });
      fireEvent.click(pauseBtn);

      expect(
        await screen.findByRole("button", { name: /play/i }, { timeout: 5000 })
      ).toBeInTheDocument();
    },
    10000
  );

  test(
    "Next advances from Song 1 → Song 2",
    async () => {
      await renderAndWaitReady();
      const nextBtn = await screen.findByRole(
        "button",
        { name: /next/i },
        { timeout: 5000 }
      );
      fireEvent.click(nextBtn);
      expect(
        await screen.findByText("Song 2", {}, { timeout: 5000 })
      ).toBeInTheDocument();
    },
    10000
  );

  test(
    "Previous returns from Song 2 → Song 1",
    async () => {
      await renderAndWaitReady();

      const nextBtn = await screen.findByRole(
        "button",
        { name: /next/i },
        { timeout: 5000 }
      );
      fireEvent.click(nextBtn);
      await screen.findByText("Song 2", {}, { timeout: 5000 });

      const prevBtn = await screen.findByRole(
        "button",
        { name: /previous/i },
        { timeout: 5000 }
      );
      fireEvent.click(prevBtn);

      expect(
        await screen.findByText("Song 1", {}, { timeout: 5000 })
      ).toBeInTheDocument();
    },
    10000
  );

  test(
    "Speed cycles 1x → 2x → 0.5x → 1x",
    async () => {
      await renderAndWaitReady();

      // Helper to find the speed button even if it's icon-only or labeled "Speed"
      const getSpeedButton = () => {
        const byRole =
          screen.queryByRole("button", { name: /^(speed|1x|2x|0\.5x)$/i }) ||
          screen.queryByRole("button", { name: /speed/i }) ||
          screen.queryByRole("button", { name: /1x/i }) ||
          screen.queryByRole("button", { name: /2x/i }) ||
          screen.queryByRole("button", { name: /0\.5x/i });

        if (byRole) return byRole;

        const buttons = screen.getAllByRole("button");
        const rx = /(speed|^1x$|^2x$|^0\.5x$)/i;
        const candidate = buttons.find((btn) => {
          const text = (btn.textContent || "").trim();
          const aria = (btn.getAttribute("aria-label") || "").trim();
          const title = (btn.getAttribute("title") || "").trim();
          return rx.test(text) || rx.test(aria) || rx.test(title);
        });

        if (!candidate)
          throw new Error(
            "Speed button not found (no text, aria-label, or title matched)."
          );
        return candidate;
      };

      // 1x -> 2x
      const speedBtn1 = getSpeedButton();
      fireEvent.click(speedBtn1);
      await screen.findByText(/2x/i, {}, { timeout: 5000 });

      // 2x -> 0.5x
      const speedBtn2 = getSpeedButton();
      fireEvent.click(speedBtn2);
      await screen.findByText(/0\.5x/i, {}, { timeout: 5000 });

      // 0.5x -> 1x
      const speedBtn3 = getSpeedButton();
      fireEvent.click(speedBtn3);
      await screen.findByText(/(^|\s)1x(\s|$)/i, {}, { timeout: 5000 });
    },
    10000
  );
});
