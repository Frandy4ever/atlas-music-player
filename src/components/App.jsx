import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-200">
      <MusicPlayer />
      <Footer />
    </div>
  );
}
