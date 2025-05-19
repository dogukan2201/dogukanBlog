import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { featuredPosts, recentPosts } from "../data/posts";
import PostCard from "../components/PostCard";

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();
  const [typedText, setTypedText] = useState("");
  const fullText = "Kod,Tasarım  ve  Teknoloji";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="animate-fadeIn font-mono">
      <section
        className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-gradient-to-br from-white to-gray-100"
        }`}
      >
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Terminal
              size={24}
              className={`${
                darkMode ? "text-blue-400" : "text-blue-800"
              } mr-2 sm:mr-3`}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              <span className="text-blue-800 dark:text-blue-400">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 mx-auto max-w-2xl leading-relaxed">
            <span className="text-blue-800 dark:text-blue-400">$</span> Yazılım
            geliştirme dünyasında sürekli değişen ve gelişen teknolojiler
            üzerine.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Blog'u Oku
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg ${
                darkMode
                  ? "bg-slate-800 text-white hover:bg-slate-700"
                  : "bg-white text-slate-900 hover:bg-gray-100"
              } font-medium transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base`}
            >
              Hakkımda
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode && "bg-slate-900"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center sm:text-left">
              <span className="text-blue-800 dark:text-blue-400 font-mono">
                &lt;h1&gt;
              </span>{" "}
              Öne Çıkan Yazılar{" "}
              <span className="text-blue-800 dark:text-blue-400 font-mono">
                &lt;/h1&gt;
              </span>
            </h2>
            <Link
              to="/blog"
              className={`inline-flex items-center font-medium text-sm sm:text-base ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-800 hover:text-blue-700"
              }`}
            >
              Tüm yazıları gör
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode && "bg-slate-900"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-blue-800 dark:text-blue-400">&lt;h2&gt;</span>{" "}
            Son Yazılar{" "}
            <span className="text-blue-800 dark:text-blue-400">
              &lt;/h2&gt;
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentPosts.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/blog"
              className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg ${
                darkMode
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-white text-slate-900 hover:bg-gray-100"
              } font-medium transition-colors duration-300 shadow-md hover:shadow-lg text-sm sm:text-base`}
            >
              Tüm Yazıları Gör
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
