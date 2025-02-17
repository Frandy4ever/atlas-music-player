import { useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";

interface VolumeControlsProps {
  onVolumeChange: (volume: number) => void;
  onLyricsToggle: () => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ onVolumeChange, onLyricsToggle }) => {
  const [volume, setVolume] = useState(50);
  const [showPercentage, setShowPercentage] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isMuted = volume === 0;

  // Determine icon color based on state
  const getIconColor = (active: boolean) =>
    active
      ? "text-blue-600 dark:text-red-600 hover:text-blue-400 dark:hover:text-red-300"
      : "text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-red-400";

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    onVolumeChange(newVolume);
  };

  const getVolumeColor = () => {
    if (volume <= 30) return "bg-black text-white accent-black";
    if (volume > 30 && volume <= 50) return "bg-stone-950 text-white accent-stone-950";
    if (volume > 50 && volume <= 80) return "bg-blue-950 dark:bg-red-950 text-white accent-blue-950 dark:accent-red-950";
    return "bg-blue-600 dark:bg-red-600 text-black accent-blue-600 dark:accent-red-600";
  };

  return (
    <div className="flex items-center justify-around w-[400px]">
      {/* Volume Icon */}
      <button
        className={getIconColor(isMuted)}
        onClick={() => setVolume(volume > 0 ? 0 : 50)}
      >
        {isMuted ? <VolumeOff size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Volume Slider */}
      <div
        className="relative flex-grow"
        onMouseEnter={() => setShowPercentage(true)}
        onMouseLeave={() => setShowPercentage(false)}
      >
        {/* Floating Volume Percentage */}
        <div
          className={`absolute -top-3 left-1/2 transform -translate-x-1/2 text-sm font-semibold px-1 rounded-md transition-all ${
            showPercentage ? "opacity-100" : "opacity-0"
          } ${getVolumeColor()}`}
          style={{ left: `${(volume / 100) * 100}%`, transform: "translate(-50%, 0)" }}
        >
          {volume}%
        </div>

        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          onMouseDown={() => setShowPercentage(true)}
          onMouseUp={() => setShowPercentage(false)}
          className={`h-1 rounded-lg  cursor-pointer transition-all ${getVolumeColor()} w-full`}
        />
      </div>

      {/* Lyrics Icon */}
      <div className="relative">
        {/* Icon */}
        <button
          className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-red-400"
          onClick={onLyricsToggle}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <span className="material-symbols-outlined text-2xl">lyrics</span>
        </button>

        {/* Tooltip (Only visible on hover) */}
        {showTooltip && (
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 rounded shadow-md">
            Lyrics
          </div>
        )}
      </div>
    </div>
  );
};

export default VolumeControls;
