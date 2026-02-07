import React from "react";
import { motion } from "framer-motion";

const MediaPreview = () => {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl pb-2 text-center font-semibold tracking-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `
                                                             linear-gradient(
                                                               180deg,
                                                               var(--text-primary),
                                                               var(--accent)
                                                             )
                                                           `,
                  }}
                >
          Media & <span style={{ color: "var(--accent)" }}>Insights</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8 transition-all duration-300
             hover:-translate-y-2 hover:scale-[1.03]
             hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
             hover:bg-[#00ced1]
             select-none"
              style={{
                backgroundColor: "var(--card-bg)",
                border: `1px solid var(--card-border)`,
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                className="h-32 rounded-xl mb-4"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              />
              <h3 className="font-semibold">AI Automation Trends {i}</h3>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Latest insights on AI-driven workflows.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPreview;
