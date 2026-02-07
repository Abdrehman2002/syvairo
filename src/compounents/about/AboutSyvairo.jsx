import React from 'react'
import { motion } from "framer-motion";
import {
  HiOutlineCog6Tooth,
  HiOutlineBolt,
  HiOutlineChartBar,
} from "react-icons/hi2";

const AboutSyvairo = () => {
  return (
    <>
      <section className="relative overflow-hidden bgGradient py-24 ">
        <h2
          className="text-3xl md:text-5xl py-2 font-bold text-center mb-10 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
          }}
        >
          About Syvairo
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="color text-lg leading-relaxed mb-6">
              Syvairo is an AI automation company focused on helping businesses
              simplify operations, reduce manual effort, and improve efficiency
              through intelligent automation.
            </p>

            <p className="color text-lg leading-relaxed mb-6">
              We design and implement practical AI solutions such as workflow
              automation, AI agents, and process optimization that integrate
              smoothly with existing systems. Our goal is to deliver real
              business value by saving time, reducing operational costs, and
              enabling scalable growth.
            </p>

            <p className="color text-lg leading-relaxed mb-10">
              Syvairo follows a lean and flexible delivery approach, allowing us
              to adapt quickly to client needs while maintaining high quality
              and transparency.
            </p>

            {/* ICON FEATURES */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineCog6Tooth className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm color">Simplify Operations</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineBolt className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm color">Reduce Manual Work</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 mb-3">
                  <HiOutlineChartBar className="text-cyan-400" size={28} />
                </div>
                <p className="text-sm color">Improve Efficiency</p>
              </div>
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
            <div className="absolute -inset-10 blur-3xl opacity-40 bg-cyan-400/20 rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/tracelink-dscsa.webp"
                alt="Workflow Automation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutSyvairo