import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-slate-200">
      <CoverArt />
      <SongTitle title="Blinding Lights" artist="The Weeknd" />
      <PlayControls />
      <VolumeControls />
      <div className="w-80 space-y-2">
        <PlayListItem title="Fever" artist="Wizkid" duration="4:13" isSelected={true} />
        <PlayListItem title="Save Your Tears" artist="The Weeknd" duration="3:35" isSelected={false} />
        <PlayListItem title="Joro" artist="Wizkid" duration="4:23" isSelected={false} />
      </div>
      <MusicPlayer />
      <Footer/>
    </div>
  );
}
