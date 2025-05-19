import { Post } from '../types';

export const allPosts: Post[] = [
  {
    id: 'getting-started-with-react',
    title: 'Getting Started with React: A Comprehensive Guide for Beginners',
    date: 'May 12, 2023',
    readTime: 8,
    category: 'React',
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    excerpt: 'Learn how to build your first React application from scratch. This guide covers all the basics you need to know to get started with React development.',
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large Scale Applications',
    date: 'June 5, 2023',
    readTime: 12,
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Architecture'],
    excerpt: 'Discover essential TypeScript patterns and practices that help maintain large codebases. Learn how to leverage TypeScript\'s type system for better code quality.',
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'tailwind-vs-css',
    title: 'Tailwind CSS vs. Traditional CSS: Which Should You Choose?',
    date: 'July 18, 2023',
    readTime: 6,
    category: 'CSS',
    tags: ['CSS', 'Tailwind', 'Web Design', 'Frontend'],
    excerpt: 'An in-depth comparison of utility-first CSS frameworks like Tailwind and traditional CSS approaches. Learn the pros and cons of each methodology.',
    coverImage: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'react-performance-optimization',
    title: '10 React Performance Optimization Techniques You Should Know',
    date: 'August 7, 2023',
    readTime: 10,
    category: 'React',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    excerpt: 'Practical techniques to improve your React application\'s performance. Learn about memoization, code splitting, and other strategies to make your app faster.',
    coverImage: 'https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'building-rest-apis',
    title: 'Building RESTful APIs with Node.js and Express',
    date: 'September 15, 2023',
    readTime: 14,
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API', 'REST', 'Backend'],
    excerpt: 'A comprehensive guide to creating robust RESTful APIs using Node.js and Express. Learn best practices for route design, middleware, and error handling.',
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'graphql-vs-rest',
    title: 'GraphQL vs REST: Choosing the Right API Architecture',
    date: 'October 2, 2023',
    readTime: 9,
    category: 'API',
    tags: ['GraphQL', 'REST', 'API', 'Architecture', 'Backend'],
    excerpt: 'Compare GraphQL and REST API architectures to understand their strengths and weaknesses. Learn when to use each approach for your projects.',
    coverImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'docker-for-developers',
    title: 'Docker for Web Developers: A Practical Introduction',
    date: 'November 11, 2023',
    readTime: 11,
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Containers', 'Web Development'],
    excerpt: 'Learn how to use Docker to streamline your development workflow. This guide covers Docker basics, creating development environments, and deploying applications.',
    coverImage: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'css-grid-layout',
    title: 'Mastering CSS Grid Layout: Advanced Techniques',
    date: 'December 5, 2023',
    readTime: 7,
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Layout', 'Web Design', 'Frontend'],
    excerpt: 'Explore advanced CSS Grid techniques for creating complex layouts. Learn how to build responsive, asymmetrical designs with clean, maintainable code.',
    coverImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'typescript-generics',
    title: 'Understanding TypeScript Generics: Practical Examples',
    date: 'January 17, 2024',
    readTime: 8,
    category: 'TypeScript',
    tags: ['TypeScript', 'Generics', 'JavaScript', 'Web Development'],
    excerpt: 'A deep dive into TypeScript generics with practical, real-world examples. Learn how to write more flexible and reusable code with generic types.',
    coverImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'react-hooks-advanced',
    title: 'Advanced React Hooks: Beyond the Basics',
    date: 'February 8, 2024',
    readTime: 10,
    category: 'React',
    tags: ['React', 'Hooks', 'JavaScript', 'Advanced', 'Frontend'],
    excerpt: 'Take your React Hooks knowledge to the next level. Learn advanced patterns and custom hook techniques to solve complex state management problems.',
    coverImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'nextjs-vs-gatsby',
    title: 'Next.js vs Gatsby: Choosing the Right React Framework',
    date: 'March 21, 2024',
    readTime: 9,
    category: 'React',
    tags: ['React', 'Next.js', 'Gatsby', 'Framework', 'SSG', 'SSR'],
    excerpt: 'Compare Next.js and Gatsby to determine which React framework is best for different types of projects. Understand the key differences and trade-offs.',
    coverImage: 'https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-accessibility',
    title: 'Web Accessibility: Building Inclusive Experiences',
    date: 'April 5, 2024',
    readTime: 12,
    category: 'Accessibility',
    tags: ['Accessibility', 'A11y', 'Web Development', 'Inclusive Design'],
    excerpt: 'Learn how to create accessible web applications that work for everyone. Discover practical techniques for implementing WCAG guidelines in your projects.',
    coverImage: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const featuredPosts = [
  allPosts[9], // Advanced React Hooks
  allPosts[1], // TypeScript Best Practices
  allPosts[6]  // Docker for Web Developers
];

export const recentPosts = [
  allPosts[11], // Web Accessibility
  allPosts[10], // Next.js vs Gatsby
  allPosts[9],  // Advanced React Hooks
  allPosts[8],  // TypeScript Generics
  allPosts[7],  // Mastering CSS Grid Layout
  allPosts[6]   // Docker for Web Developers
];