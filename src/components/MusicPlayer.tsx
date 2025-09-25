import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import AudioPlayer from "./AudioPlayer";
import placeholder from "../assets/placeholder.svg";
import LoadingSkeleton from "./LoadingSkeleton";
import Footer from "./Footer";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre?: string;
  duration: number;
  cover?: string;
  song?: string;
  lyrics?: string;
}

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [shuffle, setShuffle] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLyrics, setShowLyrics] = useState(false);

  /** Load last played song from localStorage */
  useEffect(() => {
    const savedSong = localStorage.getItem("lastPlayingSong");
    if (savedSong) {
      const songData: Song = JSON.parse(savedSong);
      setCurrentSong(songData);
    }
  }, []);

  /** Fetch Song Details before playing */
  const handleSongSelection = async (songId: string) => {
    try {
      const res = await fetch(`/api/v1/songs/${songId}`);
      const songDetails: Song = await res.json();
      setCurrentSong(songDetails);
      setIsPlaying(true);
      setPlaybackSpeed(1);
      localStorage.setItem("lastPlayingSong", JSON.stringify(songDetails));
    } catch (error) {
      console.error("Error fetching song details:", error);
    }
  };

  /** Fetch Playlist with proper loading handling */
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/v1/playlist")
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);

        const savedSong = localStorage.getItem("lastPlayingSong");
        if (!savedSong && data.length > 0) {
          // ✅ Load full details for first song
          handleSongSelection(data[0].id);
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching playlist:", error);
        setIsLoading(false);
      });
  }, []);

  /** Handle Play/Pause */
  const handlePlayToggle = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  /** Handle Next Song */
  const handleNextSong = () => {
    if (!currentSong || playlist.length === 0) return;
    let nextIndex;
    const currentIndex = playlist.findIndex((song) => song.id === currentSong.id);
    if (shuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentIndex);
      nextIndex = randomIndex;
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }
    handleSongSelection(playlist[nextIndex].id);
  };

  /** Handle Previous Song */
  const handlePrevSong = () => {
    if (!currentSong || playlist.length === 0) return;
    let prevIndex;
    const currentIndex = playlist.findIndex((song) => song.id === currentSong.id);
    if (shuffle) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentIndex);
      prevIndex = randomIndex;
    } else {
      prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    }
    handleSongSelection(playlist[prevIndex].id);
  };

  /** Handle Manual Seek */
  const handleSeek = (time: number) => {
    setProgress(time);
  };

  /** Handle Playback Speed */
  const handlePlaybackSpeedChange = () => {
    const newSpeed = playbackSpeed === 0.5 ? 1 : playbackSpeed === 1 ? 2 : 0.5;
    setPlaybackSpeed(newSpeed);
  };

  /** Restore Play/Pause functionality in Playlist */
  const handlePlaylistPlayToggle = (selectedSong: Song) => {
    if (currentSong?.id === selectedSong.id) {
      setIsPlaying(!isPlaying);
    } else {
      handleSongSelection(selectedSong.id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-slate-900">
      <div className="flex flex-col md:flex-row flex-grow w-full max-w-screen-lg mx-auto items-stretch p-3">
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="flex-1 flex flex-col">
              <CurrentlyPlaying
                coverArt={currentSong?.cover || placeholder}
                title={currentSong?.title || "Select a Song"}
                artist={currentSong?.artist || ""}
                isPlaying={isPlaying}
                onPlayToggle={handlePlayToggle}
                onNext={handleNextSong}
                onPrev={handlePrevSong}
                onShuffleToggle={() => setShuffle(!shuffle)}
                onVolumeChange={setVolume}
                progress={progress}
                duration={duration}
                onSeek={handleSeek}
                hasSong={!!currentSong}
                onPlaybackSpeedChange={handlePlaybackSpeedChange}
                playbackSpeed={playbackSpeed}
                showLyrics={showLyrics}
                onLyricsToggle={() => setShowLyrics(!showLyrics)}
                lyrics={currentSong?.lyrics || ""}
              />
            </div>

            <div className="flex-1 flex flex-col">
              <Playlist
                onSongSelect={handlePlaylistPlayToggle}
                currentSongId={currentSong?.id || ""}
                isPlaying={isPlaying}
              />
            </div>

            {currentSong && currentSong.song && (
              <AudioPlayer
                src={currentSong.song}
                isPlaying={isPlaying}
                volume={volume}
                playbackSpeed={playbackSpeed}
                onPlayToggle={handlePlayToggle}
                onNext={handleNextSong}
                onProgressUpdate={(progress, duration) => {
                  setProgress(progress);
                  setDuration(duration);
                }}
                onSeek={handleSeek}
              />
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MusicPlayer;
