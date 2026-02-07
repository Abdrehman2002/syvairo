import React from "react";

const Replacement = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* SVG BACKGROUND */}
      <svg
        viewBox="0 0 1453 1064"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-2 w-[1250px] h-[700px] rounded-bl-[40px]"
        preserveAspectRatio="none" // Yeh change kiya hai – ab width increase karne pe height crop nahi hogi, shape stretch ho jayegi to fill kare
      >
        <defs>
          <pattern
            id="bgImage"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href="/Home.png"
              width="1453"
              height="1064"
              preserveAspectRatio="xMidYMid slice" // Image ko slice rakha hai, lekin overall SVG none se stretch-fill hoga
            />
          </pattern>
        </defs>

        <path
          d="M0 66C0 29.5492 29.5492 0 66 0H945.476C965.948 0 985.261 9.50026 997.756 25.7171L1057.57 103.344C1070.06 119.561 1089.38 129.061 1109.85 129.061H1387C1423.45 129.061 1453 158.611 1453 195.061V986.725C1453 1022.89 1423.89 1052.32 1387.73 1052.72L367.257 1064L376.686 1057.5L387.55 1048.16C391.929 1044.39 395.986 1040.27 399.68 1035.83L402.991 1031.85C406.484 1027.65 409.186 1022.85 410.966 1017.69C413.862 1009.3 415.221 1000.45 414.978 991.578L414.27 965.627C413.294 929.891 384.043 901.428 348.294 901.428H66C29.5492 901.428 0 871.879 0 835.428V66Z"
          fill="url(#bgImage)"
        />

        <path
          d="M0 66C0 29.5492 29.5492 0 66 0H945.476C965.948 0 985.261 9.50026 997.756 25.7171L1057.57 103.344C1070.06 119.561 1089.38 129.061 1109.85 129.061H1387C1423.45 129.061 1453 158.611 1453 195.061V986.725C1453 1022.89 1423.89 1052.32 1387.73 1052.72L367.257 1064L376.686 1057.5L387.55 1048.16C391.929 1044.39 395.986 1040.27 399.68 1035.83L402.991 1031.85C406.484 1027.65 409.186 1022.85 410.966 1017.69C413.862 1009.3 415.221 1000.45 414.978 991.578L414.27 965.627C413.294 929.891 384.043 901.428 348.294 901.428H66C29.5492 901.428 0 871.879 0 835.428V66Z"
          fill="black"
          opacity="0.35"
        />
      </svg>

      {/* NAVBAR */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white z-10">
        {["Home", "Portfolio", "Contact"].map((item) => (
          <button
            key={item}
            className="px-5 py-1 rounded-full hover:bg-teal-500/30 transition"
          >
            {item}
          </button>
        ))}
        <span className="text-yellow-400 ml-2">ENG ⌄</span>
      </div>

      {/* LEFT VERTICAL TEXT */}
      <div
        className="absolute left-14 z-10"
        style={{ writingMode: "vertical-rl" }}
      >
        <h1 className="text-teal-400 mt-9 text-7xl font-bold rotate-180">
          INNOV
          <span className="text-transparent [-webkit-text-stroke:2px_#2dd4bf]">
            ARONIX
          </span>
        </h1>
        <span className="text-yellow-400 text-center text-2xl mt-4 block rotate-180">
          Unlock Innovation Now
        </span>
      </div>

      {/* CTA BUTTON */}
      <div className="absolute bottom-4 left-14 z-10">
        <button className="flex items-center gap-14 border-2 border-yellow-400 text-yellow-400 px-6 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <p className="text-xl">
            Explore Our Services | Let’s Innovate Together
          </p>
          <span className="bg-yellow-400 text-black -rotate-45 rounded-full w-16 h-16 flex text-2xl items-center justify-center">
            →
          </span>
        </button>
      </div>
      <div className="absolute top-3 right-10 z-10">
        <button className="flex items-center gap-14 border-2 border-yellow-400 text-yellow-400 px-24 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          <p className="text-3xl">Search</p>
        </button>
      </div>

      {/* WHAT WE DO CARD */}
      <div className="absolute bottom-20 right-24 w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-white z-10">
        <h3 className="text-yellow-400 font-semibold mb-2">What We Do?</h3>
        <p className="text-sm text-white/80 mb-3">
          We offer comprehensive services designed to meet modern business
          needs.
        </p>
        <ul className="text-sm space-y-1">
          <li>• Mobile App Development</li>
          <li>• Website Development</li>
          <li>• AI Development</li>
          <li>• Cloud Services</li>
        </ul>
      </div>
    </section>
  );
};

export default Replacement;
