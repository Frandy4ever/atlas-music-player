import { Play, Pause } from 'lucide-react';

interface PlaylistItemProps {
  title: string;
  artist: string;
  duration: string;
  isPlaying: boolean;
  isPaused: boolean;
  onClick: () => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  title,
  artist,
  duration,
  isPlaying,
  isPaused,
  onClick,
}) => {

  return (
    <div
      className={`flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-all group
      ${isPlaying ? "bg-blue-400 text-blue-800 dark:bg-red-400 dark:text-red-800" : "hover:bg-blue-200 dark:hover:bg-red-200 dark:hover:text-white"}
      ${isPaused && !isPlaying ? "bg-gray-400 dark:bg-gray-600" : ""}`}
      onClick={onClick}
    >
      <div>
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-red-600">
          {artist}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <p className="text-xs">{duration}</p>
        <button className="p-1 rounded-full bg-gray-800 text-white">
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );

};

export default PlaylistItem;
