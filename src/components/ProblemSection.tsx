"use client";

import FadeIn from "./FadeIn";

const problems = [
  { n: "01", title: "Multiple Vendors", desc: "Fragmented, no single point of control." },
  { n: "02", title: "Manual Coordination", desc: "Calls, spreadsheets, WhatsApp." },
  { n: "03", title: "Limited Visibility", desc: "No real-time tracking." },
  { n: "04", title: "Safety Gaps", desc: "Unverified drivers, no SOPs." },
  { n: "05", title: "Billing Complexity", desc: "No consolidated reporting." },
];

export default function ProblemSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            The problem
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-9 max-w-[480px] leading-[1.15]">
            Corporate transport gets complicated. Fast.
          </h2>
        </FadeIn>

        {/* Row 1: 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {problems.slice(0, 2).map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[var(--off-white)] rounded-2xl p-6 flex gap-4 items-start
                hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[var(--gold)] text-[32px] font-extrabold leading-none flex-none">
                  {p.n}
                </span>
                <div>
                  <div className="text-[var(--dark)] text-[15px] font-semibold mb-0.5">{p.title}</div>
                  <div className="text-[var(--muted-light)] text-[12px]">{p.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {problems.slice(2).map((p, i) => (
            <FadeIn key={i} delay={(i + 2) * 0.1}>
              <div className="bg-[var(--off-white)] rounded-2xl p-6 flex gap-4 items-start
                hover:-translate-y-1 transition-transform duration-300">
                <span className="text-[var(--gold)] text-[32px] font-extrabold leading-none flex-none">
                  {p.n}
                </span>
                <div>
                  <div className="text-[var(--dark)] text-[15px] font-semibold mb-0.5">{p.title}</div>
                  <div className="text-[var(--muted-light)] text-[12px]">{p.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Answer bar */}
        <FadeIn delay={0.5}>
          <div className="bg-[var(--dark)] rounded-2xl p-6 flex items-center justify-between
            hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="text-[var(--gold)] text-[17px] font-bold">
                Connect Cabs brings it together.
              </div>
              <div className="text-[var(--soft-navy)] text-[13px]">
                One partner. Full visibility. No complexity.
              </div>
            </div>
            <span className="text-[var(--gold)] text-[24px] hidden sm:block">→</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}