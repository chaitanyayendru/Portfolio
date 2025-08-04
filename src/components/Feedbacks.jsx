import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-glass backdrop-blur-sm p-10 rounded-3xl xs:w-[320px] w-full border border-accent/20 hover:border-accent/40 transition-all duration-300'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-white/70 text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What others say
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Testimonials.
        </h2>
      </motion.div>

      <div className='mt-20 bg-black-100 rounded-[20px]'>
        <div className='bg-tertiary rounded-2xl min-h-[300px] p-6 flex justify-evenly items-center flex-col xl:flex-row gap-4'>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");