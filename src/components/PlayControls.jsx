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
        className="w-12 h-12 flex items-center justify-center bg-primary text-black text-lg font-bold rounded-full hover:bg-accent transition"
      >
        {speed}x
      </button>

      {/* Rewind Button */}
      <button className="p-3 bg-primary rounded-full hover:bg-accent transition">
        <img src={rewindIcon} alt="Rewind" className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-4 bg-accent rounded-full hover:bg-primary transition"
      >
        <img src={playIcon} alt="Play/Pause" className="w-8 h-8" />
      </button>

      {/* Forward Button */}
      <button className="p-3 bg-primary rounded-full hover:bg-accent transition">
        <img src={forwardIcon} alt="Forward" className="w-6 h-6" />
      </button>

      {/* Shuffle Button */}
      <button className="p-3 bg-primary rounded-full hover:bg-accent transition">
        <img src={shuffleIcon} alt="Shuffle" className="w-6 h-6" />
      </button>
    </div>
  );
}
