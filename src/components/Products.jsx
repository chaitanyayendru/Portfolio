import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { products } from "../constants";

const ProductCard = ({ index, name, description, category, status, image, link }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "text-green-400";
      case "Beta": return "text-yellow-400";
      case "In Development": return "text-blue-400";
      default: return "text-white/60";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full sm:w-[350px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-glass backdrop-blur-sm p-6 rounded-2xl w-full border border-accent/20 hover:border-accent/40 transition-all duration-300 group h-full"
      >
        <div className="relative w-full h-[200px] cursor-pointer mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          <div className="absolute bottom-3 left-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent`}>
              {category}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <span className={`text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>

        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 transition-all duration-300"
          onClick={() => window.open(link, "_blank")}
        >
          Learn More
        </motion.button>
      </Tilt>
    </motion.div>
  );
};

const Products = () => {
  // Show only first 2 products as preview
  const previewProducts = products.slice(0, 2);

  return (
    <section id="products" className="relative z-0 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-lg mb-4">Innovation</p>
          <h2 className="text-white font-bold text-5xl mb-6">
            Products & Tools
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Building tools and products that solve real-world problems and enhance developer productivity.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {previewProducts.map((product, index) => (
            <ProductCard key={`product-${index}`} index={index} {...product} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products; 