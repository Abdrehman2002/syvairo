import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden bgGradient py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            }}
          >
            Our Mission & Vision
          </h2>
          <p className="color2 max-w-2xl mx-auto">
            Driving intelligent automation and empowering businesses through AI
            innovation.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
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
                              w-12 h-12 mb-4 flex items-center justify-center
                              rounded-xl
                              bg-gradient-to-br from-cyan-400 to-cyan-600
                              shadow-[0_0_25px_rgba(0,206,209,0.55)]
                            "
            >
              <HiOutlineRocketLaunch className="text-white" size={36} />
            </div>

            <h3 className="text-2xl font-semibold color mb-4">Our Mission</h3>

            <p className="color2 leading-relaxed text-lg">
              To deliver intelligent, end-to-end workflow automation that helps
              businesses operate smarter, faster, and more efficiently.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
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
                              w-12 h-12 mb-4 flex items-center justify-center
                              rounded-xl
                              bg-gradient-to-br from-cyan-400 to-cyan-600
                              shadow-[0_0_25px_rgba(0,206,209,0.55)]
                            "
            >
              <HiOutlineGlobeAlt className="text-white" size={36} />
            </div>

            <h3 className="text-2xl font-semibold color mb-4">Our Vision</h3>

            <p className="color2 leading-relaxed text-lg">
              To become a trusted global partner in AI automation, enabling
              organizations of all sizes to adopt intelligent technologies and
              achieve sustainable digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
