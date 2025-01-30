import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="w-40 h-40 md:w-56 md:h-56 rounded-lg overflow-hidden shadow-lg">
      <img
        src={placeholder}
        alt="Album Cover"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
