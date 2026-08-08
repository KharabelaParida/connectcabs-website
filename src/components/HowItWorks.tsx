"use client";

import FadeIn from "./FadeIn";

const steps = [
  { n: "01", label: "Requirement" },
  { n: "02", label: "Planning" },
  { n: "03", label: "Allocation" },
  { n: "04", label: "Monitoring" },
  { n: "05", label: "Reporting" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            How it works
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-9 leading-[1.15]">
            From requirement to reporting.
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-hide">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 flex-1 min-w-[100px]">
                <div
                  className={`rounded-2xl p-5 text-center flex-1
                    hover:-translate-y-1 transition-transform duration-300
                    ${i === steps.length - 1
                      ? "bg-[var(--dark)]"
                      : "bg-white border border-[var(--border)]"
                    }`}
                >
                  <div className="text-[var(--gold)] text-[22px] font-medium mb-1.5">{s.n}</div>
                  <div
                    className={`text-[13px] font-medium ${i === steps.length - 1 ? "text-white" : "text-[var(--dark)]"}`}
                  >
                    {s.label}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-[var(--border)] text-[16px] flex-none hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
