import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    setToggle(false);
    
    // If we're on the home page, scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(nav.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home page first, then scroll
      navigate("/");
      // Wait for navigation to complete, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(nav.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleProjectsClick = () => {
    setActive("Projects");
    setToggle(false);
    if (location.pathname !== "/projects") {
      navigate("/projects");
    }
  };

  const handleProductsClick = () => {
    setActive("Products");
    setToggle(false);
    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const handleAcademiaClick = () => {
    setActive("Academia");
    setToggle(false);
    if (location.pathname !== "/academia") {
      navigate("/academia");
    }
  };

  const handleBlogClick = () => {
    setActive("Blog");
    setToggle(false);
    if (location.pathname !== "/blog") {
      navigate("/blog");
    }
  };

  const handleWorkClick = () => {
    setActive("Work");
    setToggle(false);
    if (location.pathname !== "/work") {
      navigate("/work");
    }
  };

  const handleContactClick = () => {
    setActive("Contact");
    setToggle(false);
    if (location.pathname !== "/contact") {
      navigate("/contact");
    }
  };

  const handleHomeClick = () => {
    setActive("");
    setToggle(false);
    navigate("/");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-glass backdrop-blur-xl border-b border-accent/20 shadow-glow" 
          : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={handleHomeClick}
            className='flex items-center gap-3 group'
          >
            <div className="relative">
              <img src={logo} alt='logo' className='w-10 h-10 object-contain group-hover:animate-glow' />
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/40 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <p className='text-accent text-xl font-bold cursor-pointer'>
                Chaitanya Yendru
              </p>
              <p className='text-white/60 text-xs font-light hidden sm:block'>
                Software Product Engineer
              </p>
            </div>
          </button>
        </motion.div>

        <ul className='list-none hidden lg:flex flex-row gap-8'>
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className={`relative group`}
            >
              {nav.id === "projects" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleProjectsClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : nav.id === "products" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleProductsClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : nav.id === "academia" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleAcademiaClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : nav.id === "blog" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleBlogClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : nav.id === "work" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleWorkClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : nav.id === "contact" ? (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={handleContactClick}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : (
                <button
                  className={`${
                    active === nav.title 
                      ? "text-accent" 
                      : "text-white/70 hover:text-accent"
                  } text-sm font-medium cursor-pointer transition-all duration-300 relative`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              )}
            </motion.li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-6 h-6 object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.2 }}
                className='absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl bg-glass-dark backdrop-blur-xl border border-accent/20 shadow-glow p-6'
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-medium cursor-pointer text-sm ${
                        active === nav.title ? "text-accent" : "text-white/70"
                      } hover:text-accent transition-colors duration-300`}
                      onClick={() => {
                        if (nav.id === "projects") {
                          handleProjectsClick();
                        } else if (nav.id === "products") {
                          handleProductsClick();
                        } else if (nav.id === "academia") {
                          handleAcademiaClick();
                        } else if (nav.id === "blog") {
                          handleBlogClick();
                        } else if (nav.id === "work") {
                          handleWorkClick();
                        } else if (nav.id === "contact") {
                          handleContactClick();
                        } else {
                          handleNavClick(nav);
                        }
                      }}
                    >
                      {nav.title}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
