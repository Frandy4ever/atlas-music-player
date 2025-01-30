import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg w-full md:w-96">
      {/* Cover Art */}
      <CoverArt />

      {/* Song Title */}
      <div className="mt-4">
        <SongTitle title="Blinding Lights" artist="The Weeknd" />
      </div>

      {/* Play Controls */}
      <div className="w-full mt-6 flex flex-col items-center">
        <PlayControls />
        
        {/* Volume Controls: Full Width Below Shuffle Button */}
        <div className="w-full mt-4 px-6">
          <VolumeControls />
        </div>
      </div>
    </div>
  );
}
