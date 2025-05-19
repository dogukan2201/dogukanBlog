import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const Footer: React.FC = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/dogukan2201",
      icon: <Github size={20} />,
      ariaLabel: "GitHub profiline git",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dogukan-ozturk-862497221/",
      icon: <Linkedin size={20} />,
      ariaLabel: "LinkedIn profiline git",
    },
    {
      name: "Email",
      url: "mailto:husnudogukan@gmail.com",
      icon: <Mail size={20} />,
      ariaLabel: "Email gönder",
    },
  ];

  const footerLinks = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projeler", path: "/projects" },
    { name: "Hakkımda", path: "/about" },
    { name: "İletişim", path: "/contact" },
  ];

  const getSocialLinkClasses = () => {
    return `p-2 rounded-full transition-all duration-300 ${
      darkMode
        ? "hover:bg-slate-800 hover:scale-110"
        : "hover:bg-gray-200 hover:scale-110"
    }`;
  };

  const getSocialIconClasses = () => {
    return `transition-colors duration-300 ${
      darkMode
        ? "text-blue-400 hover:text-blue-300"
        : "text-blue-800 hover:text-blue-700"
    }`;
  };

  const getFooterLinkClasses = () => {
    return `text-sm transition-colors duration-300 font-mono ${
      darkMode
        ? "text-blue-400 hover:text-blue-300"
        : "text-blue-800 hover:text-blue-700"
    }`;
  };

  return (
    <footer
      className={`py-12 ${
        darkMode ? "bg-slate-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight font-mono bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
            >
              DogukanDev
            </Link>
            <p
              className={`mt-2 text-sm font-mono ${
                darkMode ? "text-blue-400" : "text-blue-800"
              }`}
            >
              Kod, tasarım ve daha fazlasını keşfediyorum.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(({ name, url, icon, ariaLabel }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={getSocialLinkClasses()}
                  aria-label={ariaLabel}
                >
                  <span className={getSocialIconClasses()}>{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
              {footerLinks.map(({ name, path }) => (
                <Link key={path} to={path} className={getFooterLinkClasses()}>
                  {name}
                </Link>
              ))}
            </nav>
            <p
              className={`text-sm font-mono ${
                darkMode ? "text-blue-400" : "text-blue-800"
              }`}
            >
              {currentYear} Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
