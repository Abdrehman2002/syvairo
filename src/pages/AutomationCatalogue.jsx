import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIERS } from "../compounents/automationAgents";
import { Link } from "react-router-dom";
import { HiChevronDown, HiCheck } from "react-icons/hi2";

export default function AutomationCatalogue() {
  const [selectedAgents, setSelectedAgents] = useState({});
  const [openTier, setOpenTier] = useState(null);

  return (
    <section className="bgGradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {TIERS.map((tier) => (
          <div key={tier.id} className="mb-28 text-center">
            {/* TITLE */}
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, var(--text-primary), var(--accent))",
                textShadow:
                  "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
              }}
            >
              {tier.title}
            </motion.h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {tier.subtitle}
            </p>

            {/* CARD */}
            <motion.div
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
              className="group relative mt-14 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 rounded-2xl p-6 sm:p-8 shadow-[0_12px_30px_rgba(0,206,209,0.3)]"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid rgba(0,206,209,0.35)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: ` radial-gradient(200px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
                }}
              />
              {/* LEFT */}
              <div className="text-left">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Explore Our AI Agent Catalog
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Choose an agent from <b>{tier.title}</b> catalog to see how our agents optimize your specific business workflows.
                  instantly.
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col justify-center gap-4">
                {/* DROPDOWN */}
                <div className="relative">
                  <motion.button
                    onClick={() =>
                      setOpenTier(openTier === tier.id ? null : tier.id)
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 sm:px-6 py-4 rounded-xl flex items-center justify-between text-left"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid rgba(0,206,209,0.35)",
                    }}
                  >
                    <span className="text-base sm:text-lg">
                      {selectedAgents[tier.id] || "Select a Service Category"}
                    </span>

                    <HiChevronDown
                      className={`transition ${
                        openTier === tier.id ? "rotate-180" : ""
                      }`}
                      size={22}
                    />
                  </motion.button>

                  {/* DROPDOWN PANEL */}
                  <AnimatePresence>
                    {openTier === tier.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 22,
                        }}
                        className="absolute z-50 mt-3 w-full rounded-2xl overflow-hidden backdrop-blur-xl"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(10,10,10,0.85))",
                          border: "1px solid rgba(0,206,209,0.35)",
                        }}
                      >
                        <div className="max-h-[320px] overflow-y-auto">
                          {tier.sections.map((section, sIdx) => (
                            <div key={sIdx} className="px-4 py-3">
                              {section.title && (
                                <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
                                  {section.title}
                                </div>
                              )}

                              <div className="space-y-1">
                                {section.agents.map((agent) => {
                                  const isActive =
                                    selectedAgents[tier.id] === agent.name;

                                  return (
                                    <motion.button
                                      key={agent.name}
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                      onClick={() => {
                                        setSelectedAgents((prev) => ({
                                          ...prev,
                                          [tier.id]: agent.name,
                                        }));
                                        setOpenTier(null);
                                      }}
                                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left
                                        ${
                                          isActive
                                            ? "bg-cyan-500/15 text-cyan-300"
                                            : "hover:bg-cyan-500/10 text-gray-200"
                                        }
                                      `}
                                    >
                                      <div>
                                        <div className="font-medium">
                                          {agent.name}
                                        </div>
                                        {agent.desc && (
                                          <div className="text-xs text-gray-400">
                                            {agent.desc}
                                          </div>
                                        )}
                                        
                                      </div>

                                      {isActive && (
                                        <HiCheck className="text-cyan-400" />
                                      )}
                                    </motion.button>
                                  );
                                })}
                              </div>

                              {sIdx !== tier.sections.length - 1 && (
                                <div className="mt-4 border-t border-white/5" />
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* BUTTON */}
                <Link
                  to="/ConsultationForm"
                  state={{
                    selectedAgent: selectedAgents[tier.id],
                    tier: tier.title,
                  }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px #00ced1",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-4 rounded-2xl bg-cyan-600 border-2 border-cyan-500 font-bold text-lg"
                    disabled={!selectedAgents[tier.id]}
                  >
                    Discover your benefits →
                  </motion.button>
                </Link>

                <p className="text-gray-500 text-sm text-center">
                  Fast Deployment • Secure • 24/7 Reliable
                </p>
              </div>
            </motion.div>
          </div>
        ))}
        {/* <div className="mt-20 flex justify-center gap-6">
          <Link
            to="/ConsultationForm"
            className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
          >
            Book Agent Demo
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-2xl border border-cyan-400 font-semibold hover:bg-cyan-500 hover:text-black transition"
          >
            Contact Us
          </Link>
        </div> */}
      </div>
    </section>
  );
}
