import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky bottom-0 w-full bg-blue-400 text-red-600 dark:bg-red-400 dark:text-blue-600 py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <span>&copy; {year} Atlas School</span>
        <span><ThemeToggle /></span>
        
      </div>
    </footer>
  );
}
