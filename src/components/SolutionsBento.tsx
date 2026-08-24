"use client";

import FadeIn from "./FadeIn";

export default function SolutionsBento() {
  return (
    <section id="solutions" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-9">
          <FadeIn>
            <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
              Solutions
            </span>
          </FadeIn>
          <FadeIn>
            <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">
              One Connected Mobility Ecosystem. Built Around You.
            </h2>
          </FadeIn>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-3 mb-10">
          <FadeIn>
            <div
              className="rounded-2xl p-7 min-h-[180px] flex flex-col justify-between text-left
                hover:scale-[1.01] transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, var(--navy), var(--deep-navy))" }}
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">01</span>
              <div>
                <div className="text-white text-[19px] font-semibold mb-1">Everyday & Employee Mobility</div>
                <div className="text-[#B8C6DC] text-[12px]">Reliable, scheduled mobility for individuals, families, and teams at scale.</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div
              className="bg-[var(--gold)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between text-left
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--dark-gold)] text-[28px] font-extrabold">02</span>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold mb-1">Executive & Premium Mobility</div>
                <div className="text-[var(--dark-gold)] text-[12px]">Personalized, premium journeys for executives and VIPs.</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between text-left
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">03</span>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold mb-1">Airport & Business Travel</div>
                <div className="text-[var(--muted-light)] text-[12px]">Seamless transfers and connected travel support.</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <FadeIn>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-left
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">04</span>
              <div>
                <div className="text-[var(--dark)] text-[15px] font-semibold mb-1">Intercity & Long-Distance Mobility</div>
                <div className="text-[var(--muted-light)] text-[12px]">Reliable city-to-city travel, one platform.</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div
              className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-left
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">05</span>
              <div>
                <div className="text-[var(--dark)] text-[15px] font-semibold mb-1">Fleet & Driver Management</div>
                <div className="text-[var(--muted-light)] text-[12px]">Verified drivers, real-time visibility.</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div
              className="bg-[var(--dark)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-left
                hover:scale-[1.01] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">06</span>
              <div>
                <div className="text-white text-[15px] font-semibold mb-1">Events, MICE & Group Mobility</div>
                <div className="text-[var(--soft-navy)] text-[12px]">Coordination for conferences and group travel.</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div
              className="bg-[var(--light-blue)] rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-left
                hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="text-[var(--gold)] text-[28px] font-extrabold">07</span>
              <div>
                <div className="text-[var(--dark)] text-[15px] font-semibold mb-1">Mobility Partner Network</div>
                <div className="text-[var(--muted-light)] text-[12px]">A connected ecosystem of trusted partners.</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}