import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Future of Machine Learning in Product Development",
    excerpt: "Exploring how ML is transforming the way we build and iterate on software products, from automated testing to intelligent user experience optimization.",
    category: "Machine Learning",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    link: "#"
  },
  {
    title: "Building Scalable Microservices with .NET",
    excerpt: "A deep dive into designing and implementing microservices architecture using .NET Core, with real-world examples from my experience at DeltaX.",
    category: "Backend Development",
    date: "Nov 28, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    link: "#"
  },
  {
    title: "Optimizing React Performance: Lessons Learned",
    excerpt: "Practical techniques and best practices for improving React application performance, including code splitting, memoization, and bundle optimization.",
    category: "Frontend Development",
    date: "Nov 10, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    link: "#"
  },
  {
    title: "Bayesian Estimation in IoT: A Practical Guide",
    excerpt: "How Bayesian estimation techniques can improve the accuracy and efficiency of IoT network data processing and analysis.",
    category: "Research",
    date: "Oct 22, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    link: "#"
  }
];

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