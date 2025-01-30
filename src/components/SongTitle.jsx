export default function SongTitle({ title = "Unknown Song", artist = "Unknown Artist" }) {
    return (
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm md:text-base text-gray-400">{artist}</p>
      </div>
    );
  }
  