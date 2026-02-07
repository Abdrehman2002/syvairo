import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Terms of Service
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
          <p className="mb-4">
            These Terms of Service ("Terms") govern your use of the website
            <span className="font-semibold"> syvairo.vercel.app</span> operated
            by
            <span className="font-semibold"> Syvairo</span>.
          </p>

          <p className="mb-4">
            By accessing or using our website, you agree to be bound by these
            Terms. If you do not agree, please do not use our services.
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
            Use of Our Service
          </h2>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>You must be at least 13 years old to use our service</li>
            <li>You agree not to misuse or attempt to harm the platform</li>
            <li>You are responsible for maintaining account security</li>
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
            Intellectual Property
          </h2>
          <p className="mb-4">
            All content, features, and functionality on this website are the
            exclusive property of Syvairo and are protected by applicable
            copyright and intellectual property laws.
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
            User Responsibilities
          </h2>
          <p className="mb-4">
            You agree not to engage in activities that violate laws, infringe on
            intellectual property rights, or disrupt website operations.
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
            Limitation of Liability
          </h2>
          <p className="mb-4">
            Syvairo shall not be liable for any indirect, incidental, or
            consequential damages resulting from your use of the website.
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
            Termination
          </h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate access to our service
            at any time without prior notice if you violate these Terms.
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
            Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of the
            service after changes means you accept the updated Terms.
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
            Contact Information
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="font-semibold mt-2">Email: support@syvario.com</p>
        </div>
      </div>
    );
};

export default TermsOfService;
