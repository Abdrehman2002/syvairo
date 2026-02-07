import { HiOutlineCheck } from "react-icons/hi"; // import an icon
import { HiOutlineArrowRight } from "react-icons/hi2";

const CaseStudyCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
      className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]  hover:shadow-[0_25px_60px_rgba(0,206,209,0.3)] select-none"
      style={{
        backgroundColor: "var(--card-bg)",
        border: "1px solid rgba(0,206,209,0.35)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: ` radial-gradient(200px circle at var(--x) var(--y), rgba(0,206,209,0.25), transparent 70%)`,
        }}
      />
      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-8">
        {/* Icon */}
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl
          bg-cyan-400/20 text-cyan-400
          group-hover:bg-white/20 group-hover:text-color transition"
        >
          <Icon size={26} className="" />
        </div>

        {/* Tag */}
        <div
          className="px-4 py-2 rounded-xl text-right"
          style={{
            background: "rgba(0,206,209,0.12)",
            border: "1px solid rgba(0,206,209,0.35)",
          }}
        >
          <div className="text-sm font-semibold text-cyan-400">Case Study</div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-color mb-1">{item.title}</h3>
      <p className="text-cyan-400 italic mb-5 text-sm">{item.client}</p>

      {/* Challenge */}
      <p className="text-color2 leading-relaxed mb-6">{item.challenge}</p>

      {/* Impact */}
      <div className="space-y-3 mb-8">
        {item.impact.map((impact, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm">
            {/* Replace bullet with icon */}
            <HiOutlineCheck className="text-cyan-400 w-4 h-4 flex-shrink-0" />
            <span
              className="text-color2"
              dangerouslySetInnerHTML={{ __html: impact }}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      
    </div>
  );
};
export default CaseStudyCard;
