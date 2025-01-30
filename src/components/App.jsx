import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <CoverArt />
      <MusicPlayer />
      <Footer/>
    </div>
  );
}
