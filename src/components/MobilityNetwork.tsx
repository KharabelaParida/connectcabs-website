"use client";

import FadeIn from "./FadeIn";

export default function MobilityNetwork() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Mobility network
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-8 leading-[1.15]">
            The network behind every journey.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-[var(--off-white)] rounded-3xl p-8 md:p-12 flex items-center justify-center overflow-x-auto">
            <svg viewBox="0 0 640 220" className="w-full max-w-[640px] min-w-[500px]">
              {/* Center hub */}
              <circle cx="320" cy="110" r="40" fill="var(--navy)" />
              <text x="320" y="105" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="500">
                Connect
              </text>
              <text x="320" y="120" textAnchor="middle" fill="var(--gold)" fontSize="10" fontWeight="500">
                Cabs
              </text>

              {/* Left: Own fleet */}
              <line x1="104" y1="55" x2="280" y2="100" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="5,5" />
              <circle cx="80" cy="55" r="26" fill="#fff" stroke="var(--border)" strokeWidth="1" />
              <text x="80" y="52" textAnchor="middle" fill="var(--dark)" fontSize="9" fontWeight="500">Own</text>
              <text x="80" y="63" textAnchor="middle" fill="var(--muted-light)" fontSize="8">fleet</text>

              {/* Left: Partner fleet */}
              <line x1="104" y1="165" x2="280" y2="120" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="5,5" />
              <circle cx="80" cy="165" r="26" fill="#fff" stroke="var(--border)" strokeWidth="1" />
              <text x="80" y="162" textAnchor="middle" fill="var(--dark)" fontSize="9" fontWeight="500">Partner</text>
              <text x="80" y="173" textAnchor="middle" fill="var(--muted-light)" fontSize="8">fleet</text>

              {/* Left: Drivers */}
              <line x1="220" y1="110" x2="280" y2="110" stroke="var(--gold)" strokeWidth="1.5" />
              <circle cx="200" cy="110" r="20" fill="var(--light-gold)" stroke="var(--gold)" strokeWidth="1" />
              <text x="200" y="113" textAnchor="middle" fill="#8A5B00" fontSize="8" fontWeight="500">Drivers</text>

              {/* Right: Corporate */}
              <line x1="360" y1="100" x2="534" y2="55" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="5,5" />
              <circle cx="560" cy="55" r="26" fill="#fff" stroke="var(--border)" strokeWidth="1" />
              <text x="560" y="52" textAnchor="middle" fill="var(--dark)" fontSize="9" fontWeight="500">Corporate</text>
              <text x="560" y="63" textAnchor="middle" fill="var(--muted-light)" fontSize="8">client</text>

              {/* Right: Employees */}
              <line x1="360" y1="120" x2="534" y2="165" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="5,5" />
              <circle cx="560" cy="165" r="26" fill="#fff" stroke="var(--border)" strokeWidth="1" />
              <text x="560" y="162" textAnchor="middle" fill="var(--dark)" fontSize="9" fontWeight="500">Employees</text>
              <text x="560" y="173" textAnchor="middle" fill="var(--muted-light)" fontSize="8">riders</text>
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
