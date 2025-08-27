import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const educationData = [
  {
    degree: "Master of Science in Computer Science and Engineering",
    institution: "University at Buffalo",
    duration: "2023 - 2024",
    gpa: "CGPA: 3.97",
    coursework: ["Concurrent Computing", "Advanced Algorithms", "Data Computing", "Operating Systems"],
    description: "Specialized in advanced computer science concepts with focus on concurrent programming and algorithm optimization."
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "International Institute of Information Technology",
    duration: "2016 - 2020",
    gpa: "CGPA: 3.85",
    coursework: ["Digital Signal Processing", "Communication Systems", "Microprocessors", "VLSI Design"],
    description: "Comprehensive foundation in electronics and communication engineering with practical applications."
  }
];

const EducationCard = ({ index, degree, institution, duration, gpa, coursework, description }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-8 px-8 min-h-[320px] flex flex-col justify-start border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white text-[22px] font-bold group-hover:text-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]">
            {degree}
          </h3>
          <p className="text-[#00ff88]/80 text-[18px] font-semibold mt-2">
            {institution}
          </p>
        </div>
        <div className="text-right">
          <p className="text-white/70 text-[14px] font-medium">
            {duration}
          </p>
          <p className="text-[#00ff88] text-[16px] font-bold mt-1">
            {gpa}
          </p>
        </div>
      </div>

      <p className="text-white/80 text-[15px] leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      <div>
        <h4 className="text-white font-semibold text-[16px] mb-3">Key Coursework:</h4>
        <div className="flex flex-wrap gap-2">
          {coursework.map((course, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-[12px] font-medium rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#00ff88] drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]`}>Academic Journey</p>
        <h2 className={`${styles.sectionHeadText} text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]`}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#00ff88]/80 text-[17px] max-w-3xl leading-[30px] drop-shadow-[0_0_3px_rgba(0,255,136,0.2)]"
      >
        My educational background combines theoretical knowledge with practical applications, 
        providing a strong foundation for innovative software development and AI solutions.
      </motion.p>

      <div className="mt-20 flex flex-col gap-10">
        {educationData.map((education, index) => (
          <EducationCard key={education.degree} index={index} {...education} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
