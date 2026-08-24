"use client";

import FadeIn from "./FadeIn";

const problems = [
  { n: "01", title: "Fragmented", desc: "Too many providers. Too many touchpoints. No unified ecosystem." },
  { n: "02", title: "Manual", desc: "Disconnected tools and workflows create unnecessary operational effort." },
  { n: "03", title: "Invisible", desc: "Limited real-time data means limited visibility, control, and insight." },
  { n: "04", title: "Inconsistent", desc: "Verification, service standards, and safety processes vary across partners." },
  { n: "05", title: "Uncontrolled", desc: "Scattered transactions and reporting make accountability and reconciliation difficult." },
];

export default function ProblemSection() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-9">
          <FadeIn>
            <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
              The Problem
            </span>
          </FadeIn>
          <FadeIn>
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">
              Mobility Is Everywhere. The Ecosystem Is Disconnected.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[var(--muted-light)] text-[15px] leading-[1.6] text-center">
              Individuals, Families, Businesses, and Transport Partners Rely on Multiple Systems and Providers to Move People Efficiently. The Result Is Fragmented Experiences, Limited Visibility, and Unnecessary Complexity.
            </p>
          </FadeIn>
        </div>

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
                Connect Cabs Connects Everything That Moves.
              </div>
              <div className="text-[var(--soft-navy)] text-[13px]">
                One Platform. One Connected Ecosystem. Total Visibility.
              </div>
            </div>
            <span className="text-[var(--gold)] text-[24px] hidden sm:block">→</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}