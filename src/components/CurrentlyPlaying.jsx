import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg w-full md:w-96">
      <CoverArt />
      <div className="mt-4">
        <SongTitle title="People" artist="Libianca" />
      </div>
      <div className="mt-6">
        <PlayControls />
      </div>
      <div className="mt-4">
        <VolumeControls />
      </div>
    </div>
  );
}
