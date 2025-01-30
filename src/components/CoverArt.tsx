import { useState, useEffect } from "react";

interface CoverArtProps {
  songId: string; // The ID of the current song
}

export default function CoverArt({ songId }: CoverArtProps) {
  const [albumArt, setAlbumArt] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAlbumArt() {
      try {
        const response = await fetch(`/api/v1/songs/${songId}`);
        const data = await response.json();
        setAlbumArt(data.albumArt || null);
      } catch (error) {
        console.error("Error fetching album art:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAlbumArt();
  }, [songId]);

  return (
    <div className="w-[350px] h-[350px] md:w-[380px] md:h-[380px] rounded-lg overflow-hidden shadow-lg lg:ml-10 p-6 sm:p-4">
      {loading ? (
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      ) : (
        <img
          src={albumArt || "/assets/placeholder.png"}
          alt="Album Cover"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
