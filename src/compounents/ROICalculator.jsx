import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineChip } from "react-icons/hi";

const ROICalculator = () => {
  const [hours, setHours] = useState("");
  const [cost, setCost] = useState("");
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCalculate = () => {
    const monthlyHours = Number(hours);
    const hourlyCost = Number(cost);
    const automationRate = 0.5;

    const hoursSavedMonth = monthlyHours * automationRate;
    const hoursSavedYear = hoursSavedMonth * 12;

    const moneySavedMonth = hoursSavedMonth * hourlyCost;
    const moneySavedYear = moneySavedMonth * 12;

    setResult({
      hoursSavedMonth,
      hoursSavedYear,
      moneySavedMonth,
      moneySavedYear,
      monthlyHours,
      hourlyCost,
    });

    setOpen(true);
  };

  const usd = (val) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(val);

  const monthlyCostBefore = result?.monthlyHours * result?.hourlyCost || 0;

  return (
    <>
      <section id="roi-calculator" className="bgGradient py-7 min-h-screen  ">
        <div className="flex flex-col items-center px-3">
          {/* Heading */}
          <div className="max-w-3xl w-full text-center mb-12">
            <span
              style={{
                textShadow:
                  "0 0 38px rgba(0, 206, 209, 0.45), 0 0 20px rgba(0, 206, 209, 0.25)",
              }}
              className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-700"
            >
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">💰 Calculate your ROI</span>
              </div>
            </span>
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
              What could AI save you?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--text-primary)" }}
            >
              Use our calculator to discover the potential ROI of AI automation for your business.

              Note: This is an estimated projection based on industry averages. 
              Your actual savings may vary based on specific workflow complexity."
            </motion.p>
          </div>

          {/* Input Card */}
          <div
            className="rounded-xl p-3 md:p-8 w-full max-w-xl shadow-md"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid rgba(0,206,209,0.35)",
            }}
          >
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl pb-2 font-semibold tracking-tight bg-clip-text mb-4 text-transparent"
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
              Calculate Your Savings
            </motion.h2>

            <div className="space-y-4">
              <div>
                {" "}
                <label className="text-gray-300 font-medium text-sm">
                  {" "}
                  ⏱ Estimated hours spent on repetitive tasks per month{" "}
                </label>{" "}
                <input
                  type="number"
                  placeholder="e.g., 60 hrs for admin/data entry"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="mt-2 w-full rounded-lg p-3 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  style={{
                    backgroundColor: "var(--card-bgs)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="text-gray-300 font-medium text-sm">
                  {" "}
                  💶 Average all-in hourly cost employee (incl. salary, taxes,
                  overhead){" "}
                </label>{" "}
                <input
                  type="number"
                  placeholder="Includes salary, taxes, & overhead"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  style={{
                    backgroundColor: "var(--card-bgs)",
                    border: "1px solid rgba(0,206,209,0.35)",
                  }}
                  className="mt-2 w-full rounded-lg p-3 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />{" "}
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold"
            >
              📈 Calculate ROI
            </button>
          </div>

          {/* POPUP */}
          <AnimatePresence>
            {open && result && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/90"
                  onClick={() => setOpen(false)}
                />

                {/* Modal */}
                <motion.div
                  initial={{ scale: 0.9, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9 }}
                  className="relative text-white max-w-2xl w-full rounded-3xl p-8 border"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-5 text-xl opacity-70"
                  >
                    ✕
                  </button>

                  <h3 className="text-xl font-semibold mb-8 text-center">
                    AI Time & Cost Savings 
                    Assuming 50% automation efficiency.
                  </h3>

                  {/* Metrics */}
                  <div className="space-y-6 mb-8">
                    <div className="p-6 rounded-xl border bg-sky-500/30">
                      <p className="opacity-70">🎯 Hours Saved / Month</p>
                      <p className="text-2xl font-bold text-cyan-400">
                        {result.hoursSavedMonth} hrs
                      </p>
                    </div>

                    <div className="flex gap-4 flex-col md:flex-row">
                      <div className="p-6 flex-1 rounded-xl bg-red-500/20 border">
                        <p className="opacity-70">💰 Saved / Month</p>
                        <p className="text-3xl font-bold text-cyan-400">
                          {usd(result.moneySavedMonth)}
                        </p>
                      </div>

                      <div className="p-6 flex-1 rounded-xl bg-emerald-700/30 border">
                        <p className="opacity-70">💸 Saved / Year</p>
                        <p className="text-3xl font-bold text-cyan-400">
                          {usd(result.moneySavedYear)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Before / After */}
                  <div className="rounded-xl overflow-hidden border">
                    <div className="grid grid-cols-3 bg-white/5 text-sm font-semibold">
                      <div className="p-3">Metric</div>
                      <div className="p-3">Before AI</div>
                      <div className="p-3">After AI</div>
                    </div>

                    <div className="grid grid-cols-3 text-sm border-t">
                      <div className="p-3">Monthly Cost</div>
                      <div className="p-3">{usd(monthlyCostBefore)}</div>
                      <div className="p-3 text-cyan-400">
                        {usd(monthlyCostBefore * 0.5)}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 text-sm border-t">
                      <div className="p-3">Time Spent</div>
                      <div className="p-3">{result.monthlyHours} hrs</div>
                      <div className="p-3 text-cyan-400">
                        {result.hoursSavedMonth} hrs
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* <hr className="h-px bg-gray-800 my-12 border-0" /> */}
    </>
  );
};

export default ROICalculator;
