import { useState, useEffect } from "react";

interface SongTitleProps {
  songId: string;
}

const SongTitle: React.FC<SongTitleProps> = ({ songId }) => {
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");

  useEffect(() => {
    async function fetchSongDetails() {
      try {
        const response = await fetch(`/api/v1/songs/${songId}`);
        const data = await response.json();
        setTitle(data.title);
        setArtist(data.artist);
      } catch (error) {
        console.error("Error fetching song details:", error);
      }
    }

    fetchSongDetails();
  }, [songId]);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-slate-950 dark:text-slate-100">
        {title || "Unknown Title"}
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {artist || "Unknown Artist"}
      </p>
    </div>
  );
};

export default SongTitle;
