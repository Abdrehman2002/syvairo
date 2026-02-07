import React from "react";
import { motion } from "framer-motion";
import { HiChat, HiOutlineMicrophone, HiPhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const agents = [
  { name: "AI Chatbot", icon: HiChat },
  { name: "Voice AI Agent", icon: HiOutlineMicrophone },
];

// Motion variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};

const CaseStudies = () => {
  return (
    <section
      className="py-7 overflow-hidden bgGradient"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TOP BADGE */}
        <span
          style={{
            textShadow:
              "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
          }}
          className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold
                     bg-cyan-500/10 border border-cyan-700"
        >
          <div className="flex items-center gap-2">
            <HiPhone className="text-cyan-400 text-base" />
            <span className="text-cyan-400">Real-Time AI Workforce</span>
          </div>
        </span>

        {/* HEADING */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow:
              "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
          }}
        >
          Meet Our AI Workforce
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-xl mx-auto"
        >
          Experience the power of agents built by our own team, for our own
          business
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl mt-8 pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow:
              "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
          }}
        >
          Contact Us Through Real AI Systems
        </motion.h2>

        {/* AGENT CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-2 gap-8"
        >
          {agents.map((agent, i) => {
            const Icon = agent.icon;

            return (
              <motion.div
                key={i}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className="
                  group relative rounded-2xl p-8 overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-2 hover:scale-[1.03]
                  hover:shadow-[0_25px_60px_rgba(0,206,209,0.25)]
                  select-none
                "
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                {/* CURSOR GLOW */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(
                        180px circle at var(--x) var(--y),
                        rgba(0,206,209,0.25),
                        transparent 70%
                      )
                    `,
                  }}
                />

                {/* ICON */}
                <div
                  className="
                    w-12 h-12 mx-auto mb-4 flex items-center justify-center
                    rounded-xl
                    bg-gradient-to-br from-cyan-400 to-cyan-600
                    shadow-[0_0_25px_rgba(0,206,209,0.55)]
                  "
                >
                  <Icon className="text-white" size={24} />
                </div>

                {/* TITLE */}
                <p className="text-lg font-semibold">{agent.name}</p>

                {/* SUBTEXT */}
                <p className="mt-2 text-sm text-colors">
                  Live & ready to interact
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
