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
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-3 mb-15">
          <FadeIn>
            <div className="bg-[var(--dark)] rounded-2xl p-7 min-h-[180px] flex flex-col justify-between
              hover:scale-[1.01] transition-transform duration-300">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 4,16 L 4,12 C 4,10 5,8 8,8 L 14,8 L 18,2 L 34,2 L 38,8 L 40,8 C 42,8 44,10 44,12 L 44,16" />
                <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" />
                <line x1="18" y1="2" x2="18" y2="8" />
              </svg>
              <div>
                <div className="text-[var(--gold)] text-[10px] tracking-wider mb-1">POPULAR</div>
                <div className="text-white text-[20px] font-semibold">Sedan</div>
                <div className="text-[var(--soft-navy)] text-[12px]">City, airport, intercity</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between
              hover:scale-[1.02] transition-transform duration-300">
              <svg width="52" height="28" viewBox="0 0 52 28" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                <path d="M 4,20 L 4,14 C 4,10 6,6 10,6 L 18,6 L 24,0 L 38,0 L 44,6 L 46,6 C 48,6 50,10 50,14 L 50,20" />
                <circle cx="16" cy="22" r="4" /><circle cx="38" cy="22" r="4" />
                <line x1="24" y1="0" x2="24" y2="6" />
              </svg>
              <div>
                <div className="text-[var(--dark)] text-[17px] font-semibold">SUV</div>
                <div className="text-[var(--muted-light)] text-[12px]">Executive, outstation</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between
              hover:scale-[1.02] transition-transform duration-300">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                <path d="M 4,16 L 4,10 C 4,8 5,6 8,6 L 14,6 L 18,0 L 36,0 L 40,6 L 42,6 C 44,6 44,8 44,10 L 44,16" />
                <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" />
                <line x1="18" y1="0" x2="18" y2="6" />
                <circle cx="40" cy="3" r="1.5" fill="#FFB000" />
              </svg>
              <div>
                <div className="text-[var(--dark)] text-[17px] font-semibold">Premium</div>
                <div className="text-[var(--muted-light)] text-[12px]">Senior leadership</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1.4fr] gap-3">
          <FadeIn>
            <div className="bg-[var(--light-blue)] rounded-2xl p-5 flex flex-col gap-3
              hover:scale-[1.02] transition-transform duration-300">
              <svg width="40" height="22" viewBox="0 0 40 22" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                <path d="M 2,14 L 2,10 C 2,8 3,6 6,6 L 12,6 L 16,0 L 28,0 L 32,6 L 34,6 C 36,6 38,8 38,10 L 38,14" />
                <circle cx="10" cy="16" r="3" /><circle cx="30" cy="16" r="3" />
              </svg>
              <div className="text-[var(--dark)] text-[16px] font-semibold">Executive</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-[var(--light-blue)] rounded-2xl p-5 flex flex-col gap-3
              hover:scale-[1.02] transition-transform duration-300">
              <svg width="52" height="24" viewBox="0 0 52 24" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
                <rect x="2" y="2" width="46" height="14" rx="3" />
                <circle cx="14" cy="18" r="3" /><circle cx="38" cy="18" r="3" />
                <line x1="18" y1="2" x2="18" y2="16" />
                <line x1="32" y1="2" x2="32" y2="16" />
                <rect x="4" y="4" width="10" height="6" rx="1.5" />
              </svg>
              <div className="text-[var(--dark)] text-[16px] font-semibold">Tempo traveller</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="bg-[var(--gold)] rounded-2xl p-5 flex flex-col gap-3
              hover:scale-[1.02] transition-transform duration-300">
              <svg width="56" height="26" viewBox="0 0 56 26" fill="none" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                <rect x="2" y="2" width="50" height="16" rx="3" />
                <circle cx="14" cy="20" r="3" /><circle cx="28" cy="20" r="3" /><circle cx="42" cy="20" r="3" />
                <line x1="16" y1="2" x2="16" y2="18" />
                <line x1="30" y1="2" x2="30" y2="18" />
                <rect x="4" y="4" width="8" height="6" rx="1.5" />
              </svg>
              <div>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Bus & group</div>
                <div className="text-[var(--dark-gold)] text-[11px] mt-0.5">Events, MICE, large teams</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}