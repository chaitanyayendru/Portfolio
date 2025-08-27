import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { Navbar } from "./index";
import { products } from "../constants";

// Add features for each product
const productsWithFeatures = [
  {
    ...products[0],
    features: ["4 Projection Methods", "3 Optimization Strategies", "ML-powered Insights", "Real-time Dashboards", "React Frontend", "Flask Backend", "PostgreSQL", "Docker Deployment"]
  },
  {
    ...products[1],
    features: ["6 AI Agents", "Financial Analysis", "Payment Processing", "Fraud Detection", "Portfolio Management", "Risk Assessment", "Compliance", "25+ Dependencies"]
  },
  {
    ...products[2],
    features: ["100k+ ops/sec", "Sub-millisecond Latency", "Dual Protocols", "Real-time Monitoring", "Fraud Detection", "Market Data Caching", "Go Language", "Docker Deployment"]
  }
];

const ProductCard = ({ index, name, description, category, status, image, link, features }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Beta": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "In Development": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      default: return "text-white/60 bg-white/10 border-white/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-glass backdrop-blur-sm p-6 rounded-2xl w-full border border-accent/20 hover:border-accent/40 transition-all duration-300 group h-full"
      >
        <div className="relative w-full h-[280px] cursor-pointer mb-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-3 left-3">
            <span className={`text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30`}>
              {category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-accent transition-colors duration-300">{name}</h3>
          <p className="text-white/70 text-base leading-relaxed mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(link, "_blank")}
          className="w-full py-3 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 transition-all duration-300"
        >
          Learn More
        </motion.button>
      </Tilt>
    </motion.div>
  );
};

const ProductsPage = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Link to="/" className="inline-block mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-accent/10 border border-accent/30 text-accent font-medium rounded-full hover:bg-accent/20 transition-all duration-300"
              >
                ← Back to Home
              </motion.button>
            </Link>
            
            <p className="text-accent font-semibold text-lg mb-4">Innovation</p>
            <h1 className="text-white font-bold text-6xl mb-6">
              Products & Tools
            </h1>
            <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
              Building innovative tools and products that solve real-world problems, 
              enhance developer productivity, and drive technological advancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsWithFeatures.map((product, index) => (
              <ProductCard key={`product-${index}`} index={index} {...product} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-white/50 text-lg mb-8">
              Have an idea for a product? Let's build something amazing together.
            </p>
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
              >
                Start a Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 