import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          My skills
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");