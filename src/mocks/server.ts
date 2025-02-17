import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      { id: "1", title: "Song 1", artist: "Artist 1", duration: 180, song: "song1.mp3" },
      { id: "2", title: "Song 2", artist: "Artist 2", duration: 200, song: "song2.mp3" },
    ]);
  }),
];

export const server = setupServer(...handlers);
