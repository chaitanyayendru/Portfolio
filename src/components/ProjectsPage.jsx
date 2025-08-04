import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { Navbar } from "./index";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
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
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="mb-6">
          <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-accent transition-colors duration-300">{name}</h3>
          <p className="text-white/70 text-base leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-sm px-3 py-1 rounded-full bg-accent/10 border border-accent/20 ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(source_code_link, "_blank")}
          className="w-full py-3 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 transition-all duration-300"
        >
          View Project
        </motion.button>
      </Tilt>
    </motion.div>
  );
};

const ProjectsPage = () => {
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
            
            <p className="text-accent font-semibold text-lg mb-4">Portfolio</p>
            <h1 className="text-white font-bold text-6xl mb-6">
              All Projects
            </h1>
            <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
              A comprehensive collection of my work showcasing expertise in full-stack development, 
              machine learning, and innovative problem-solving across various domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
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
              Interested in collaborating on a project? Let's build something amazing together.
            </p>
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 