"use client";

import FadeIn from "./FadeIn";

const steps = [
  { n: "01", title: "Requirement", desc: "Share your routes, shifts & headcount" },
  { n: "02", title: "Planning", desc: "We design the mobility solution" },
  { n: "03", title: "Allocation", desc: "Vehicle & Driver assigned" },
  { n: "04", title: "Monitoring", desc: "Real-time trip tracking" },
  { n: "05", title: "Reporting", desc: "MIS & consolidated billing delivered" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">

          {/* Left: headline */}
          <div>
            <FadeIn>
              <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
                How it works
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.15]">
                From requirement to reporting.
              </h2>
              <p className="text-[var(--muted)] text-[13px] leading-relaxed max-w-[300px] text-justify">
                Getting started is simple. You share your requirements, we handle everything from there: planning, vehicles, drivers, monitoring and reporting. No back-and-forth with multiple vendors. One team, one process, complete visibility.
              </p>
            </FadeIn>
          </div>

          {/* Right: numbered list */}
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`py-5 flex gap-5 items-center ${
                    i < steps.length - 1 ? "border-b border-[var(--border)]" : ""
                  }`}
                >
                  <span className="text-[var(--gold)] text-[28px] font-extrabold flex-none w-[40px]">
                    {s.n}
                  </span>
                  <div>
                    <div className="text-[var(--dark)] text-[15px] font-semibold mb-0.5">{s.title}</div>
                    <div className="text-[var(--muted-light)] text-[12px]">{s.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}