import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([
      { id: "1", title: "Song 1", artist: "Artist 1", cover: "/cover1.jpg" },
      { id: "2", title: "Song 2", artist: "Artist 2", cover: "/cover2.jpg" },
    ]);
  }),
  http.get("/api/v1/songs/:id", (req) => {
    const { id } = req.params;
    return HttpResponse.json({
      id,
      title: `Song ${id}`,
      artist: `Artist ${id}`,
      cover: `/cover${id}.jpg`,
      lyrics: "Lorem ipsum dolor sit amet",
    });
  }),
];
