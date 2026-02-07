import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
    return (
      <div className="bgGradientOutPadding text-gray-200 ">
        {/* header */}
        <div className="bg-black/40 rounded-br-[40%] shadow-md shadow-white/20 rounded-bl-[40%] backdrop-blur-[10px] py-20 px-4 md:px-16 lg:px-32">
          {/* H2 */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-center md:text-4xl  font-bold tracking-tight bg-clip-text text-transparent py-2 pb-4"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            Cookie Policy
          </motion.h2>

          <p className="mb-4">
            This Cookie Policy explains how{" "}
            <span className="font-semibold">Syvairo</span>
            ("we", "our", "us") uses cookies and similar technologies when you
            visit our website{" "}
            <span className="font-semibold">syvairo.vercel.app</span>.
          </p>
        </div>

        {/* body content */}
        <div className="py-12 px-4 md:px-16 lg:px-32">
          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            What Are Cookies?
          </h2>
          <p className="mb-4">
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly, improve user
            experience, and provide analytical insights.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            How We Use Cookies
          </h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>To ensure the website works correctly</li>
            <li>To remember your preferences</li>
            <li>To analyze website traffic and usage</li>
            <li>To improve performance and user experience</li>
          </ul>

          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            Types of Cookies We Use
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">Essential Cookies:</span> Required
              for basic website functionality.
            </li>
            <li>
              <span className="font-semibold">Analytics Cookies:</span> Help us
              understand how users interact with our website.
            </li>
            <li>
              <span className="font-semibold">Functional Cookies:</span>{" "}
              Remember user preferences and settings.
            </li>
          </ul>

          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            Managing Cookies
          </h2>
          <p className="mb-4">
            You can control or disable cookies through your browser settings.
            Please note that disabling cookies may affect website functionality.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            Changes to This Cookie Policy
          </h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time. Any changes will
            be posted on this page.
          </p>

          <h2
            className="text-2xl font-semibold mt-8 mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, var(--text-primary), var(--accent))",
              textShadow: `
            0 0 38px rgba(0, 206, 209, 0.45),
            0 0 20px rgba(0, 206, 209, 0.25)
          `,
            }}
          >
            Contact Us
          </h2>
          <p>
            If you have any questions about our Cookie Policy, contact us at:
          </p>
          <p className="font-semibold mt-2">Email: support@syvario.com</p>
        </div>
      </div>
    );
};

export default CookiePolicy;
