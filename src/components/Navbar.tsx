import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Glass container */}
      <div
        className={`mx-auto max-w-4xl rounded-full border transition-all duration-300 ease-in-out
        ${
          isAtTop
            ? "bg-white/20 dark:bg-neutral-900/20 backdrop-blur-xl border-white/10"
            : "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-2xl border-white/20 shadow-lg"
        }`}
      >
        {/* RESIZING happens here */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-in-out
          ${isAtTop ? "h-14 px-6" : "h-11 px-4"}`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-semibold text-neutral-900 dark:text-white"
          >
            Anoushka
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium
                           text-neutral-600 dark:text-neutral-300
                           hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60
                           hover:text-neutral-900 dark:hover:text-white
                           transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-neutral-600 dark:text-neutral-300
                         hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="md:hidden p-2 rounded-full
                       text-neutral-700 dark:text-neutral-300
                       hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-2 mx-4 rounded-2xl border
        bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl
        border-neutral-200 dark:border-neutral-800 shadow-lg
        transition-all duration-300
        ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-xl px-4 py-2 text-sm font-medium
                         text-neutral-700 dark:text-neutral-300
                         hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 mt-3 border-t border-neutral-200 dark:border-neutral-800">
            <button
              onClick={toggleDarkMode}
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2
                         text-sm font-medium text-neutral-700 dark:text-neutral-300
                         hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
