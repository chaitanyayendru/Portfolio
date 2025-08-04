import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Navbar, EarthCanvas } from "./index";
import { slideIn } from "../utils/motion";

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chaitanya Yendru",
          from_email: form.email,
          to_email: "yendruc@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Link to="/" className="inline-block mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-accent/10 border border-accent/30 text-accent font-medium rounded-full hover:bg-accent/20 transition-all duration-300"
              >
                ← Back to Home
              </motion.button>
            </Link>
            
            <p className="text-accent font-semibold text-lg mb-4">Get in touch</p>
            <h1 className="text-white font-bold text-6xl mb-6">
              Contact
            </h1>
            <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
              Let's discuss your project, collaboration opportunities, or just say hello. 
              I'm always excited to connect with fellow developers and innovators.
            </p>
          </motion.div>

          <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="flex-[0.75] bg-glass backdrop-blur-sm p-8 rounded-2xl border border-accent/20"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className="bg-white/10 py-4 px-6 placeholder:text-white/50 text-white rounded-lg outline-none border border-accent/30 focus:border-accent/60 font-medium transition-colors duration-300"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className="bg-white/10 py-4 px-6 placeholder:text-white/50 text-white rounded-lg outline-none border border-accent/30 focus:border-accent/60 font-medium transition-colors duration-300"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Message</span>
                  <textarea
                    rows="7"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className="bg-white/10 py-4 px-6 placeholder:text-white/50 text-white rounded-lg outline-none border border-accent/30 focus:border-accent/60 font-medium transition-colors duration-300 resize-none"
                  />
                </label>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent py-3 px-8 outline-none w-fit text-primary font-bold shadow-md shadow-primary rounded-xl hover:bg-accent-light transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send"}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
              <EarthCanvas />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-glass backdrop-blur-sm p-8 rounded-2xl border border-accent/20">
              <h3 className="text-white font-bold text-2xl mb-4">
                Other Ways to Connect
              </h3>
              <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
                Prefer a different way to reach out? Here are some alternative contact methods.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:yendruc@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-full hover:bg-accent/20 transition-all duration-300"
                >
                  <span>📧</span>
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com/in/chaitanyayendru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-full hover:bg-accent/20 transition-all duration-300"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/chaitanyayendru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-full hover:bg-accent/20 transition-all duration-300"
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 