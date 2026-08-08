"use client";

import FadeIn from "./FadeIn";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Fleet
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-1.5 leading-[1.15]">
            Every journey has a different requirement.
          </h2>
          <p className="text-[var(--muted)] text-[13px] mb-7">
            Fleet availability varies by location.
          </p>
        </FadeIn>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-3.5 mb-3.5">
          <FadeIn>
            <div className="bg-[var(--dark)] rounded-2xl p-7 min-h-[160px] flex flex-col justify-end
              hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--gold)] text-[10px] tracking-wider mb-1">POPULAR</div>
              <div className="text-white text-[20px] font-medium">Sedan</div>
              <div className="text-[var(--soft-navy)] text-[12px]">City, airport, intercity</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[120px] flex flex-col justify-end
              hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--dark)] text-[17px] font-medium">SUV</div>
              <div className="text-[var(--muted)] text-[12px]">Executive, outstation</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[120px] flex flex-col justify-end
              hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--dark)] text-[17px] font-medium">Premium</div>
              <div className="text-[var(--muted)] text-[12px]">Senior leadership</div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.4fr] gap-3.5">
          <FadeIn>
            <div className="bg-[var(--light-blue)] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--dark)] text-[16px] font-medium">Executive</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-[var(--light-blue)] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--dark)] text-[16px] font-medium">Tempo traveller</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="bg-[var(--gold)] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300">
              <div className="text-[var(--dark)] text-[16px] font-medium">Bus & group</div>
              <div className="text-[var(--dark-gold)] text-[11px] mt-0.5">Events, MICE, large teams</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
