import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChat, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMicrophone, HiPhone } from "react-icons/hi2";
import { send } from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!form.firstName || !form.email || !form.message) {
      setError("Please fill required fields");
      return;
    }

    setLoading(true);

    const contactContent = `
    Do you have a question? Call us, email us, or fill out the contact form.
    Our team of AI specialists is ready to assist you.
    `;

    send(
      "service_8ozhqlc", // Service ID
      "template_oxzpha9", // Template ID
      {
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company || "N/A",
        email: form.email,
        message: form.message,
        contactContent: contactContent,
      },
      "MEdCoXIQrg9BvgL4t", // Public Key
    )
      .then(() => {
        setSuccess("Message sent successfully 🚀");
        setForm({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("EmailJS error:", err);
        setError("Failed to send message. Check console for details.");
      })
      .finally(() => setLoading(false));
  };

  const agents = [
    { name: "AI Chatbot", icon: HiChat },
    { name: "Voice AI Agent", icon: HiOutlineMicrophone },
  ];

  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  };

  return (
    <section className="py-20 bgGradient text-white">
      {/* Heading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-center mb-10 py-2 mt-3 font-semibold bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
        }}
      >
        Contact Syvairo
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1  gap-16 px-6">
        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 justify-center items-start gap-16 px-6">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center items-start space-y-6"
            >
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
                }}
              >
                Contact Us
              </motion.h2>

              <p className="color2 text-lg">
                Do you have a question? Call us, email us, or fill out the
                contact form and we’ll get back to you as soon as possible.
              </p>

              {/* Contact Items */}
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-4">
                  <HiPhone className="text-cyan-400 text-2xl" />
                  <div>
                    <p className="color font-semibold">Phone</p>
                    <span className="font-semibold color2">+965-51573726</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="text-green-400 text-2xl" />
                  <div>
                    <p className="color font-semibold">WhatsApp</p>
                    <span className="font-semibold color2">+965-51573726</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <HiOutlineMail className="text-purple-400 text-2xl" />
                  <div>
                    <p className="color font-semibold">Email</p>
                    <span className="font-semibold text-gray-400 block">
                      sales@syvairo.com
                      <br />
                      support@syvairo.com
                      <br />
                      careers@syvairo.com
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="footer p-10 rounded-3xl border border-cyan-400/30 shadow-xl"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 focus:border-cyan-400 outline-none transition"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your automation goals..."
                  rows="5"
                  className="w-full px-5 py-3 rounded-xl bg-transparent border border-cyan-400/30 resize-none focus:border-cyan-400 outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-cyan-400 to-cyan-600 text-black shadow-xl disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
                {error && <p className="text-red-400 mt-2">{error}</p>}
                {success && <p className="text-green-400 mt-2">{success}</p>}
              </form>
            </motion.div>
          </div>
        </section>

        {/* AI Agents */}
        <div className="py-20">
          <h2
            className="text-2xl md:text-3xl font-semibold text-center mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #00e0e0, #00aaff)",
            }}
          >
            Meet Our AI Workforce
          </h2>
          <p className="color text-center mb-16 max-w-2xl mx-auto">
            Experience the power of agents built by our own team, for our own
            business
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            {agents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={i}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty(
                      "--x",
                      `${e.clientX - rect.left}px`,
                    );
                    e.currentTarget.style.setProperty(
                      "--y",
                      `${e.clientY - rect.top}px`,
                    );
                  }}
                  className="
                    group relative flex flex-col items-center p-8 rounded-3xl
                    transition-all duration-300
                    hover:-translate-y-3 hover:scale-105
                    cursor-pointer
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,232,255,0.05), rgba(0,170,255,0.05))",
                    borderRadius: "1.5rem",
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                    style={{
                      background: `
                        radial-gradient(
                          150px circle at var(--x) var(--y),
                          rgba(0,206,209,0.2),
                          transparent 70%
                        )
                      `,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16 flex items-center justify-center mb-4
                      rounded-full
                      bg-gradient-to-br from-cyan-400 to-cyan-600
                      shadow-[0_0_35px_rgba(0,206,209,0.6)]
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Name */}
                  <p className="text-lg font-semibold color mb-1">
                    {agent.name}
                  </p>

                  {/* Subtext */}
                  <p className="text-sm color text-center">
                    Live & ready to interact
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
