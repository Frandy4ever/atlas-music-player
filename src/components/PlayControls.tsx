import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShuffleToggle: () => void;
  onPlaybackSpeedChange?: (speed?: number) => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayToggle,
  onNext,
  onPrev,
  onShuffleToggle,
  onPlaybackSpeedChange,
}) => {
  const [speed, setSpeed] = useState(1);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleSpeedChange = () => {
    const newSpeed = speed === 0.5 ? 1 : speed === 1 ? 2 : 0.5;
    setSpeed(newSpeed);
    onPlaybackSpeedChange?.(newSpeed);
  };

  const handleShuffleToggle = () => {
    setIsShuffling((s) => !s);
    onShuffleToggle();
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-5 items-center w-full gap-2 sm:gap-4 md:gap-6">
        {/* Speed */}
        <div className="justify-self-start">
          <button
            className="text-sm sm:text-base text-slate-950 dark:text-slate-100 hover:text-blue-400 dark:hover:text-red-400"
            onClick={handleSpeedChange}
            aria-label="change speed"
          >
            {speed}x
          </button>
        </div>

        {/* Back */}
        <div className="justify-self-start">
          <button
            className="text-slate-950 dark:text-red-100 hover:text-blue-400 dark:hover:text-red-400"
            onClick={onPrev}
            aria-label="previous"
          >
            <SkipBack fill="currentColor" size={24} />
          </button>
        </div>

        {/* Play / Pause */}
        <div className="justify-self-center">
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-950 dark:bg-red-100 hover:bg-blue-600 dark:hover:bg-red-400"
            onClick={onPlayToggle}
            aria-label="play pause"
          >
            {isPlaying ? (
              <Pause className="text-white dark:text-black" size={24} />
            ) : (
              <Play className="text-white dark:text-slate-950" size={24} />
            )}
          </button>
        </div>

        {/* Forward */}
        <div className="justify-self-end">
          <button
            className="text-slate-950 dark:text-red-100 hover:text-blue-400 dark:hover:text-red-400"
            onClick={onNext}
            aria-label="next"
          >
            <SkipForward fill="currentColor" size={24} />
          </button>
        </div>

        {/* Shuffle */}
        <div className="justify-self-end">
          <button
            className={`transition-transform duration-500 ${
              isShuffling
                ? "rotate-180 text-blue-600 dark:text-red-600 hover:text-blue-400 dark:hover:text-red-400"
                : "rotate-0 text-slate-950 hover:text-blue-400 dark:text-red-100 dark:hover:text-red-400"
            }`}
            onClick={handleShuffleToggle}
            aria-label="shuffle"
          >
            <Shuffle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayControls;

