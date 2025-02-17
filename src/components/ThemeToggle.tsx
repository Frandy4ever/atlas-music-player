import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-blue-300 text-white bold rounded-full shadow-lg 
               hover:bg-gray-900 dark:bg-red-300 dark:text-black dark:hover:bg-slate-100 transition-all"
    >
      {darkMode ? <Sun size={20} className="text-slate-700" /> : <Moon size={20} className="text-slate-200" />}
    </button>
  );
};

export default ThemeToggle;
