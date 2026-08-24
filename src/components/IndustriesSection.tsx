"use client";

import FadeIn from "./FadeIn";

const industries = [
  {
    name: "Manufacturing & Steel",
    desc: "Shift & plant transportation",
    iconBg: "rgba(11,59,120,0.08)",
    iconColor: "#0B3B78",
    icon: <path d="M2 20h20M5 20V8l7-5 7 5v12" />,
    icon2: <rect x="9" y="12" width="6" height="8" />,
  },
  {
    name: "Mining & Metals",
    desc: "Remote site & crew mobility",
    iconBg: "rgba(255,176,0,0.12)",
    iconColor: "#FFB000",
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
  },
  {
    name: "Government & PSU",
    desc: "Official & employee mobility",
    iconBg: "rgba(34,197,94,0.1)",
    iconColor: "#22C55E",
    icon: <><path d="M3 21h18M9 8h6M9 12h6M9 16h6M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></>,
  },
  {
    name: "IT & Technology",
    desc: "Campus, shift & executive mobility",
    iconBg: "rgba(99,102,241,0.1)",
    iconColor: "#6366F1",
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  },
  {
    name: "Healthcare",
    desc: "Staff & patient mobility",
    iconBg: "rgba(236,72,153,0.1)",
    iconColor: "#EC4899",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    name: "Hospitality & Tourism",
    desc: "Guest mobility & airport transfers",
    iconBg: "rgba(245,158,11,0.1)",
    iconColor: "#F59E0B",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10 15 15 0 014-10z" /></>,
  },
  {
    name: "Infrastructure & Energy",
    desc: "Project site & workforce mobility",
    iconBg: "rgba(14,165,233,0.1)",
    iconColor: "#0EA5E9",
    icon: <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" /></>,
  },
  {
    name: "SMEs & Startups",
    desc: "Flexible & scalable mobility",
    iconBg: "rgba(168,85,247,0.1)",
    iconColor: "#A855F7",
    icon: <><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5 text-center">
            Industries
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-medium tracking-tight text-[var(--dark)] mb-8 leading-[1.15] text-center">
            Mobility Solutions Designed Around You
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="bg-[var(--off-white)] rounded-2xl p-6 min-h-[150px] flex flex-col justify-between
                  hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)]
                  transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: ind.iconBg }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={ind.iconColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ind.icon}
                    {ind.icon2}
                  </svg>
                </div>
                <div>
                  <div className="text-[var(--dark)] text-[15px] font-semibold">{ind.name}</div>
                  <div className="text-[var(--muted-light)] text-[11px] mt-0.5">{ind.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}