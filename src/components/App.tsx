import MusicPlayer from "./MusicPlayer";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[--color-bg-light] dark:bg-[--color-bg-dark]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center py-4 sticky top-0
                   bg-[--color-header-bg-light] dark:bg-[--color-header-bg-dark]
                   text-[--color-primary-text] dark:text-[--color-footer-text-dark] z-10">
        🎶Atlas Music Player🎵
      </h1>

      {/* Main Content */}
      <main className="flex-1 grid place-items-center p-4">
        {/* centers the player box */}
        <MusicPlayer />
      </main>

    </div>
  );

};

export default App;
