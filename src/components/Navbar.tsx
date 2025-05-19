import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projeler", path: "/projects" },
  { name: "Hakkımda", path: "/about" },
  { name: "İletişim", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const getNavbarClasses = () => {
    const baseClasses = "sticky top-0 z-50 transition-all duration-300";
    const scrolledClasses = isScrolled
      ? `${
          darkMode
            ? "bg-slate-900/95 shadow-lg shadow-blue-900/20"
            : "bg-white/95 shadow-lg shadow-blue-300/20"
        } backdrop-blur-sm`
      : `${darkMode ? "bg-slate-900" : "bg-transparent"}`;

    return `${baseClasses} ${scrolledClasses}`;
  };

  const getNavLinkClasses = (path: string) => {
    const baseClasses =
      "text-sm font-medium transition-colors duration-200 font-mono";
    const activeClasses =
      location.pathname === path
        ? `${darkMode ? "text-blue-400" : "text-blue-800"} font-semibold`
        : `${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-800 hover:text-blue-700"
          }`;

    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <header className={getNavbarClasses()}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              aria-label="Ana Sayfa"
            >
              <Terminal
                size={28}
                className={`${
                  darkMode
                    ? "text-blue-400 group-hover:text-blue-300"
                    : "text-blue-800 group-hover:text-blue-700"
                } group-hover:scale-110 transition-all duration-300`}
              />
              <span className="text-xl font-bold tracking-tight font-mono bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                DogukanDev
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={getNavLinkClasses(path)}
                aria-current={location.pathname === path ? "page" : undefined}
              >
                {name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
              aria-label={darkMode ? "Açık moda geç" : "Koyu moda geç"}
            >
              {darkMode ? (
                <Sun size={20} className="text-blue-400" />
              ) : (
                <Moon size={20} className="text-blue-800" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
              aria-label={darkMode ? "Açık moda geç" : "Koyu moda geç"}
            >
              {darkMode ? (
                <Sun size={20} className="text-blue-400" />
              ) : (
                <Moon size={20} className="text-blue-800" />
              )}
            </button>
            <button
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-800 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition duration-200"
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            darkMode ? "bg-slate-900" : "bg-white"
          }`}
        >
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium font-mono transition-colors duration-200 ${
                location.pathname === path
                  ? `${
                      darkMode
                        ? "text-blue-400 bg-blue-900/30"
                        : "text-blue-800 bg-blue-100"
                    } font-semibold`
                  : `${
                      darkMode
                        ? "text-blue-400 hover:bg-blue-900/30 hover:text-blue-300"
                        : "text-blue-800 hover:bg-blue-100 hover:text-blue-700"
                    }`
              }`}
              aria-current={location.pathname === path ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
