import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="sticky bottom-0 w-full
      bg-footer-bg-light text-footer-text
      dark:bg-footer-bg-dark 
      py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <span>&copy; {year} Atlas School</span>
        <span><ThemeToggle /></span>

      </div>
    </footer>
  );
}
