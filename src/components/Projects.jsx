import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-glass backdrop-blur-sm p-5 rounded-2xl w-full border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
      >
        <div className="relative w-full h-[230px] cursor-pointer">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white/70 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  // Show only first 3 projects as preview
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="relative z-0 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-lg mb-4">My Work</p>
          <h2 className="text-white font-bold text-5xl mb-6">
            Featured Projects
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            A showcase of my recent work demonstrating full-stack development, 
            machine learning, and innovative problem-solving skills.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-7">
          {previewProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 