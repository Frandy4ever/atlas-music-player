import { http, HttpResponse } from "msw";

export const handlers = [
  // Playlist (mock data for tests)
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      { id: "1", title: "Song 1", artist: "Artist 1", duration: 180, cover: "/cover1.jpg" },
      { id: "2", title: "Song 2", artist: "Artist 2", duration: 200, cover: "/cover2.jpg" },
      { id: "3", title: "Song 3", artist: "Artist 3", duration: 240, cover: "/cover3.jpg" },
    ]);
  }),

  // Song details endpoint (MusicPlayer calls this before playing)
  http.get("/api/v1/songs/:id", ({ params }) => {
    const { id } = params as { id: string };
    return HttpResponse.json({
      id,
      title: `Song ${id}`,
      artist: `Artist ${id}`,
      duration: 180 + Number(id) * 10,
      cover: `/cover${id}.jpg`,
      song: `/song${id}.mp3`, // include to allow AudioPlayer rendering path
      lyrics: "Lorem ipsum dolor sit amet",
    });
  }),
];
