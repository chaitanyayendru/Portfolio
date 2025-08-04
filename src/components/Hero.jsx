import { motion } from "framer-motion";
import { styles } from "../styles";
import { MatrixRain } from "./index";
import TechVisualization from "./TechVisualization";

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/ChaitanyaYendru_Resume_J.docx';
    link.download = 'Chaitanya_Yendru_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-dark-green">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.3)]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#00ff88] to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#00ff88] drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]`}>
            Hi, I'm <span className='text-[#00ff88] drop-shadow-[0_0_10px_rgba(0,255,136,0.4)]'>Chaitanya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#00ff88] drop-shadow-[0_0_3px_rgba(0,255,136,0.2)]`}>
            I develop user interfaces and web applications, <br className='sm:block hidden' />
            and create beautiful digital experiences.
          </p>
          
          {/* Resume Download Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className="mt-6 px-6 py-3 bg-accent/10 border border-accent/30 text-accent font-semibold rounded-full hover:bg-accent/20 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]"
          >
            📄 Download Resume
          </motion.button>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <button 
          onClick={handleScrollToAbout}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#00ff88] flex justify-center items-start p-2 shadow-[0_0_5px_rgba(0,255,136,0.2)]'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#00ff88] mb-1 shadow-[0_0_3px_rgba(0,255,136,0.3)]'
            />
          </div>
        </button>
      </div>

      {/* CSS-based Tech Visualization */}
      <TechVisualization />
    </section>
  );
};

export default Hero;