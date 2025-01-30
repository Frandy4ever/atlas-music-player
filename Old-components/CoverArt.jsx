import placeholder from "../assets/simpson.gif";

export default function CoverArt() {
  return (
    <div className="w-[350px] h-[350px] md:w-[380px] md:h-[380px] rounded-lg overflow-hidden shadow-lg lg:ml-10 p-6 sm:p-4">
      <img
        src={placeholder}
        alt="Album Cover"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
