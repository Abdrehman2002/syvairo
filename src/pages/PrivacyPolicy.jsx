import React from "react";
import { motion } from "framer-motion";

const   PrivacyPolicy = () => {
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
            Privacy Policy
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
            Welcome to <span className="font-semibold">Syvairo</span> (“we”,
            “our”, “us”). We respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our website:
            <span className="font-semibold"> syvairo.vercel.app</span>.
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
            1. Information We Collect
          </h2>
          <p className="mb-3">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Register or create an account</li>
            <li>Subscribe to newsletters</li>
            <li>Contact customer support</li>
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
            2. How We Use Your Information
          </h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide, operate and maintain our website</li>
            <li>Improve user experience</li>
            <li>Respond to your inquiries or support requests</li>
            <li>
              Send you updates, newsletters and marketing emails (with consent)
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
            3. Cookies & Tracking Technologies
          </h2>
          <p className="mb-3">
            We use cookies and similar tracking technologies to track activity
            on our website and hold certain information. Cookies help us provide
            you with a better browsing experience.
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
            4. Third-Party Services
          </h2>
          <p className="mb-3">
            We may use third-party services (like analytics providers) that
            collect information used to identify or track users. These service
            providers have their own privacy policies.
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
            5. Data Security
          </h2>
          <p className="mb-3">
            We implement appropriate security measures to protect your personal
            information. However, no website or internet transmission is
            completely secure.
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
            6. Children’s Privacy
          </h2>
          <p className="mb-3">
            Our website is not intended for use by children under the age of 13.
            We do not knowingly collect information from children.
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
            7. Changes to This Policy
          </h2>
          <p className="mb-3">
            We may update this privacy policy from time to time. We recommend
            you review it periodically.
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
            8. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us
            at:
          </p>
          <p className="mt-2 font-semibold">Email: support@syvario.com</p>
        </div>
      </div>
    );
};

export default PrivacyPolicy;
