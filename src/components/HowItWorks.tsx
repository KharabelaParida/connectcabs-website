"use client";

import FadeIn from "./FadeIn";

const steps = [
  { n: "01", title: "Requirement", desc: "Share your routes, shifts & workforce needs." },
  { n: "02", title: "Planning", desc: "We design the right mobility solution." },
  { n: "03", title: "Allocation", desc: "Vehicle & Chauffeur assigned on time." },
  { n: "04", title: "Real-Time Visibility", desc: "Monitor every trip with complete visibility." },
  { n: "05", title: "Reporting", desc: "Receive timely MIS & consolidated billing." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center mb-8">
          {/* Left: headline */}
          <div>
            <FadeIn>
              <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
                How It Works
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[34px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">
                From Requirement to Reporting
              </h2>
              <p className="text-[var(--muted)] text-[13.5px] leading-relaxed max-w-[340px] text-justify">
                Getting started is simple. Share your requirements with us, and we take care of everything from planning and vehicle allocation to Chauffeur coordination, real-time monitoring, and reporting.
              </p>
            </FadeIn>
          </div>

          {/* Right: numbered list */}
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className={`py-4 flex gap-4 items-start ${i < steps.length - 1 ? "border-b border-[var(--border)]" : ""
                    }`}
                >
                  <span className="text-[var(--gold)] text-[24px] font-extrabold flex-none w-[36px]">
                    {s.n}
                  </span>
                  <div>
                    <div className="text-[var(--dark)] text-[15px] font-semibold mb-0.5">{s.title}</div>
                    <div className="text-[var(--muted-light)] text-[12px] text-justify">{s.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="bg-white border border-[var(--border)] rounded-2xl px-7 py-6 text-center">
            <div className="w-10 h-1 bg-[var(--gold)] rounded-full mx-auto mb-3.5" />
            <p className="text-[var(--dark)] text-[16px] font-bold leading-snug mb-1">
              One Team, One Seamless Process, Complete Visibility.
            </p>
            <p className="text-[var(--muted-light)] text-[13.5px] font-medium leading-snug">
              Ensuring reliable operations, greater control, and a smooth experience from start to finish.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}