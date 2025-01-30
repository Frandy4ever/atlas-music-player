import { useState } from "react";
import rewindIcon from "../assets/lucide--rewind.svg";
import playIcon from "../assets/lucide--square-play.svg";
import forwardIcon from "../assets/lucide--fast-forward.svg";
import shuffleIcon from "../assets/lucide--shuffle.svg";

export default function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  return (
    <div className="flex items-center space-x-4">
      {/* Speed Button */}
      <button
        onClick={() => setSpeed(speed === 1 ? 2 : 1)}
        className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white text-lg font-bold rounded-full hover:bg-gray-700"
      >
        {speed}x
      </button>

      {/* Rewind Button */}
      <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
        <img src={rewindIcon} alt="Rewind" className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-4 bg-blue-600 rounded-full hover:bg-blue-500"
      >
        <img src={playIcon} alt="Play/Pause" className="w-8 h-8" />
      </button>

      {/* Forward Button */}
      <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
        <img src={forwardIcon} alt="Forward" className="w-6 h-6" />
      </button>

      {/* Shuffle Button */}
      <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700">
        <img src={shuffleIcon} alt="Shuffle" className="w-6 h-6" />
      </button>
    </div>
  );
}
