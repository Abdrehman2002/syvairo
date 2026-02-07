import { motion } from "framer-motion";
import { TbSettingsAutomation } from "react-icons/tb";
import { RiRobot2Line } from "react-icons/ri";
import { BsClipboardCheck } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineLaptop } from "react-icons/ai";

import { MdEmail } from "react-icons/md";

const roles = [
  { title: "Automation Developers", icon: TbSettingsAutomation },
  { title: "AI Engineers", icon: RiRobot2Line },
  { title: "Web & App Developers", icon: AiOutlineLaptop },
  { title: "QA Specialists", icon: BsClipboardCheck },
  { title: "Freelancers & Remote Specialists", icon: MdWorkOutline },
  {
    title: "support@syvario.com",
    value: "careers@syvairo.com",
    icon: MdEmail,
  },
];


const OpenRolesSection = () => {
  return (
    <section className="relative overflow-hidden bgGradient py-28">
      <div className="text-center max-w-5xl mx-auto px-4 mb-12">
        {/* Badge */}
        <span
          className="inline-block mb-4 px-6 py-2 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-600 text-cyan-400"
          style={{
            textShadow: `
              0 0 20px rgba(0,206,209,0.45),
              0 0 40px rgba(0,206,209,0.25)
            `,
          }}
        >
          Careers
        </span>

        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(180deg, var(--text-primary), var(--accent))`,
            textShadow: `
              0 0 38px rgba(0, 206, 209, 0.45),
              0 0 20px rgba(0, 206, 209, 0.25)
            `,
          }}
        >
          We’re Hiring
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-lg max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Join our global team and build the future of automation and AI.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Roles List */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.li
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Icon size={28} className="text-cyan-400 flex-shrink-0" />
                <span className="text-lg color font-medium">{role.title}</span>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Behind Image */}
          <div className="absolute -inset-10 blur-3xl opacity-40 bg-cyan-400/20 rounded-full"></div>

          {/* Image Card */}
          <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
            <img
              src="/flexible-workspace.png"
              alt="Global Delivery Model"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenRolesSection;
