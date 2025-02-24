import { useState, useEffect } from "react";
import placeholder from "../assets/placeholder.svg";

interface CoverArtProps {
  songId: string;
  showLyrics: boolean;
}

const CoverArt: React.FC<CoverArtProps> = ({ songId, showLyrics }) => {
  const [coverUrl, setCoverUrl] = useState<string>(placeholder);
  const [lyrics, setLyrics] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSongDetails() {
      try {
        const response = await fetch(`/api/v1/songs/${songId}`);
        const data = await response.json();
        setCoverUrl(data.cover || placeholder);
        setLyrics(data.lyrics || null);
      } catch (error) {
        console.error("Error fetching song details:", error);
      }
    }

    if (songId) {
      fetchSongDetails();
    }
  }, [songId]);

  return (
    <div className="relative w-[400px] h-[400px] overflow-hidden rounded-2xl">
      {/* Album Cover */}
      <img
        src={coverUrl}
        alt="Album Cover"
        className="w-full h-full object-cover rounded-2xl transition-opacity duration-300"
      />

      {/* Lyrics Overlay (Displayed when clicked) */}
      {showLyrics && lyrics && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 text-white text-center text-sm transition-opacity duration-300">
          {lyrics}
        </div>
      )}
    </div>
  );
};

export default CoverArt;
