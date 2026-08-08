"use client";

import FadeIn from "./FadeIn";

const items = [
  "Corporate mobility",
  "Managed fleet",
  "Technology-enabled",
  "Safety first",
  "24×7 support",
];

export default function TrustStrip() {
  return (
    <section className="bg-[var(--off-white)] pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex-none rounded-xl px-5 py-3.5 text-[13px] font-medium whitespace-nowrap
                  ${i === 2
                    ? "bg-[var(--dark)] text-white"
                    : "bg-white text-[var(--dark)] border border-[var(--border)]"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
