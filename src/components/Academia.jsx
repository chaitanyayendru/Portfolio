import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const academicData = [
  {
    title: "Machine Learning in Wireless Communications",
    authors: "Chaitanya Yendru, Dr. Amrita Mishra",
    institution: "IIIT Bangalore",
    date: "2023",
    type: "Research Paper",
    description: "Investigated the application of machine learning algorithms in optimizing wireless communication systems, focusing on signal processing and network optimization.",
    tags: ["Machine Learning", "Wireless Communications", "Signal Processing"],
    link: "#"
  },
  {
    title: "Bayesian Estimation for IoT Networks",
    authors: "Chaitanya Yendru, Prof. Dr. Matthias Kranz",
    institution: "Technical University",
    date: "2022",
    type: "Conference Paper",
    description: "Developed novel Bayesian estimation techniques for improving the accuracy and efficiency of IoT network data processing and analysis.",
    tags: ["Bayesian Estimation", "IoT", "Data Analysis"],
    link: "#"
  },
  {
    title: "Master of Technology in Computer Science",
    authors: "Chaitanya Yendru",
    institution: "IIIT Bangalore",
    date: "2020-2022",
    type: "Degree",
    description: "Specialized in Machine Learning and Data Science with focus on applied research in wireless communications and IoT systems.",
    tags: ["Computer Science", "Machine Learning", "Data Science"],
    link: "#"
  },
  {
    title: "Bachelor of Technology in Electronics & Communication",
    authors: "Chaitanya Yendru",
    institution: "JNTU Hyderabad",
    date: "2016-2020",
    type: "Degree",
    description: "Foundation in electronics, communication systems, and signal processing with hands-on experience in embedded systems.",
    tags: ["Electronics", "Communication", "Signal Processing"],
    link: "#"
  }
];

const AcademicCard = ({ index, title, authors, institution, date, type, description, tags, link }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "Research Paper": return "text-blue-400";
      case "Conference Paper": return "text-purple-400";
      case "Degree": return "text-green-400";
      default: return "text-accent";
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
      <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 group h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white/70 text-sm mb-1">{authors}</p>
            <p className="text-white/60 text-sm">{institution}</p>
          </div>
          <div className="text-right">
            <span className={`text-xs font-medium px-3 py-1 rounded-full bg-accent/20 ${getTypeColor(type)}`}>
              {type}
            </span>
            <p className="text-white/50 text-sm mt-2">{date}</p>
          </div>
        </div>

        <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent text-sm font-medium hover:text-accent-light transition-colors duration-300 mt-auto"
            onClick={() => window.open(link, "_blank")}
          >
            Read More →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

const Academia = () => {
  return (
    <section id="academia" className="relative z-0 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-lg mb-4">Research & Education</p>
          <h2 className="text-white font-bold text-5xl mb-6">
            Academia
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            My academic journey in computer science and machine learning, 
            including research publications and educational achievements.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {academicData.slice(0, 4).map((item, index) => (
            <AcademicCard key={`academic-${index}`} index={index} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/academia">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
            >
              View All Academic Work
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
              Research Interests
            </h3>
            <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
              My research focuses on the intersection of machine learning and wireless communications, 
              with particular interest in Bayesian estimation, IoT networks, and signal processing applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Wireless Communications
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Bayesian Estimation
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                IoT Networks
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Signal Processing
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academia; 