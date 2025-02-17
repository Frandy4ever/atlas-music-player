import React from 'react';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

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
  hasSong: boolean; // Indicates if a song is selected
}

const formatTime = (time: number) => {
  if (isNaN(time) || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Function to get the dynamic progress bar color
const getProgressColor = (progress: number, duration: number) => {
  const percentage = (progress / duration) * 100;
  if (percentage <= 20) return 'bg-red-100';
  if (percentage > 20 && percentage <= 40) return 'bg-red-200';
  if (percentage > 40 && percentage <= 60) return 'bg-red-300';
  if (percentage > 60 && percentage <= 80) return 'bg-red-400';
  return 'bg-red-600';
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
  hasSong, // This determines whether progress bar is active
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[400px] h-[637px] border border-blue-300 bg-white dark:border-red-300 dark:bg-slate-800 p-4 rounded-l-lg shadow-lg'>
      {/* Cover Art */}
      <img src={coverArt} alt='Album Cover' className='w-[400px] h-[400px] rounded-lg' />

      {/* Song Title & Artist */}
      <div className='text-center mt-3 w-[400px]'>
        <h3 className='text-lg font-bold text-slate-900 dark:text-white'>{title}</h3>
        <p className='text-sm text-slate-600 dark:text-slate-400'>{artist}</p>
      </div>

      {/* Progress Bar - Active only if a song is selected */}
      <div className='w-full px-4 mt-4'>
        <div className='flex justify-between text-xs text-slate-600 dark:text-slate-300'>
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Progress Bar Container */}
        <div
          className={`relative w-full h-1 ${hasSong ? 'bg-red-100' : 'bg-gray-400'} rounded-lg overflow-hidden`}
        >
          {/* Dynamic Color Fill */}
          <div
            className={`absolute h-full rounded-lg transition-all ${hasSong ? getProgressColor(progress, duration) : ''}`}
            style={{ width: hasSong ? `${(progress / duration) * 100}%` : '0%' }}
          />
          {/* Seekable Input Range - Disabled if no song is selected */}
          <input
            type='range'
            min='0'
            max={duration}
            value={progress}
            onChange={(e) => hasSong && onSeek(Number(e.target.value))} // Ensures manual seek works
            className={`absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer ${
              hasSong ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
            disabled={!hasSong}
          />
        </div>
      </div>

      {/* Play Controls */}
      <div className='mt-4 w-[400px] flex justify-center'>
        <PlayControls
          isPlaying={isPlaying}
          onPlayToggle={onPlayToggle}
          onNext={onNext}
          onPrev={onPrev}
          onShuffleToggle={onShuffleToggle}
        />
      </div>

      {/* Volume Controls */}
      <div className='mt-4 w-[368px] flex justify-center'>
        <VolumeControls onVolumeChange={onVolumeChange} />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
