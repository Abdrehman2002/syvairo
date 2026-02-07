import { motion } from "framer-motion";
import { HiOutlineFire, HiOutlineLightBulb } from "react-icons/hi2";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

const values = [
  {
    title: "Passion & Curiosity",
    desc: "We value people who love learning, building, and creating real-world impact.",
    icon: HiOutlineFire,
  },
  {
    title: "Smart Problem-Solving",
    desc: "We turn complex challenges into simple, scalable solutions.",
    icon: HiOutlineLightBulb,
  },
  {
    title: "Teamwork & Collaboration",
    desc: "Great ideas come from great teams working together.",
    icon: RiTeamLine,
  },
  {
    title: "Focus on Results",
    desc: "We care about outcomes, not just hours worked.",
    icon: HiOutlineArrowTrendingUp,
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-28 bgGradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span
          className="inline-block mb-4 px-5 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-600 text-cyan-400"
          style={{
            textShadow: `
              0 0 20px rgba(0,206,209,0.45),
              0 0 40px rgba(0,206,209,0.25)
            `,
          }}
        >
          Our Values
        </span>

        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl pb-2 font-semibold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: `
                     linear-gradient(
                       180deg,
                       var(--text-primary),
                       var(--accent)
                     )
                   `,
            textShadow: `
              0 0 38px rgba(0, 206, 209, 0.45),
              0 0 20px rgba(0, 206, 209, 0.25)
            `,
          }}
        >
          What We Value
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
          These principles guide how we build, work, and grow together.
        </motion.p>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
                className="
        group relative rounded-2xl p-6 overflow-hidden
        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)]
        select-none

        min-w-[85%] sm:min-w-[70%]
        snap-center
        md:min-w-0
      "
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid rgba(0,206,209,0.35)",
                }}
              >
                {/* glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(200px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Icon size={42} className="text-cyan-400" />
                  <h3 className="text-lg font-semibold color text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm text-center color2">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
