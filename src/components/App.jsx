import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import SongTitle from "./SongTitle";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <CoverArt />
      <SongTitle title="Blinding Lights" artist="The Weeknd"/>
      <MusicPlayer />
      <Footer/>
    </div>
  );
}
