import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300 group'
      >
        <div className="relative">
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300'
          />
          <div className="absolute inset-0 bg-[#00ff88]/20 rounded-full blur-xl group-hover:bg-[#00ff88]/30 transition-all duration-300"></div>
        </div>

        <h3 className='text-white text-[20px] font-bold text-center group-hover:text-[#00ff88] transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#00ff88] drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#00ff88]/80 text-[17px] max-w-3xl leading-[30px] drop-shadow-[0_0_3px_rgba(0,255,136,0.2)]'
      >
        I'm a software product engineer with a strong passion for innovation 
        and a solid foundation in machine learning. My expertise spans 
        full-stack development, with a focus on the React and .NET ecosystems.
        I specialize in creating intelligent, boundary-pushing solutions that 
        enhance user experiences and drive business success through cutting-edge technology.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");