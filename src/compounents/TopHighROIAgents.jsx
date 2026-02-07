import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, FileText, Mic, Brain, Headphones } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const agents = [
  {
    name: "Operational Intelligence Agent",
    desc: "Autonomous analysis to pinpoint bottlenecks and uncover high-impact automation opportunities instantly.",
    icon: Brain,
    points: [
      "Data-driven operational audit",
      "Automated bottleneck detection",
      "Strategic automation mapping",
      "Projected ROI & impact analysis",
    ],
  },
  {
    name: "WhatsApp AI Receptionist",
    desc: "Handles customer queries, bookings & follow-ups 24/7.",
    icon: FaWhatsapp,
    points: [
      "Instant replies",
      "Appointment booking",
      "CRM synchronization",
      "Lead capture automation",
    ],
  },
  {
    name: "Lead Qualification Agent",
    desc: "Automatically scores and qualifies leads in real-time.",
    icon: TrendingUp,
    points: [
      "Smart lead scoring",
      "Auto follow-ups",
      "Pipeline optimization",
      "Higher conversions",
    ],
  },
  {
    name: "AI Call Center Agent",
    desc: "Voice agent that talks, books, and sends automated reminders.",
    icon: Mic,
    points: [
      "Inbound & outbound calls",
      "Slot booking",
      "Automated reminders",
      "Human-like voice",
    ],
  },
  {
    name: "Smart Quotation Agent",
    desc: "Generate pricing and PDF quotes instantly.",
    icon: FileText,
    points: [
      "Dynamic pricing",
      "Instant PDFs",
      "Custom templates",
      "Faster deal closure",
    ],
  },
  {
    name: "AI Support & Ticketing Agent",
    desc: "Resolves tickets and syncs with CRM automatically.",
    icon: Headphones,
    points: [
      "Auto ticket resolution",
      "CRM sync",
      "Priority handling",
      "24/7 support",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const TopHighROIAgents = () => {
  return (
    <section
      className="pt-20 pb-7 md:pt-28 overflow-hidden bgGradient"
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* BADGE */}
        <span
          style={{
            textShadow:
              "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
          }}
          className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400">High ROI Automation</span>
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
            backgroundImage:
              "linear-gradient(180deg, var(--text-primary), var(--accent))",
            textShadow:
              "0 0 38px rgba(0, 206, 209, 0.35), 0 0 20px rgba(0, 206, 209, 0.2)",
          }}
        >
          Top High-ROI AI Agents
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Proven agents delivering immediate business impact.
        </motion.p>

        {/* 🔥 CARDS — MOBILE SLIDER / DESKTOP GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-16
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-8
            md:overflow-visible
          "
        >
          {agents.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="
                  min-w-[90%] sm:min-w-[65%]
                  snap-center
                  md:min-w-0
                "
              >
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
                  className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] select-none"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                >
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(200px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
                    }}
                  />

                  {/* ICON */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(0,206,209,0.55)]">
                    <Icon className="text-white" size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl text-start font-semibold text-color">
                    {a.name}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-start text-sm text-gray-400">
                    {a.desc}
                  </p>

                  {/* POINTS */}
                  <ul className="mt-5 space-y-2 text-sm text-color2">
                    {a.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-14 flex justify-center"
        >
          <Link to="/catalogue">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 10px #00ced1, 0 0 20px #00ced1",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-cyan-600 border-2 border-cyan-500 font-bold text-white text-lg transition-all duration-300"
              style={{
                boxShadow: "0 0 2px #00ced1, 0 0 10px #00ced1",
              }}
            >
              View Full 45+ Agent Catalog
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TopHighROIAgents;
