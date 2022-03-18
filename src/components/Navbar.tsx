import { content } from "../lib/content";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface navbarRefProp {
  sectionRef: React.RefObject<Record<string, HTMLElement | null>>;
}

const Navbar = ({ sectionRef }: navbarRefProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const navTextClass = isScrolled ? "text-[color:var(--text)]" : "text-white";
  const iconColor = isScrolled
    ? theme === "dark"
      ? "#ffffff"
      : "#0f172a"
    : "#ffffff";
  const navLinkClass = `transition-all duration-200 cursor-pointer font-medium relative ${navTextClass}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const mobileMenuBg = "bg-[color:var(--surface)] text-[color:var(--text)]";

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        isScrolled
          ? "bg-[color:var(--surface)] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 group"
          aria-label="Navigate to home section"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 bg-gradient-to-r from-sky-500 to-purple-500 text-white group-hover:shadow-lg group-hover:shadow-sky-500/50">
            DD
          </div>
          <span
            className={`font-bold tracking-wide hidden sm:inline transition-all duration-300 ${navTextClass}`}
          >
            Dominique Daniels
          </span>
        </button>

        <div className="ml-auto hidden md:flex gap-3 items-center">
          {content.navbar.navlinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-all duration-200 cursor-pointer font-medium relative group hover:text-sky-400 ${navLinkClass}`}
              aria-label={`Jump to ${item} section`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="ml-auto md:hidden">
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((s) => !s)}
            className="transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <ExitToAppIcon sx={{ color: iconColor }} />
            ) : (
              <MenuIcon sx={{ color: iconColor }} />
            )}
          </button>
        </div>

        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] transition hover:brightness-110"
        >
          {theme === "dark" ? (
            <LightModeIcon fontSize="small" />
          ) : (
            <DarkModeIcon fontSize="small" />
          )}
        </button>

        {isMenuOpen && (
          <div
            className={`absolute right-4 top-16 md:hidden flex flex-col gap-2 p-3 rounded-lg shadow-lg backdrop-blur-md transition-all duration-300 ${mobileMenuBg}`}
            role="menu"
            aria-label="Mobile Navigation"
          >
            {content.navbar.navlinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left w-full capitalize px-3 py-2 rounded-md transition-all duration-150 font-medium relative text-[color:var(--text)] hover:bg-white/10 hover:text-sky-300"
                role="menuitem"
                aria-label={`Jump to ${item} section`}
              >
                {item}
                <span className="absolute bottom-1 left-3 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 w-0 group-hover:w-[calc(100%-24px)] transition-all duration-300" />
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  function scrollToSection(sectionID: string) {
    sectionRef.current[sectionID.toLowerCase()]?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  }
};

export default Navbar;
