export default function PlayListItem({ title, artist, duration, isSelected }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
        isSelected
          ? "bg-accent text-black" // Currently playing song (Accent color)
          : "bg-gray-800 text-gray-300 hover:bg-primary hover:text-black"
      }`}
    >
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className={`text-xs ${isSelected ? "text-white" : "text-gray-400 hover:text-white"}`}>
          {artist}
        </p>
      </div>
      <span className={`text-xs ${isSelected ? "text-black" : "text-gray-300 hover:text-black"}`}>
        {duration}
      </span>
    </div>
  );
}
