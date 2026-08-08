"use client";

import FadeIn from "./FadeIn";

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          className="rounded-3xl p-8 md:p-12 lg:p-14 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, var(--navy), var(--deep-navy))" }}
        >
          <FadeIn>
            <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
              Technology
            </span>
          </FadeIn>
          <FadeIn>
            <h2 className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-medium tracking-tight mb-9 max-w-[420px] leading-[1.15]">
              Transportation managed with technology.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div
              className="bg-white rounded-2xl p-6 md:p-7"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
            >
              {/* Dashboard header */}
              <div className="flex justify-between items-center mb-5">
                <span className="text-[var(--dark)] text-[15px] font-medium">
                  Mobility control layer
                </span>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  <span className="w-2 h-2 rounded-full bg-[var(--border)]" />
                </div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
                {[
                  { label: "Fleet", value: "Active vehicles", bg: "bg-[var(--off-white)]", color: "text-[var(--dark)]" },
                  { label: "Trips", value: "In progress", bg: "bg-[var(--off-white)]", color: "text-[var(--dark)]" },
                  { label: "Alerts", value: "Route deviation", bg: "bg-[var(--light-gold)]", color: "text-[#8A5B00]" },
                ].map((d, i) => (
                  <div key={i} className={`${d.bg} rounded-xl p-3.5`}>
                    <div className="text-[var(--muted-light)] text-[11px] mb-1">{d.label}</div>
                    <div className={`${d.color} text-[14px] font-medium`}>{d.value}</div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-2.5">
                <div className="bg-[var(--off-white)] rounded-xl p-3.5">
                  <div className="text-[var(--muted-light)] text-[11px] mb-1">Trip detail</div>
                  <div className="text-[var(--dark)] text-[14px] font-medium">BBS Airport → Tech Park</div>
                  <div className="text-[var(--muted-light)] text-[12px]">Driver: Assigned · ETA visible</div>
                </div>
                <div className="bg-[var(--dark)] rounded-xl p-3.5">
                  <div className="text-[var(--soft-navy)] text-[11px] mb-1">Reports</div>
                  <div className="text-white text-[14px] font-medium">MIS ready</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Decorative */}
          <svg className="absolute -top-8 -right-8 opacity-5" width="200" height="200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="1" />
            <circle cx="100" cy="100" r="55" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
