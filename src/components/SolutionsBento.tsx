"use client";

import FadeIn from "./FadeIn";

export default function SolutionsBento() {
  return (
    <section id="solutions" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Solutions
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-8 leading-[1.15]">
            One partner. Every business journey.
          </h2>
        </FadeIn>

        {/* Row 1: large + medium */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3.5 mb-3.5">
          <FadeIn>
            <div
              className="rounded-2xl p-8 md:p-9 min-h-[200px] flex flex-col justify-end
                hover:scale-[1.01] transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, var(--navy), var(--deep-navy))" }}
            >
              <div className="text-[var(--soft-navy)] text-[10px] tracking-[1.5px] mb-2.5">
                CORE SERVICE
              </div>
              <div className="text-white text-[24px] md:text-[26px] font-medium mb-2.5">
                Employee transportation
              </div>
              <div className="text-[#B8C6DC] text-[14px] max-w-[300px] leading-relaxed">
                Scheduled pickups and drops, managed at scale across shifts and locations.
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="bg-[var(--gold)] rounded-2xl p-7 md:p-8 min-h-[200px] flex flex-col justify-end
                hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-[var(--dark-gold)] text-[10px] tracking-[1.5px] mb-2">
                PREMIUM
              </div>
              <div className="text-[var(--dark)] text-[22px] font-medium">
                Executive mobility
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2: three equal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-3.5">
          {[
            { title: "Airport transfers", desc: "Monitored pickups" },
            { title: "Intercity travel", desc: "Multi-city routes" },
            { title: "Managed fleet", desc: "Verified chauffeurs" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="bg-white rounded-2xl p-6 border border-[var(--border)]
                  hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,31,58,0.08)]
                  transition-all duration-300"
              >
                <div className="text-[var(--dark)] text-[16px] font-medium mb-1">{s.title}</div>
                <div className="text-[var(--muted)] text-[12px]">{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-3.5">
          <FadeIn>
            <div className="bg-[var(--light-blue)] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-[var(--dark)] text-[16px] font-medium mb-1">
                Corporate events & MICE
              </div>
              <div className="text-[var(--muted)] text-[12px]">Group logistics</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-[var(--dark)] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-white text-[16px] font-medium mb-1">
                Business travel & accommodation
              </div>
              <div className="text-[var(--soft-navy)] text-[12px]">Hotels, flights, itinerary planning</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
