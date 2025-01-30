import PlayListItem from "./PlayListItem";

export default function Playlist() {
  return (
    <div className="w-full md:w-96 bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Playlist</h2>
      <div className="space-y-2">
        <PlayListItem title="Fever" artist="Wizkid" duration="4:13" isSelected={false} />
        <PlayListItem title="Save Your Tears" artist="The Weeknd" duration="3:35" isSelected={false} />
        <PlayListItem title="If" artist="Davido" duration="3:58" isSelected={false} />
        <PlayListItem title="Joro" artist="Wizkid" duration="4:23" isSelected={true} />
        <PlayListItem title="Starboy" artist="The Weeknd" duration="3:50" isSelected={false} />
        <PlayListItem title="Calm Down" artist="Rema" duration="3:40" isSelected={false} />
        <PlayListItem title="Rush" artist="Ayra Starr" duration="3:06" isSelected={false} />
        <PlayListItem title="Essence" artist="Wizkid ft. Tems" duration="3:43" isSelected={false} />
        <PlayListItem title="Understand" artist="Omah Lay" duration="2:55" isSelected={false} />
        <PlayListItem title="Ngozi" artist="Crayon & Ayra Starr" duration="3:42" isSelected={false} />
      </div>
    </div>
  );
}
