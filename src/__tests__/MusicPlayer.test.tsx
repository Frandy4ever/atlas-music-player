import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "../mocks/server"; // Import MSW mock server
import { rest } from "msw";

describe("MusicPlayer Component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Displays first song in playlist as current song by default", async () => {
    render(<MusicPlayer />);
    
    await waitFor(() => expect(screen.getByText("Song 1")).toBeInTheDocument());
  });

  test("Toggles play/pause correctly", async () => {
    render(<MusicPlayer />);

    const playButton = screen.getByRole("button", { name: /play/i });
    fireEvent.click(playButton);

    await waitFor(() => expect(playButton).toHaveTextContent(/pause/i));
  });

  test("Clicking forward button changes the current song", async () => {
    render(<MusicPlayer />);

    const forwardButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(forwardButton);

    await waitFor(() => expect(screen.getByText("Song 2")).toBeInTheDocument());
  });

  test("Clicking back button changes the current song", async () => {
    render(<MusicPlayer />);

    const backButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(backButton);

    await waitFor(() => expect(screen.getByText("Song 1")).toBeInTheDocument());
  });

  test("Clicking speed button cycles through speed settings", async () => {
    render(<MusicPlayer />);

    const speedButton = screen.getByRole("button", { name: /speed/i });

    fireEvent.click(speedButton);
    await waitFor(() => expect(speedButton).toHaveTextContent("1.5x"));

    fireEvent.click(speedButton);
    await waitFor(() => expect(speedButton).toHaveTextContent("2x"));

    fireEvent.click(speedButton);
    await waitFor(() => expect(speedButton).toHaveTextContent("0.5x"));
  });
});
