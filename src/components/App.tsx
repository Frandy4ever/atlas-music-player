import { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer";
import LoadingSkeleton from "./LoadingSkeleton";
import Footer from "./Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate a 2-second data loading process
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup timeout when unmounted
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lightBg text-lightText dark:bg-secondary dark:text-white transition-all">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-lg"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Show LoadingSkeleton if loading, otherwise show MusicPlayer */}
      {loading ? <LoadingSkeleton /> : <MusicPlayer />}

      {/* Footer */}
      <Footer />
    </div>
  );
}
