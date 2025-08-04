import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import { 
  About, 
  Contact, 
  Experience, 
  Feedbacks, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas,
  Projects,
  ProjectsPage,
  Products,
  ProductsPage,
  Academia,
  AcademiaPage,
  Blog,
  BlogPage,
  WorkPage,
  ContactPage
} from "./components";

const HomePage = () => {
  useEffect(() => {
    // Handle hash links when the page loads
    const handleHashLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(elementId);
        if (element) {
          // Wait a bit for the page to fully load, then scroll
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 500);
        }
      }
    };

    handleHashLink();
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Products />
      <Academia />
      <Blog />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/academia" element={<AcademiaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;