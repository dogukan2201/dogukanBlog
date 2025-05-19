import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Post } from "../types";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  const { darkMode } = useTheme();

  const getCardClasses = () => {
    const baseClasses =
      "group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl";
    const themeClasses = darkMode
      ? "bg-slate-800 hover:bg-slate-700"
      : "bg-white hover:bg-gray-50 border border-gray-200";
    const featuredClasses = featured
      ? "transform-gpu hover:-translate-y-2"
      : "";

    return `${baseClasses} ${themeClasses} ${featuredClasses}`;
  };

  const getCategoryBadgeClasses = () => {
    return `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono ${
      darkMode ? "bg-slate-900/80 text-white" : "bg-white/90 text-slate-900"
    }`;
  };

  const getMetaTextClasses = () => {
    return `flex items-center gap-4 mb-3 text-sm font-mono ${
      darkMode ? "text-gray-400" : "text-gray-500"
    }`;
  };

  const getExcerptClasses = () => {
    return `mb-4 line-clamp-3 font-mono ${
      darkMode ? "text-gray-300" : "text-gray-600"
    }`;
  };

  const getReadMoreClasses = () => {
    return `inline-flex items-center text-sm font-medium font-mono transition-colors ${
      darkMode
        ? "text-blue-400 hover:text-blue-300"
        : "text-blue-800 hover:text-blue-700"
    }`;
  };

  return (
    <article
      className={getCardClasses()}
      role="article"
      aria-labelledby={`post-title-${post.id}`}
    >
      <Link
        to={`/blog/${post.id}`}
        className="block"
        aria-label={`${post.title} yazısını oku`}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-800 text-white font-mono">
                Öne Çıkan
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={getCategoryBadgeClasses()}>{post.category}</span>
          </div>
        </div>

        <div className="p-6">
          <h3
            id={`post-title-${post.id}`}
            className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors font-mono"
          >
            {post.title}
          </h3>

          <div className={getMetaTextClasses()}>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" aria-hidden="true" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" aria-hidden="true" />
              {post.readTime} dakika okuma
            </div>
          </div>

          <p className={getExcerptClasses()}>{post.excerpt}</p>

          <div className={getReadMoreClasses()}>
            Devamını oku
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
