import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const NeonBall = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1.2, 0.8, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      duration: 1.5,
      delay,
      ease: "easeOut"
    }}
    className="absolute w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(0,255,136,0.8)]"
  />
);

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNeonBalls, setShowNeonBalls] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    setShowNeonBalls(true);
    
    // Reset neon balls after animation
    setTimeout(() => setShowNeonBalls(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto mb-8"
    >
      {/* Neon Balls Animation */}
      <AnimatePresence>
        {showNeonBalls && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <NeonBall key={i} delay={i * 0.1} />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCardClick}
        className={`bg-glass backdrop-blur-sm rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 cursor-pointer overflow-hidden ${
          isExpanded ? 'shadow-[0_0_20px_rgba(0,255,136,0.2)]' : 'shadow-[0_0_10px_rgba(0,255,136,0.1)]'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-accent/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_5px_rgba(0,255,136,0.5)]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">{experience.title}</h3>
                <p className="text-accent font-medium text-sm">{experience.company_name}</p>
                <p className="text-white/60 text-xs mt-1">{experience.date}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-accent text-2xl"
            >
              ▼
            </motion.div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {experience.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: pointIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 shadow-[0_0_4px_rgba(0,255,136,0.6)]" />
                      <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Skills/Tech Stack */}
                <div className="mt-6 pt-4 border-t border-accent/10">
                  <h4 className="text-accent font-semibold text-sm mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills?.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link to="/work">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-light transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
          >
            View All Work Experience
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");