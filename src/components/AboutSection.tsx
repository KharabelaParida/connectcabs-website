"use client";

import FadeIn from "./FadeIn";

const leaders = [
  { name: "Chandramani Behera", role: "Director · Operations & logistics · 21+ years" },
  { name: "Prakash Kumar Mahali", role: "Director · Technology & product · 22+ years" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            About
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.15]">
            Built around the way businesses move.
          </h2>
          <p className="text-[var(--muted)] text-[15px] leading-relaxed mb-8 max-w-[520px]">
            ConnectCabs is a Bhubaneswar-based corporate travel and mobility solutions
            company — helping businesses simplify employee and executive travel with
            reliable, technology-enabled transportation.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {leaders.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="bg-white rounded-2xl p-6 border border-[var(--border)]
                  hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-[var(--dark)] text-[16px] font-medium mb-1">{p.name}</div>
                <div className="text-[var(--muted)] text-[12px]">{p.role}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
