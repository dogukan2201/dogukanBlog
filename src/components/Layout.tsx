import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme();

  const getLayoutClasses = () => {
    const baseClasses =
      "min-h-screen flex flex-col transition-colors duration-300";
    const themeClasses = darkMode
      ? "bg-slate-900 text-white"
      : "bg-gray-50 text-slate-900";

    return `${baseClasses} ${themeClasses}`;
  };

  return (
    <div
      className={getLayoutClasses()}
      role="application"
      aria-label="Ana sayfa düzeni"
    >
      <Navbar />
      <main className="flex-grow" role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
