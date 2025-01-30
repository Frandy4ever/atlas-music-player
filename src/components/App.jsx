import CurrentlyPlaying from "./CurrentlyPlaying";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Playlist from "./Playlist";


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white space-y-8">
      <MusicPlayer/>
      <CurrentlyPlaying />
      <Playlist/>
      <Footer/>
    </div>
  );
}

