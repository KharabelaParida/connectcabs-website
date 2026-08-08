"use client";

import FadeIn from "./FadeIn";

const problems = [
  { n: "01", title: "Multiple vendors", desc: "Fragmented, no single point of control." },
  { n: "02", title: "Manual coordination", desc: "Calls, spreadsheets, WhatsApp." },
  { n: "03", title: "Limited visibility", desc: "No real-time tracking." },
  { n: "04", title: "Safety gaps", desc: "Unverified drivers, no SOPs." },
  { n: "05", title: "Billing complexity", desc: "No consolidated reporting." },
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

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-3.5 mb-3.5">
          {problems.slice(0, 2).map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[var(--off-white)] rounded-2xl p-7 relative overflow-hidden
                hover:-translate-y-1 transition-transform duration-300 min-h-[100px]">
                <span className="absolute top-2.5 right-4 text-[52px] font-medium text-[var(--light-blue)]">
                  {p.n}
                </span>
                <div className="text-[var(--dark)] text-[16px] font-medium mb-1.5">{p.title}</div>
                <div className="text-[var(--muted)] text-[13px]">{p.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-3.5">
          {problems.slice(2).map((p, i) => (
            <FadeIn key={i} delay={(i + 2) * 0.1}>
              <div
                className={`rounded-2xl p-6 relative overflow-hidden min-h-[90px]
                  hover:-translate-y-1 transition-transform duration-300
                  ${i === 2 ? "bg-[var(--navy)]" : "bg-[var(--off-white)]"}`}
              >
                {i < 2 && (
                  <span className="absolute top-2.5 right-3.5 text-[48px] font-medium text-[var(--light-blue)]">
                    {p.n}
                  </span>
                )}
                <div
                  className={`text-[15px] font-medium mb-1 ${i === 2 ? "text-[var(--gold)]" : "text-[var(--dark)]"}`}
                >
                  {i === 2 ? "ConnectCabs brings it together." : p.title}
                </div>
                <div className={`text-[12px] ${i === 2 ? "text-[var(--soft-navy)]" : "text-[var(--muted)]"}`}>
                  {i === 2 ? "One partner. Full visibility." : p.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
