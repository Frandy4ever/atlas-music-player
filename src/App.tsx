import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center py-4 sticky top-0 bg-slate-300 dark:bg-slate-900 z-10">
        🎶Atlas Music Player🎵
      </h1>

      {/* Main Content */}
      <main className="flex-1">
        <MusicPlayer />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
