"use client";

import FadeIn from "./FadeIn";

const items = ["Driver verification", "Vehicle checks", "GPS tracking", "Trip monitoring", "Safety SOPs"];

export default function SafetySection() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center py-5">
            <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-medium tracking-tight text-[var(--dark)] leading-[1.15] mb-1.5">
              Every journey
            </h2>
            <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-medium tracking-tight text-[var(--dark)] leading-[1.15] mb-7">
              starts with <span className="text-[var(--gold)]">trust.</span>
            </h2>
            <div className="flex gap-5 justify-center flex-wrap">
              {items.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[var(--border)]">·</span>}
                  <span className="text-[var(--muted)] text-[13px]">{item}</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
