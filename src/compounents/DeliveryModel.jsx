import React from "react";
import { motion } from "framer-motion";
import { Brain, Network, Cpu, Plug, Cloud } from "lucide-react";

const stacks = [
  {
    title: "Process Assessment",
    icon: Brain,
    color: "from-cyan-400 to-blue-500",
    items: [
      {
        focus:
          "Understanding customer needs, identifying automation opportunities, and mapping current processes. We define a proposed solution and detail expected results using KPIs.",
        output:
          "A detailed project proposal with a clear scope, timeline, and defined KPIs.",
      },
    ],
  },
  {
    title: "Pilot",
    icon: Network,
    color: "from-green-400 to-emerald-500",
    items: [
      {
        focus:
          "We build and test a working minimal version of your automation solution with tangible results.",
        output:
          "A validated proof-of-concept demonstrating value and meeting key KPIs.",
      },
    ],
  },
  {
    title: "Go-Live",
    icon: Cpu,
    color: "from-purple-400 to-fuchsia-500",
    items: [
      {
        focus:
          "Rolling out the full validated AI or automation solution including training.",
        output:
          "A fully operational solution delivering immediate business value.",
      },
    ],
  },
  {
    title: "Support & Optimization",
    icon: Plug,
    color: "from-cyan-400 to-teal-500",
    items: [
      {
        focus:
          "Continuous monitoring, maintenance, and refinement of automated processes.",
        output:
          "Guaranteed performance, proactive maintenance, and optimization.",
      },
    ],
  },
];

const DeliveryModel = () => {
  return (
    <>
      <section
        className="py-7 overflow-hidden bgGradient"
        style={{ color: "var(--text-primary)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* 🔹 TOP BADGE */}
          <div className="flex justify-center mb-4">
            <span
              style={{
                textShadow:
                  "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
              }}
              className="px-4 py-1 rounded-full text-sm font-semibold
               bg-cyan-500/10 border border-cyan-700"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">🚀 Our process</span>
              </div>
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-center font-semibold mb-8
                     bg-clip-text text-transparent
                     bg-gradient-to-b from-white to-cyan-400"
          >
            From idea to impact
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 pb-8 max-w-2xl mx-auto"
          >
            Our structured 4-step process guarantees measurable results and
            sustainable value creation. Each phase is designed to minimize risks
            and maximize your ROI.
          </motion.p>
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <p>Guaranteed KPIs</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <p>Measurable Results</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <p>Continuous Optimization</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-[2px]
                          bg-gradient-to-b from-cyan-400/50 via-cyan-400/30 to-transparent"
            />

            <div className="space-y-14">
              {stacks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-20"
                  >
                    {/* Icon */}
                    <div
                      className={`absolute left-0 top-0 w-12 h-12 rounded-full
                    bg-gradient-to-br ${item.color}
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(34,211,238,0.5)]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-circle-check-big w-6 h-6 text-white"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>

                    {/* Card */}
                    <div
                      className="rounded-xl p-6
                    bg-white/5 backdrop-blur
                    border border-white/10
                    hover:border-cyan-400/50
                    hover:bg-cyan-400/5
                    transition-all"
                    >
                      <h3 className="text-xl font-semibold mb-4">
                        {item.title}
                      </h3>

                      <div className="">
                        {item.items.map((it, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-start gap-2 text-sm text-color2"
                          >
                            <p>
                              <span className="text-[#22D3EE] font-semibold">
                                Focus:
                              </span>{" "}
                              {it.focus}
                            </p>
                            <p>
                              <span className="text-[#22D3EE] font-semibold">
                                Output:
                              </span>{" "}
                              {it.output}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="h-px bg-gray-800 my-12 border-0" /> */}
    </>
  );
};

export default DeliveryModel;
