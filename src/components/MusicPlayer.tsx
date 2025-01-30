import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: string;
}

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const response = await fetch("/api/v1/playlist");
        const data = await response.json();
        setPlaylist(data);
        setCurrentSong(data[0]); // Default to the first song
      } catch (error) {
        console.error("Error fetching playlist:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaylist();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center 
                    w-[456px] h-[1219px] md:w-[896px] md:h-[740px] 
                    bg-gray-800 rounded-lg overflow-hidden">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {/* Currently Playing Section */}
          <div className="w-full md:w-1/2 h-full flex">
            {currentSong && <CurrentlyPlaying song={currentSong} />}
          </div>

          {/* Playlist Section */}
          <div className="w-full md:w-1/2 h-full flex">
            <Playlist playlist={playlist} setCurrentSong={setCurrentSong} />
          </div>
        </>
      )}
    </div>
  );
}
