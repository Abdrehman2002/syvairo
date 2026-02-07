import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes 2–6 weeks depending on your workflow complexity.",
  },
  {
    question: "Can Syvairo(AI Solutions) integrate with existing software?",
    answer:
      "Yes, our AI solutions integrate with CRMs, ERPs, WhatsApp, and other enterprise tools.",
  },
  {
    question: "How much cost savings can I expect?",
    answer:
      "Clients typically see 20–50% savings in operational costs within the first 3 months.",
  },
  {
    question: "Do I need technical knowledge to use Syvairo(AI Solutions)?",
    answer:
      "No, our solutions are plug-and-play with intuitive dashboards, requiring minimal technical knowledge.",
  },
  {
    question: "Are enterprise-level solutions available?",
    answer:
      "Absolutely! Our system is modular and scalable to handle SMBs and enterprise needs.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="py-7  text-[var(--text-primary)] bgGradient">
        <div className="px-2">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              💬 Support
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-center mb-14 font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
            }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_25px_60px_rgba(0,206,209,0.15)]
              hover:bg-[#00ced1] select-none"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                >
                  {/* Question */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <span className="text-base md:text-lg font-medium">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400"
                    >
                      <HiChevronDown className="w-6 h-6" />
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm md:text-base text-gray-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
