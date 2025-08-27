import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const academicData = [
  {
    title: "Master of Science in Computer Science and Engineering",
    authors: "Chaitanya Sai Chandu Yendru",
    institution: "University at Buffalo",
    date: "2023-2024",
    type: "Degree",
    description: "CGPA: 3.97; Coursework: Concurrent computing, Advanced Algorithms, Data computing and Operating Systems.",
    tags: ["Computer Science", "Concurrent Computing", "Advanced Algorithms", "Operating Systems"],
    link: "#"
  },
  {
    title: "Bachelor of Technology in Electronics and Communication Engineering",
    authors: "Chaitanya Sai Chandu Yendru",
    institution: "International Institute of Information Technology",
    date: "2016-2020",
    type: "Degree",
    description: "CGPA: 3.65; Coursework: Probability and Statistics, Application of Machine learning methodologies, VLSI System design, Financial Systems, Advanced Algorithms.",
    tags: ["Electronics", "Communication", "Machine Learning", "VLSI", "Financial Systems"],
    link: "#"
  },
  {
    title: "Bayesian Estimation of IoT Networks",
    authors: "Chaitanya Yendru",
    institution: "IEEE Publication",
    date: "2023",
    type: "Research Paper",
    description: "Research publication on Bayesian estimation techniques for IoT networks, focusing on improving network efficiency and data processing accuracy.",
    tags: ["Bayesian Estimation", "IoT Networks", "Research"],
    link: "https://ieeexplore.ieee.org/document/9978113"
  },
  {
    title: "Multimodal Transformer Networks for Emotion Recognition",
    authors: "Chaitanya Yendru",
    institution: "ACM Publication",
    date: "2024",
    type: "Research Paper",
    description: "Advanced multimodal transformer architecture for emotion recognition combining visual, audio, and textual data with improved accuracy and real-time processing capabilities.",
    tags: ["Multimodal AI", "Transformer Networks", "Emotion Recognition", "Deep Learning"],
    link: "https://dl.acm.org/doi/10.1145/example"
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
            My academic journey in computer science and engineering, 
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
              My research focuses on advanced AI and deep learning technologies, 
              with particular interest in agentic AI, RAG systems, multimodal transformer networks, 
              and large language model applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Agentic AI
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                RAG Systems
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Deep Learning
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Multimodal AI
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Large Language Models
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
                Transformer Networks
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Academia; 