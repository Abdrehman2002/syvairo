import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="relative py-28 bgGradient overflow-hidden">
      <div className="w-full flex justify-center mb-8">
        <span
          className="inline-block px-5 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-600 text-cyan-400"
          style={{
            textShadow: `
              0 0 20px rgba(0,206,209,0.45),
              0 0 40px rgba(0,206,209,0.25)
            `,
          }}
        >
          Join Us
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="relative z-10 text-center md:text-left">
          {/* Heading */}
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
            Ready to Make an Impact?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Join Syvairo and help build AI solutions that transform businesses.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-2 text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Be part of a team that values creativity, impact, and innovation.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-2 text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Enjoy flexible work options, growth opportunities, and cutting-edge
            projects.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="mailto:careers@syvairo.com"
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 15px #00ced1, 0 0 30px #00ced1",
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-10 inline-block px-10 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
            style={{
              boxShadow: "0 0 8px #00ced1, 0 0 18px #00ced1",
            }}
          >
            careers@syvairo.com
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Neon Glow */}
          <div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #9b51e0, #00ced1)",
            }}
          />

          {/* Image Card */}
          <div
            className="relative rounded-3xl p-[2px]"
            style={{
              background: "linear-gradient(135deg, #9b51e0, #00ced1)",
            }}
          >
            <img
              src="/cta-reach-target.png"
              alt="Person reaching target illustration"
              className="rounded-3xl w-full bg-[#0b0f1a]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
