"use client";

import FadeIn from "./FadeIn";

const reasons = [
  { n: "01", text: "Technology-enabled operations" },
  { n: "02", text: "Safety & compliance first" },
  { n: "03", text: "Verified chauffeurs & fleet" },
  { n: "04", text: "Transparent pricing" },
  { n: "05", text: "Scalable mobility" },
  { n: "06", text: "24×7 dedicated support" },
];

export default function WhySection() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Why ConnectCabs
          </span>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className={`py-5 ${i < reasons.length - 2 ? "border-b border-[var(--off-white)]" : ""}`}
              >
                <div className="text-[var(--gold)] text-[24px] font-medium mb-1">{r.n}</div>
                <div className="text-[var(--dark)] text-[16px] font-medium">{r.text}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
