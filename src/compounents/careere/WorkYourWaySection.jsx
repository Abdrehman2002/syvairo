import { motion } from "framer-motion";

const WorkYourWaySection = () => {
  return (
    <section className="relative py-28 bgGradient overflow-hidden">
      {/* Badge */}
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
          Flexible Work
        </span>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT TEXT */}
        <div className="relative z-10">
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
            Work Your Way
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
            We prefer remote-first work, but hybrid and onsite options are
            always welcome. Short-term projects or long-term roles — we give you
            the freedom to work the way that lets you shine.
          </motion.p>
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
              src="/flexible-workspace.png"
              alt="Flexible Workspace Illustration"
              className="rounded-3xl w-full bg-[#0b0f1a]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkYourWaySection;
