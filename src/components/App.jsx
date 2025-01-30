import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 text-slate-200">
      <CoverArt />
      <SongTitle title="Blinding Lights" artist="The Weeknd" />
      <PlayControls />
      <VolumeControls/>
      <MusicPlayer />
      <Footer/>
    </div>
  );
}
