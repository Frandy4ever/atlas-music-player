interface PlayListItemProps {
    title: string;
    artist: string;
    duration: string;
    isSelected: boolean;
    onClick: () => void;
  }
  
  export default function PlayListItem({ title, artist, duration, isSelected, onClick }: PlayListItemProps) {
    return (
      <div
        className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
          isSelected
            ? "bg-accent text-black dark:bg-accent dark:text-black" // Currently playing song (Accent color)
            : "bg-gray-800 text-gray-300 dark:bg-gray-900 dark:text-gray-300 hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black"
        }`}
        onClick={onClick}
      >
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p
            className={`text-xs transition ${
              isSelected
                ? "text-black dark:text-black"
                : "text-gray-200 dark:text-gray-400 hover:text-blue-600"
            }`}
          >
            {artist}
          </p>
        </div>
        <span
          className={`text-xs transition ${
            isSelected
              ? "text-black dark:text-black"
              : "text-gray-300 hover:text-blue-600"
          }`}
        >
          {duration}
        </span>
      </div>
    );
  }
  