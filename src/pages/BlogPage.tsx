import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { allPosts } from "../data/posts";
import PostCard from "../components/PostCard";

const BlogPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(allPosts);

  // Extract unique categories
  const categories = ["All", ...new Set(allPosts.map((post) => post.category))];

  useEffect(() => {
    let results = allPosts;

    // Apply category filter
    if (selectedCategory && selectedCategory !== "All") {
      results = results.filter((post) => post.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      results = results.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTermLower) ||
          post.excerpt.toLowerCase().includes(searchTermLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTermLower))
      );
    }

    setFilteredPosts(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore articles, tutorials, and insights on web development,
            design, and technology.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section
        className={`py-8 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-800" : "bg-gray-50"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  size={18}
                  className={darkMode ? "text-gray-400" : "text-gray-500"}
                />
              </div>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  darkMode
                    ? "bg-slate-700 text-white border-slate-600"
                    : "bg-white text-gray-900 border-gray-300"
                } border focus:outline-none focus:ring-2 focus:ring-rose-500`}
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter
                size={18}
                className={`mr-1 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-rose-600 text-white"
                      : darkMode
                      ? "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-16 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p className="text-xl font-medium">
                No posts found matching your criteria.
              </p>
              <p className="mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
