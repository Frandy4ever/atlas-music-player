export default function PlayListItem({ title, artist, duration, isSelected }) {
    return (
      <div
        className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
          isSelected ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-400">{artist}</p>
        </div>
        <span className="text-xs">{duration}</span>
      </div>
    );
  }
  