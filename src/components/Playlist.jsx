import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="w-full md:w-96 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Playlist</h2>
      <div className="space-y-2">
        <PlayListItem title="Fever" artist="Wizkid" duration="4:13" isSelected={true} />
        <PlayListItem title="Save Your Tears" artist="The Weeknd" duration="3:35" isSelected={false} />
        <PlayListItem title="Joro" artist="Wizkid" duration="4:23" isSelected={false} />
        <PlayListItem title="Essence" artist="Wizkid ft. Tems" duration="3:43" isSelected={false} />
        <PlayListItem title="Starboy" artist="The Weeknd" duration="3:50" isSelected={false} />
      </div>
    </div>
  );
}
