"use client";

import FadeIn from "./FadeIn";

const features = [
  "GPS-enabled fleet tracking",
  "Digital booking & dispatch",
  "Real-time trip monitoring",
  "Automated confirmations",
  "Corporate account management",
  "MIS reporting & analytics",
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, var(--navy), var(--deep-navy))" }}
          >
            {/* Left: headline + features */}
            <div>
              <span className="text-[var(--gold)] text-[11px] font-medium tracking-[2px] uppercase block mb-3.5">
                Technology
              </span>
              <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium tracking-tight mb-8 leading-[1.15]">
                Transportation managed with technology.
              </h2>
              <div className="flex flex-col">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className={`py-3.5 flex gap-3 items-center ${
                      i < features.length - 1 ? "border-b border-white/[0.08]" : ""
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-none" />
                    <span className="text-[#B8C6DC] text-[13px]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: dashboard mockup */}
            <div
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-[var(--off-white)]">
                <span className="text-[var(--dark)] text-[12px] sm:text-[13px] font-semibold">Connect Cabs Platform</span>
                <div className="bg-[var(--light-blue)] rounded-md px-2.5 py-1 text-[9px] sm:text-[10px] text-[var(--navy)] font-medium">
                  Live
                </div>
              </div>

              {/* Stats row — 2 cols on mobile, 3 on sm+ */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2.5 mb-1.5 sm:mb-2.5">
                <div className="bg-[var(--off-white)] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="text-[var(--muted-light)] text-[9px] sm:text-[10px]">Fleet</div>
                  <div className="text-[var(--dark)] text-[14px] sm:text-[16px] font-bold">Active</div>
                  <div className="text-[var(--muted-light)] text-[8px] sm:text-[10px]">vehicles on road</div>
                </div>
                <div className="bg-[var(--off-white)] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="text-[var(--muted-light)] text-[9px] sm:text-[10px]">Trips</div>
                  <div className="text-[var(--dark)] text-[14px] sm:text-[16px] font-bold">In progress</div>
                  <div className="text-[var(--muted-light)] text-[8px] sm:text-[10px]">being monitored</div>
                </div>
                {/* Alerts — full width on mobile, normal on sm+ */}
                <div className="bg-[var(--light-gold)] rounded-lg sm:rounded-xl p-2.5 sm:p-3 col-span-2 sm:col-span-1">
                  <div className="text-[#8A5B00] text-[9px] sm:text-[10px]">Alerts</div>
                  <div className="text-[var(--dark)] text-[14px] sm:text-[16px] font-bold">Route deviation</div>
                  <div className="text-[#8A5B00] text-[8px] sm:text-[10px]">flagged</div>
                </div>
              </div>

              {/* Trip detail */}
              <div className="bg-[var(--off-white)] rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-1.5 sm:mb-2.5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[var(--muted-light)] text-[9px] sm:text-[10px]">Active trip</div>
                    <div className="text-[var(--dark)] text-[12px] sm:text-[14px] font-semibold">BBS Airport → Tech Park</div>
                  </div>
                  <div className="bg-[var(--navy)] rounded-md px-2 sm:px-2.5 py-1 text-[8px] sm:text-[10px] text-white font-medium">
                    On route
                  </div>
                </div>
                <div className="h-[3px] bg-[var(--border)] rounded-full mt-2 sm:mt-2.5">
                  <div className="w-[65%] h-full bg-[var(--gold)] rounded-full" />
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-[var(--off-white)] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="text-[var(--muted-light)] text-[9px] sm:text-[10px]">Driver</div>
                  <div className="text-[var(--dark)] text-[11px] sm:text-[12px] font-semibold">Assigned · Verified</div>
                </div>
                <div className="bg-[var(--dark)] rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="text-[var(--soft-navy)] text-[9px] sm:text-[10px]">Reports</div>
                  <div className="text-white text-[11px] sm:text-[12px] font-semibold">MIS ready</div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <svg className="absolute -top-8 -right-8 opacity-5 pointer-events-none" width="200" height="200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="1" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="#fff" strokeWidth="1" />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}