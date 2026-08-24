"use client";

import FadeIn from "./FadeIn";

const features = [
  {
    title: "Verified Chauffeur",
    desc: "Background-checked, trained & ID-verified",
    iconBg: "rgba(34,197,94,0.1)",
    iconColor: "#22C55E",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Preventive Maintenance",
    desc: "Regular inspections & scheduled servicing",
    iconBg: "rgba(14,165,233,0.1)",
    iconColor: "#0EA5E9",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
  {
    title: "GPS-Enabled Tracking",
    desc: "Real-time trip & vehicle visibility",
    iconBg: "rgba(255,176,0,0.12)",
    iconColor: "#FFB000",
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    title: "Safety SOPs",
    desc: "Standardised safety & operating procedures",
    iconBg: "rgba(99,102,241,0.1)",
    iconColor: "#6366F1",
    icon: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  },
  {
    title: "Trip Monitoring",
    desc: "Live tracking, alerts & proactive support",
    iconBg: "rgba(236,72,153,0.1)",
    iconColor: "#EC4899",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "Quality Audits",
    desc: "Regular compliance & service quality checks",
    iconBg: "rgba(34,197,94,0.1)",
    iconColor: "#22C55E",
    icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></>,
  },
];

export default function SafetySection() {
  return (
    <section className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">

          {/* Left: headline */}
          <div>
            <FadeIn>
              <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
                Safety
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.15]">
                Safety Is Our Foundation.
              </h2>
              <p className="text-[var(--muted)] text-[13px] leading-relaxed max-w-[370px] text-justify">
                Every journey carries a responsibility. We&apos;re committed to providing safe, reliable and accountable mobility through rigorous processes, trained teams and real-time visibility.
              </p>
            </FadeIn>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className="bg-white rounded-2xl p-5 hover:-translate-y-1
                    hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)]
                    transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: f.iconBg }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={f.iconColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {f.icon}
                    </svg>
                  </div>
                  <div className="text-[var(--dark)] text-[14px] font-semibold mb-0.5">{f.title}</div>
                  <div className="text-[var(--muted-light)] text-[11px]">{f.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}