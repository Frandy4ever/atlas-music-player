import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "../mocks/server";
import { rest } from "msw";
import { http, HttpResponse } from "msw";

// Ensure MSW correctly mocks API response
server.use(
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      { id: "1", title: "Song 1", artist: "Artist 1", duration: 180, song: "song1.mp3" },
      { id: "2", title: "Song 2", artist: "Artist 2", duration: 200, song: "song2.mp3" },
    ]);
  })
);

describe("MusicPlayer Component", () => {
  test("Displays first song in playlist as current song by default", async () => {
    render(<MusicPlayer />);

    // Wait for playlist to load
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /song 1/i })).toBeInTheDocument();
    });
  });

  test("Toggles play/pause correctly", async () => {
    render(<MusicPlayer />);
    
    await screen.findByRole("heading", { name: /song 1/i });

    // Click Play Button
    const playButton = screen.getByRole("button", { name: /play/i });
    fireEvent.click(playButton);

    // Expect pause button to appear
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /pause/i })).toBeInTheDocument();
    });
  });

  test("Clicking forward button changes the current song", async () => {
    render(<MusicPlayer />);
    
    await screen.findByRole("heading", { name: /song 1/i });

    // Click Next Button
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    // Expect new song title to appear
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /song 2/i })).toBeInTheDocument();
    });
  });

  test("Clicking back button changes the current song", async () => {
    render(<MusicPlayer />);
    
    await screen.findByRole("heading", { name: /song 1/i });

    // Click Next, then Back
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    const backButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(backButton);

    // Expect to return to first song
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /song 1/i })).toBeInTheDocument();
    });
  });

  test("Clicking speed button cycles through speed settings", async () => {
    render(<MusicPlayer />);
    
    await screen.findByRole("heading", { name: /song 1/i });

    // Click Speed Button multiple times
    const speedButton = screen.getByRole("button", { name: /speed/i });
    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent("2x");

    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent("0.5x");

    fireEvent.click(speedButton);
    expect(speedButton).toHaveTextContent("1x");
  });
});
