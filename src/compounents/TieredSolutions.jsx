import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChip } from "react-icons/hi";
import { Briefcase, Building2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "TIER-1 · SMB Ready-to-Launch",
    icon: Briefcase,
    items: [
      "Communication & Support: AI Receptionist",
      "Sales & Marketing: Lead Qualification",
      "Customer Experience: Complaint Handling",
      "HR & Internal: Resume Screening",
      "Operations & Efficiency: AI Meeting Notes",
      "Data & Analytics: And More",
    ],
  },
  {
    name: "TIER-2 · Mid-to-Large Enterprise",
    icon: Building2,
    items: [
      "Multi-Agent Business Assistants",
      "Back-Office Workflow Automation",
      "Enterprise CRM Automation",
      "Contract & Document Extraction",
      "Advanced Reporting & Analytics",
      "And More",
    ],
  },
  {
    name: "TIER-3 · Enterprise Custom Intelligence",
    icon: ShieldCheck,
    items: [
      "Enterprise AI Brain (Central Intelligence)",
      "COO-Level Decision Engine",
      "Inter-Department Orchestration",
      "Autonomous Corporate AI Control Tower",
      "Risk, Audit & Compliance Automation",
      "And More",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const TieredSolutions = () => {
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length) {
      const heights = cardRefs.current.map((ref) => ref.offsetHeight);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  return (
    <section
      className="py-20 overflow-hidden bgGradient"
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
            <HiOutlineChip className="text-cyan-400 text-base" />
            <span className="text-cyan-400">Tiered AI Automation Stack</span>
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
          OUR AUTOMATION SOLUTIONS — BY TIER
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          Scalable AI automation designed for every stage of business growth.
        </motion.p>

        {/* CARDS */}
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
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={i}
                className="min-w-[90%] sm:min-w-[65%] snap-center md:min-w-0"
              >
                <motion.div
                  ref={(el) => (cardRefs.current[i] = el)}
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
                    group relative rounded-2xl p-6 overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)]
                    select-none
                  "
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(0,206,209,0.35)",
                    height: maxHeight ? `${maxHeight}px` : "auto",
                  }}
                >
                  {/* CURSOR GLOW */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(
                        200px circle at var(--x) var(--y),
                        rgba(0,206,209,0.25),
                        transparent 70%
                      )`,
                    }}
                  />

                  {/* ICON */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(0,206,209,0.55)]">
                    <Icon className="text-white" size={22} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl text-start font-semibold mb-4 text-color">
                    {t.name}
                  </h3>

                  {/* LIST */}
                  <ul className="space-y-2 text-start text-sm text-color2">
                    {t.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{it}</span>
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
          <Link to="/ConsultationForm">
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
              → Build Your AI Infrastructure With Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TieredSolutions;
