import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const technicalBlogs = [
  {
    title: "Optimizing React Performance",
    excerpt: "Lessons Learned from the Frontlines of Modern Web Development - Practical techniques and best practices for improving React application performance.",
    category: "Technical",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/optimizing-react-performance-3a7159b6d44e"
  },
  {
    title: "The Future of Machine Learning in Product Development (2020–2025 and Beyond)",
    excerpt: "Exploring how ML is transforming the way we build and iterate on software products, from automated testing to intelligent user experience optimization.",
    category: "Technical",
    date: "Nov 28, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/the-future-of-machine-learning-in-product-development-2020-2025-and-beyond-80dee1bf7e90"
  },
  {
    title: "Navigating the Data Jungle: B+ Trees, LSM Trees, and Bw-Trees in Payments and Financial Systems",
    excerpt: "A deep dive into advanced data structures and their applications in financial systems, exploring performance optimization and scalability.",
    category: "Technical",
    date: "Nov 10, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/navigating-the-data-jungle-b-trees-lsm-trees-and-bw-trees-in-payments-and-financial-systems-e71a1bf79216"
  }
];

const personalBlogs = [
  {
    title: "Golden Repair",
    excerpt: "A personal reflection on growth, resilience, and the beauty of imperfection in our journey through life and technology.",
    category: "Personal",
    date: "Oct 22, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/golden-repair-15c7fede91fd"
  },
  {
    title: "Vessels in the Void",
    excerpt: "Exploring the spaces between creation and destruction, finding meaning in the emptiness that surrounds us.",
    category: "Personal",
    date: "Oct 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/vessels-in-the-void-8b3a51feaca9"
  },
  {
    title: "The Choir of Gleefulness",
    excerpt: "A celebration of joy and the collective spirit that emerges when we come together in harmony.",
    category: "Personal",
    date: "Oct 8, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/the-choir-of-gleefulness-3d1aecb5e5f3"
  },
  {
    title: "The Facade of Desire",
    excerpt: "Examining the masks we wear and the true desires that lie beneath our carefully constructed exteriors.",
    category: "Personal",
    date: "Oct 1, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/the-facade-of-desire-cb3c76f7344f"
  },
  {
    title: "Fresh Dew on This Chaotic Splendor",
    excerpt: "Finding moments of peace and clarity amidst the chaos of modern life and technological advancement.",
    category: "Personal",
    date: "Sep 24, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    link: "https://medium.com/@chaitanyayendru/fresh-dew-on-this-chaotic-splendor-a-fleeting-stillness-amidst-the-storm-a-gentle-offering-of-a3918fffb047"
  }
];

// Combine for display on main page (2 technical + 2 personal)
const blogPosts = [...technicalBlogs.slice(0, 2), ...personalBlogs.slice(0, 2)];

const BlogCard = ({ index, title, excerpt, category, date, readTime, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-glass backdrop-blur-sm rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 group overflow-hidden cursor-pointer h-full flex flex-col"
        onClick={() => window.open(link, "_blank")}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
            {excerpt}
          </p>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-accent text-sm font-medium group-hover:text-accent-light transition-colors duration-300 mt-auto"
          >
            Read Article →
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="relative z-0 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-lg mb-4">Thoughts & Insights</p>
          <h2 className="text-white font-bold text-5xl mb-6">
            Blog
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Sharing insights, experiences, and learnings from my journey in software development, 
            machine learning, and product engineering.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post, index) => (
            <BlogCard key={`blog-${index}`} index={index} {...post} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
            >
              View All Blog Posts
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-glass backdrop-blur-sm p-8 rounded-2xl border border-accent/20">
            <h3 className="text-white font-bold text-2xl mb-4">
              Stay Updated
            </h3>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest insights on technology, 
              machine learning, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white/10 border border-accent/30 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-accent/60 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-glow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 