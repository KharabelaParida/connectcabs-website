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

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-3 mb-10">
          <FadeIn>
            <div
              className="rounded-2xl p-7 min-h-[180px] flex flex-col justify-between
                hover:scale-[1.01] transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, var(--navy), var(--deep-navy))" }}
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">01</span>
              <div>
                <div className="text-white text-[20px] font-semibold mb-1">Employee transportation</div>
                <div className="text-[#B8C6DC] text-[12px]">Scheduled pickups at scale</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div
              className="bg-[var(--gold)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--dark-gold)] text-[28px] font-extrabold">02</span>
              <div>
                <div className="text-[var(--dark)] text-[17px] font-semibold">Executive mobility</div>
                <div className="text-[var(--dark-gold)] text-[12px]">Premium travel</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">03</span>
              <div>
                <div className="text-[var(--dark)] text-[17px] font-semibold">Airport transfers</div>
                <div className="text-[var(--muted-light)] text-[12px]">Monitored pickups</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <FadeIn>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">04</span>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Intercity travel</div>
                <div className="text-[var(--muted-light)] text-[12px]">Multi-city routes</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">05</span>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Managed fleet</div>
                <div className="text-[var(--muted-light)] text-[12px]">Verified chauffeurs</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div
              className="bg-[var(--dark)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between
                hover:scale-[1.01] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">06</span>
              <div>
                <div className="text-white text-[16px] font-semibold">Corporate events & MICE</div>
                <div className="text-[var(--soft-navy)] text-[12px]">Group logistics, conferences</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div
              className="bg-[var(--light-blue)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">07</span>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Business travel</div>
                <div className="text-[var(--muted-light)] text-[12px]">Hotels, flights, itinerary</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}