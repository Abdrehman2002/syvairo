import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

const OurCommitment = () => {
  return (
    <section className="relative overflow-hidden bgGradient py-24">
      <div className="max-w-5xl mx-auto text-center px-3">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
          }}
        >
          Our Commitment
        </h2>

        <p className="color2 text-lg leading-relaxed mb-10">
          We are committed to building practical, scalable, and secure AI
          automation solutions that deliver measurable results. Our focus on
          efficiency, transparency, and long-term value makes Syvairo a reliable
          partner for businesses beginning or expanding their AI automation
          journey.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Commitment Points */}
          <div className="grid sm:grid-cols- mx-auto text-center gap-8">
            {/* Security */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative rounded-2xl p-6 border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(0,206,209,0.55)]">
                <HiOutlineShieldCheck className="text-white" size={28} />
              </div>

              <h4 className="text-lg font-semibold color mb-2">
                Secure & Reliable
              </h4>

              <p className="color2 text-sm leading-relaxed">
                Enterprise-grade security with robust infrastructure and
                compliance-ready AI automation systems.
              </p>
            </motion.div>

            {/* Measurable Results */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative rounded-2xl p-6 border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <div className="w-12 h-12 mb-4 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_25px_rgba(0,206,209,0.55)]">
                <HiOutlineArrowTrendingUp className="text-white" size={28} />
              </div>

              <h4 className="text-lg font-semibold color mb-2">
                Measurable Growth
              </h4>

              <p className="color2 text-sm leading-relaxed">
                Data-driven solutions that deliver clear ROI, efficiency gains,
                and performance improvement.
              </p>
            </motion.div>
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
              src="/ourCommitment.png"
              alt="Secure AI Automation"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitment;
