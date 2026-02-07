import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Privacy Policy",
    content: `We value your privacy and are committed to protecting your personal information. All data collected is handled according to GDPR and applicable laws.`,
  },
  {
    title: "Terms of Service",
    content: `By using Syvairo's services, you agree to our terms of service including usage guidelines, payment terms, and account responsibilities.`,
  },
  {
    title: "Cookie Policy",
    content: `Syvairo uses cookies to improve user experience, analyze traffic, and personalize content. You can manage cookie preferences in your browser settings.`,
  },
];

const Legal = () => {
  return (
    <section
      className=""
      style={{
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto py-28 px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Privacy & Legal
        </motion.h1>

        <div className=" space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <p className="text-secondary leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legal;
