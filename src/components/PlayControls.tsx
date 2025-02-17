import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShuffleToggle: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayToggle,
  onNext,
  onPrev,
  onShuffleToggle,
}) => {
  const [speed, setSpeed] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleSpeedChange = () => {
    const newSpeed = speed === 0.5 ? 1 : speed === 1 ? 2 : 0.5;
    setSpeed(newSpeed);
    onPlaybackSpeedChange(newSpeed);
  };
  

  const handleShuffleToggle = () => {
    setIsShuffling(!isShuffling);
    onShuffleToggle();
  };

  return (
    <div className="flex items-center justify-between w-[368px]">
      {/* Speed Control */}
      <button
        className="text-slate-950 dark:text-slate-100 hover:text-blue-400 dark:hover:text-red-400"
        onClick={handleSpeedChange}
      >
        {speed}x
      </button>

      {/* Back Button */}
      <button
        className="text-slate-950 dark:text-red-100 hover:text-blue-400 dark:hover:text-red-400"
        onClick={onPrev}
      >
        <SkipBack fill="currentColor" size={24} />
      </button>

      {/* Play / Pause Button */}
      <button
        className="w-[48px] h-[48px] flex items-center justify-center rounded-lg bg-slate-950 dark:bg-red-100 hover:bg-blue-600 dark:hover:bg-red-400"
        onClick={onPlayToggle}
      >
        {isPlaying ? (
          <Pause size={24} className="text-white  dark:text-black" />
        ) : (
          <Play size={24} className="text-white dark:text-slate-950" />
        )}
      </button>

      {/* Forward Button */}
      <button
        className="text-slate-950 dark:text-red-100 hover:text-blue-400 dark:hover:text-red-400"
        onClick={onNext}
      >
        <SkipForward fill="currentColor" size={24} />
      </button>

      {/* Shuffle Button - Rotates on Click */}
      <button
        className={`transition-transform duration-500 ${
          isShuffling
            ? "rotate-x-180 text-blue-600 dark:text-red-600 hover:text-blue-400 dark:hover:text-red-400"
            : "rotate-x-0 text-slate-950 hover:text-blue-400 dark:text-red-100 dark:hover:text-red-400"
        }`}
        onClick={handleShuffleToggle}
      >
        <Shuffle size={24} />
      </button>
    </div>
  );
};

export default PlayControls;
