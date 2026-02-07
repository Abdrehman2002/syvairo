import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineGlobeAlt,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const DeliveryModel = () => {
  return (
    <section className="relative overflow-hidden bgGradient py-24">
      <div className="text-center max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
          }}
        >
          Our Delivery Model
        </h2>

        <p className="color2 text-lg leading-relaxed mb-8">
          Syvairo operates with a scalable global delivery model designed to
          support clients efficiently as we grow. This model allows us to expand
          expertise across regions while maintaining consistent quality and
          performance.
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
          {/* Locations */}
          <div className="space-y-6">
            {[
              {
                title: "Kuwait",
                desc: "Business development, client engagement, project coordination, deployment, live support",
              },
              {
                title: "Pakistan",
                desc: "AI engineering, automation development, web & app development, quality assurance",
              },
              {
                title: "India",
                desc: "AI engineering, automation development, web & app development, technical support",
              },
              {
                title: "USA (Remote)",
                desc: "RPA specialists, AI agent builders, solution consultants, designers",
              },
              {
                title: "Global (On-Demand)",
                desc: "Freelance consultants and specialized automation experts",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30">
                  <HiOutlineMapPin className="text-cyan-400" size={30} />
                </div>
                <div>
                  <h4 className="color font-semibold">{item.title}</h4>
                  <p className="color2 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT MAP IMAGE */}
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
              src="/delevery.png"
              alt="Global Delivery Model"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryModel;
