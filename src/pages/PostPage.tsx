import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { allPosts } from '../data/posts';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import PostCard from '../components/PostCard';

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { darkMode } = useTheme();
  const [post, setPost] = useState(allPosts.find(p => p.id === postId));
  const [relatedPosts, setRelatedPosts] = useState<typeof allPosts>([]);

  useEffect(() => {
    // Find current post
    const currentPost = allPosts.find(p => p.id === postId);
    setPost(currentPost);
    
    if (currentPost) {
      // Find related posts by category or tags
      const related = allPosts
        .filter(p => 
          p.id !== currentPost.id && 
          (p.category === currentPost.category || 
           p.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6">
            <Link
              to="/blog"
              className={`inline-flex items-center ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Blog
            </Link>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`text-sm px-3 py-1 rounded-full ${
                darkMode ? 'bg-slate-800 text-rose-400' : 'bg-rose-100 text-rose-800'
              }`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className={`flex flex-wrap items-center gap-4 mb-8 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime} min read
              </div>
            </div>
            
            <div className="mb-8 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className={`py-8 md:py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-3xl">
          <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
            <p className="text-xl leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus in nisl convallis, nec volutpat nisi tempor. Nunc vel ex erat. Sed et ligula ut quam tempor tincidunt.
            </p>
            
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod ultricies felis, in sagittis lorem dapibus non. Phasellus feugiat neque sed mauris pulvinar, in tempus erat dignissim.
            </p>
            
            <h2>Main Concepts</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam a libero eu metus aliquet hendrerit. Sed volutpat tellus non magna bibendum, at hendrerit enim lobortis. Quisque vulputate eros non odio ultricies, ac auctor neque luctus.
            </p>
            
            <ul>
              <li>Quisque bibendum justo quis magna ultricies, non tincidunt ex eleifend</li>
              <li>Sed eleifend libero eget mi tempor, non tempus justo venenatis</li>
              <li>Mauris lobortis tincidunt magna, eu ultrices lorem malesuada sed</li>
              <li>Nulla facilisi. Cras rhoncus gravida odio, id tristique nibh</li>
            </ul>
            
            <h2>Implementation</h2>
            <p>
              Cras fermentum semper urna, at pharetra neque commodo id. Integer interdum ligula a magna ultricies, ut sollicitudin magna sollicitudin. Quisque eget tincidunt nisi, id feugiat nisl.
            </p>
            
            <pre className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
              <code>
{`// Example code
function example() {
  const data = fetchData();
  return data.map(item => {
    return processItem(item);
  });
}`}
              </code>
            </pre>
            
            <p>
              Duis auctor, risus non commodo tincidunt, lacus ligula scelerisque turpis, nec feugiat metus sapien eget metus. Cras non augue a enim fermentum congue.
            </p>
            
            <h2>Conclusion</h2>
            <p>
              Sed euismod, purus sed malesuada luctus, nunc nisi tincidunt nulla, non tempus quam neque vel neque. Praesent varius risus in semper tincidunt.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-8">
              <Tag size={18} className="mr-1" />
              {post.tags.map(tag => (
                <span key={tag} className={`text-sm px-3 py-1 rounded-full ${
                  darkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="text-lg font-medium mb-4">Share this post</h3>
              <div className="flex gap-2">
                <button className={`p-2 rounded-full ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-colors`}>
                  <Share2 size={18} />
                </button>
                {/* Add more social share buttons here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={`py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next/Previous Post */}
      <section className={`py-8 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link
              to={`/blog/${allPosts[(allPosts.findIndex(p => p.id === postId) - 1 + allPosts.length) % allPosts.length].id}`}
              className={`group flex-1 p-6 rounded-xl flex items-center ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <ArrowLeft size={20} className="mr-4 transition-transform group-hover:-translate-x-2" />
              <div>
                <div className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Previous Post</div>
                <div className="font-medium">
                  {allPosts[(allPosts.findIndex(p => p.id === postId) - 1 + allPosts.length) % allPosts.length].title}
                </div>
              </div>
            </Link>
            
            <Link
              to={`/blog/${allPosts[(allPosts.findIndex(p => p.id === postId) + 1) % allPosts.length].id}`}
              className={`group flex-1 p-6 rounded-xl flex items-center justify-end text-right ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <div>
                <div className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Next Post</div>
                <div className="font-medium">
                  {allPosts[(allPosts.findIndex(p => p.id === postId) + 1) % allPosts.length].title}
                </div>
              </div>
              <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostPage;