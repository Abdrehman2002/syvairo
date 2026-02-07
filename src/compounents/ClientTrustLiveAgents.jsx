import React from "react";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { SiOpenai, SiGooglecloud, SiZapier, SiAnthropic } from "react-icons/si";
import { RiAiGenerate } from "react-icons/ri";
import { SiUipath, SiN8N } from "react-icons/si";


const stats = [
  { value: "15+", label: "AI Projects" },
  { value: "15+", label: "Happy Clients" },
  { value: "22+", label: "Live AI Agents" },
  { value: "3+", label: "mid-enterprise solutions deployed" },
  { value: "🌍", label: "Global Clients" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const ClientTrustLiveAgents = () => {
  return (
    <>
      <section className="py-7 overflow-hidden bgGradient">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span
            style={{
              textShadow: `0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)`,
            }}
            className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
          >
            <div className="flex items-center gap-2">
              <div className="text-sm font-semibold text-cyan-400">
                🤖 AI Powered Solutions
              </div>
            </div>
          </span>
          {/* <div className="flex items-center gap-2">
          <div className="text-sm font-semibold text-cyan-400">
            AI Powered Solutions
          </div>
        </div> */}

          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow:
                "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
            }}
          >
            Client Trust & Live AI Agents
          </motion.h2>

          {/* Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
    mt-12
    flex gap-6 overflow-x-auto pb-4
    snap-x snap-mandatory
    md:grid md:grid-cols-5 md:gap-6
    md:overflow-visible
  "
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="
    group rounded-2xl p-8 transition-all duration-300
    hover:-translate-y-2 hover:scale-[1.03]
    hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
    hover:bg-[#00ced1]

    min-w-[75%] sm:min-w-[55%]
    snap-center
    md:min-w-0
  "
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                <p className="text-3xl font-bold text-[var(--accent)]">
                  {item.value}
                </p>
                <p className="text-[var(--text-primary)]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* POWERED BY */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20"
          >
            <p className="uppercase tracking-widest text-sm mb-6 text-[var(--text-secondary)]">
              Powered by industry-leading technology
            </p>

            <div className="flex flex-wrap justify-center gap-10 text-4xl md:text-5xl text-[var(--accent)]">
              <motion.div whileHover={{ scale: 1.2 }} title="OpenAI">
                <SiOpenai />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="AWS">
                <FaAws />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="Google Cloud">
                <SiGooglecloud />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="Zapier">
                <SiZapier />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="Anthropic">
                <SiAnthropic />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="AI Agents">
                <RiAiGenerate />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="UiPath">
                <SiUipath />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} title="n8n">
                <SiN8N />
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.2 }} title="Microsoft Azure">
              <SiMicrosoftazure />
            </motion.div> */}

              {/* Blue Prism – no official icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                title="Blue Prism"
                className="text-2xl md:text-3xl font-semibold tracking-wide"
              >
                BP
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <hr className="h-px bg-gray-800 my-12 border-0" /> */}
    </>
  );
};

export default ClientTrustLiveAgents;
