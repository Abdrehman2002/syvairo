import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const AboutHero = () => {

     const itemVariants = {
       hidden: { opacity: 0, y: 40 },
       show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
     };
  return (
    <>
      <section className="relative h-screen overflow-hidden bgGradient my-auto flex py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
              }}
            >
              Helping Businesses Automate Workflows and Save Costs with AI
              Solutions
            </h1>

            <p className="mt-6 text-lg color">
              Intelligent Automation | AI Agents | Scalable Growth
            </p>

            <div variants={itemVariants} className="mt-8 relative">
              <Link to="/ConsultationForm">
                <motion.button
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
                  style={{
                    boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1", // neon glow
                  }}
                >
                  Request a Demo →
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-10 blur-3xl opacity-40 bg-cyan-400/30 rounded-full"></div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src="https://cdn.mos.cms.futurecdn.net/RwwF5KLT44RzFhBEYeD25P.jpg"
                alt="AI Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutHero