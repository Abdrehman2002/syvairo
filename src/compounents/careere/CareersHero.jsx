import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CareersHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bgGradient px-6">
      {/* CENTERED BADGE */}
      <div className="w-full flex justify-center mt-8">
        <span
          className="inline-block px-5 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-600 text-cyan-400"
          style={{
            textShadow: `
              0 0 20px rgba(0,206,209,0.45),
              0 0 40px rgba(0,206,209,0.25)
            `,
          }}
        >
          Careers at Syvairo
        </span>
      </div>

      {/* AI Network Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <canvas id="ai-network" className="w-full h-full"></canvas>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-10">
        {/* LEFT CONTENT */}
        <div className="relative z-10 text-center md:text-left">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage: `
                       linear-gradient(
                         180deg,
                         var(--text-primary),
                         var(--accent)
                       )
                     `,
              textShadow: `
                0 0 38px rgba(0, 206, 209, 0.45),
                0 0 20px rgba(0, 206, 209, 0.25)
              `,
            }}
          >
            Join Syvairo
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg max-w-xl mx-auto md:mx-0 color2"
          >
            We build AI agents and automation solutions that transform
            businesses — and we value passion over degrees.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-lg max-w-xl mx-auto md:mx-0 color2"
          >
            Join us to create innovative solutions that shape the future of AI.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-lg max-w-xl mx-auto md:mx-0 color2"
          >
            Be part of a team that values creativity, impact, and growth.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center md:justify-start"
          >
            <Link to="/careers">
              <motion.button
                onClick={() => {
                  document
                    .getElementById("roi-calculator")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
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
                careers@syvairo.com
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative group flex justify-center"
        >
          {/* Neon Glow Layers */}
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-all duration-500"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #9b51e0, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition-all duration-500"
            style={{
              background:
                "radial-gradient(circle at 70% 70%, #00ced1, transparent 70%)",
            }}
          />

          {/* Image Card */}
          <div
            className="relative rounded-3xl p-[2px] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #9b51e0, #00ced1)",
            }}
          >
            <img
              src="/syvairo-career-hero.png"
              alt="AI Remote Worker"
              className="rounded-3xl w-full bg-[#0b0f1a]"
            />
          </div>
        </motion.div>
      </div>

      {/* Pulse animation for CTA button */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 8px #00ced1, 0 0 18px #00ced1; }
            100% { box-shadow: 0 0 15px #00ced1, 0 0 30px #00ced1; }
          }
        `}
      </style>
    </section>
  );
};

export default CareersHero;
