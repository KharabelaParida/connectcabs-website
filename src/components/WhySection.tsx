"use client";

import FadeIn from "./FadeIn";

const reasons = [
  {
    title: "Technology-enabled",
    desc: "Every trip is tracked, every vehicle is visible, every booking is digital. No guesswork, no phone calls to check status.",
    iconBg: "rgba(99,102,241,0.1)",
    iconColor: "#6366F1",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  },
  {
    title: "Safety first",
    desc: "Verified drivers, maintained vehicles, safety SOPs followed on every trip. Your people's safety is non-negotiable for us.",
    iconBg: "rgba(34,197,94,0.1)",
    iconColor: "#22C55E",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Verified drivers",
    desc: "Every driver is background-checked, trained and ID verified. You get consistent quality on every trip, not a random cab.",
    iconBg: "rgba(14,165,233,0.1)",
    iconColor: "#0EA5E9",
    icon: <><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /></>,
  },
  {
    title: "Transparent pricing",
    desc: "No surge pricing, no hidden charges. You get clear contract pricing with flexible engagement models that actually make sense.",
    iconBg: "rgba(255,176,0,0.12)",
    iconColor: "#FFB000",
    icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
  },
  {
    title: "Scalable mobility",
    desc: "Need 5 vehicles today and 50 next month? We scale with your business through our own fleet and trusted partner network.",
    iconBg: "rgba(236,72,153,0.1)",
    iconColor: "#EC4899",
    icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></>,
  },
  {
    title: "24×7 support",
    desc: "Real people, not chatbots. Your dedicated account manager picks up the phone — morning, evening, or midnight.",
    iconBg: "rgba(168,85,247,0.1)",
    iconColor: "#A855F7",
    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
  },
];

export default function WhySection() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5 text-center">
            Why ConnectCabs
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-8 leading-[1.15] text-center">
            What makes us different.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="bg-[var(--off-white)] rounded-2xl p-6 min-h-[170px] flex flex-col
                  hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)]
                  transition-all duration-300"
              >
                <div
                  className="w-9 h-9 rounded-[10px] flex items-center justify-center mb-4"
                  style={{ background: r.iconBg }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={r.iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {r.icon}
                  </svg>
                </div>
                <div className="text-[var(--dark)] text-[15px] font-semibold mb-1.5">{r.title}</div>
                <div className="text-[var(--muted-light)] text-[12px] leading-relaxed text-justify">{r.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}