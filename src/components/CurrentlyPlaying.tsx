import React from "react";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

interface CurrentlyPlayingProps {
  coverArt: string;
  title: string;
  artist: string;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShuffleToggle: () => void;
  onVolumeChange: (volume: number) => void;
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
  hasSong: boolean;
  onPlaybackSpeedChange: (speed?: number) => void;
  playbackSpeed: number;
  showLyrics: boolean;
  onLyricsToggle: () => void;
  lyrics?: string;
}

const formatTime = (time: number) => {
  if (isNaN(time) || time < 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const getProgressColor = (progress: number, duration: number) => {
  const percentage = (progress / duration) * 100;
  if (percentage <= 20) return "bg-red-100";
  if (percentage > 20 && percentage <= 40) return "bg-red-200";
  if (percentage > 40 && percentage <= 60) return "bg-red-300";
  if (percentage > 60 && percentage <= 80) return "bg-red-400";
  return "bg-red-600";
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  coverArt,
  title,
  artist,
  isPlaying,
  onPlayToggle,
  onNext,
  onPrev,
  onShuffleToggle,
  onVolumeChange,
  progress,
  duration,
  onSeek,
  hasSong,
  onPlaybackSpeedChange,
  playbackSpeed,
  showLyrics,
  onLyricsToggle,
  lyrics,
}) => {
  return (
    <div className="flex h-full flex-col p-4 md:p-6">
      {/* Cover with optional Lyrics overlay */}
      <div className="relative w-full max-w-[520px] aspect-square mx-auto">
        <img
          src={coverArt}
          alt="Album Cover"
          className="w-full h-full object-cover rounded-xl"
        />
        {showLyrics && lyrics && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 text-white text-center text-sm rounded-xl">
            {lyrics}
          </div>
        )}
      </div>

      {/* Title/Artist */}
      <div className="text-center mt-3 mx-auto w-full max-w-[520px]">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{artist}</p>
      </div>

      {/* Progress */}
      <div className="w-full max-w-[640px] mx-auto px-2 mt-4">
        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div
          className={`relative w-full h-1 ${
            hasSong ? "bg-red-100" : "bg-gray-400"
          } rounded-lg overflow-hidden`}
        >
          <div
            className={`absolute h-full rounded-lg transition-all ${
              hasSong ? getProgressColor(progress, duration) : ""
            }`}
            style={{
              width:
                hasSong && duration > 0
                  ? `${(progress / duration) * 100}%`
                  : "0%",
            }}
          />
          <input
            type="range"
            min="0"
            max={duration}
            value={progress}
            onChange={(e) => hasSong && onSeek(Number(e.target.value))}
            className={`absolute inset-0 w-full h-full opacity-0 ${
              hasSong ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            disabled={!hasSong}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 w-full max-w-[640px] mx-auto px-2">
        <PlayControls
          isPlaying={isPlaying}
          onPlayToggle={onPlayToggle}
          onNext={onNext}
          onPrev={onPrev}
          onShuffleToggle={onShuffleToggle}
          onPlaybackSpeedChange={onPlaybackSpeedChange}
        />
      </div>

      {/* Volume + Lyrics toggle lives here */}
      <div className="mt-4 w-full max-w-[640px] mx-auto px-2">
        <VolumeControls
          onVolumeChange={onVolumeChange}
          onLyricsToggle={onLyricsToggle}
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;

