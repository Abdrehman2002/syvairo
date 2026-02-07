import React from "react";

const GradientBackground = ({ children }) => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: `linear-gradient(to left, var(--gradient-from), var(--gradient-to))`,
        color: "var(--text-primary)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* BLUE GLOW */}
      <div
        className="pointer-events-none absolute -top-48 -left-48
        h-[900px] w-[900px] rounded-full
        bg-blue-600/40 blur-[220px]"
      />

      {/* PURPLE GLOW */}
      <div
        className="pointer-events-none absolute -top-32 -right-48
        h-[900px] w-[900px] rounded-full
        bg-purple-700/40 blur-[220px]"
      />

      {/* VIGNETTE */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%)]"
      />

      {/* CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
