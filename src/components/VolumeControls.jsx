import { useState } from "react";
import volumeIcon from "../assets/lucide--volume-2.svg";

export default function VolumeControls() {
  const [volume, setVolume] = useState(50);

  return (
    <div className="flex items-center space-x-3 w-40">
      {/* Volume Icon */}
      <img src={volumeIcon} alt="Volume" className="w-6 h-6 text-white" />

      {/* Volume Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer transition-all"
        style={{
          background: `linear-gradient(to right, #3b82f6 ${volume}%, #4b5563 ${volume}%)`,
        }}
      />
    </div>
  );
}
