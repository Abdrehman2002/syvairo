import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient with subtle radial layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(800px 800px at 15% 20%, var(--gradient-from), transparent 60%),
            radial-gradient(700px 700px at 80% 25%, var(--gradient-to), transparent 60%),
            radial-gradient(1000px 1000px at 50% 50%, var(--gradient-from), transparent 70%),
            linear-gradient(180deg, var(--bg-primary), var(--bg-secondary))
          `,
        }}
      />

      {/* Foreground Orb – Accent */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full blur-[140px]"
        style={{
          background: "var(--accent)",
          opacity: 0.2,
          top: "-15%",
          left: "-10%",
        }}
        animate={{ x: [0, 120, -80, 0], y: [0, 80, -60, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid-ground Orb – Gradient From */}
      <motion.div
        className="absolute w-[460px] h-[460px] rounded-full blur-[160px]"
        style={{
          background: "var(--gradient-from)",
          opacity: 0.18,
          bottom: "-20%",
          right: "-10%",
        }}
        animate={{ x: [0, -140, 120, 0], y: [0, -100, 80, 0] }}
        transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background Orb – Gradient To */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px]"
        style={{
          background: "var(--gradient-to)",
          opacity: 0.12,
          top: "25%",
          left: "35%",
        }}
        animate={{ x: [0, 80, -60, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 65, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ultra-subtle Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, var(--bg-primary) 90%)",
        }}
      />

      {/* Optional subtle noise overlay for texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          opacity: 0.025,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
