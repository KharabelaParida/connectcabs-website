"use client";

import FadeIn from "./FadeIn";

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Industries
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-7 leading-[1.15]">
            Built around the way your business moves.
          </h2>
        </FadeIn>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3.5 mb-3.5">
          <FadeIn>
            <div
              className="bg-[var(--navy)] rounded-2xl p-7 md:p-8 min-h-[140px] flex flex-col justify-end
                hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] mb-1">HEAVY INDUSTRY</div>
              <div className="text-white text-[22px] font-medium">Manufacturing & mining</div>
              <div className="text-[var(--soft-navy)] text-[13px]">Shift transport, remote sites, multi-location</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="bg-[var(--off-white)] rounded-2xl p-7 min-h-[140px] flex flex-col justify-end
                hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-[var(--dark)] text-[20px] font-medium">IT & technology</div>
              <div className="text-[var(--muted)] text-[12px]">Campus, shift-based, executive</div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.2fr] gap-3.5">
          {[
            { name: "Government", bg: "bg-[var(--off-white)]" },
            { name: "Healthcare", bg: "bg-[var(--off-white)]" },
            { name: "SMEs & startups", bg: "bg-[var(--light-blue)]" },
          ].map((ind, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`${ind.bg} rounded-2xl p-5
                  hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="text-[var(--dark)] text-[15px] font-medium">{ind.name}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
