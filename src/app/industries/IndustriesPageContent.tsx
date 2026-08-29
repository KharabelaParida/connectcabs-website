"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20discuss%20corporate%20transportation%20for%20my%20organisation.";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

type Industry = {
  num: string;
  name: string;
  headline: string;
  intro: string;
  solutions: string[];
  fleet: string[];
  footLabel: string;
  footValue: string;
  footValueMuted?: boolean;
};

const industries: Industry[] = [
  {
    num: "01",
    name: "Manufacturing",
    headline: "Keeping People Moving Across Plants, Shifts And Facilities.",
    intro:
      "Manufacturing runs on shift timings and plant locations that rarely sit in the city centre. Early-morning and late-night movement, contractor teams and visitor travel all have to be coordinated reliably, or a line waits.",
    solutions: [
      "Shift-based employee transportation with fixed pickup points",
      "Dedicated vehicle deployment and plant-to-plant movement",
      "Executive, visitor and contractor transportation on monthly corporate billing",
    ],
    fleet: ["Sedan", "SUV", "Tempo Traveller", "Staff Transport"],
    footLabel: "Active corridors",
    footValue: "Bhubaneswar • Cuttack • Kalinganagar • Rourkela",
  },
  {
    num: "02",
    name: "Mining & Metals",
    headline: "Reliable Mobility For Demanding Industrial Environments.",
    intro:
      "Mining and metals operations move people across remote sites, long distances and shifting project locations. Site-to-site travel, crew rotation and visitor movement all need a partner who treats reliability and safety as non-negotiable.",
    solutions: [
      "Dedicated vehicle deployment for site-to-site and inter-site travel",
      "Employee, project-team and crew-rotation transportation",
      "Executive and visitor movement on scheduled industrial travel plans",
    ],
    fleet: ["SUV", "Sedan", "Tempo Traveller", "Employee Transport"],
    footLabel: "Active corridors",
    footValue: "Angul • Talcher • Kalinganagar • Rourkela • Jharsuguda",
  },
  {
    num: "03",
    name: "IT & Technology",
    headline: "Flexible Mobility For Modern Workplaces And Distributed Teams.",
    intro:
      "Technology workplaces run on flexible hours, late shifts and constant client and airport movement. Mobility has to flex with the team, from a single client visit to a full campus commute.",
    solutions: [
      "Employee commute, late-shift and campus transportation",
      "Airport transfers, client and executive transportation",
      "Dedicated vehicles and event transportation on demand",
    ],
    fleet: ["Sedan", "SUV", "Premium", "Tempo Traveller"],
    footLabel: "Active in",
    footValue: "Bhubaneswar • Guwahati",
  },
  {
    num: "04",
    name: "Government & Public Sector",
    headline: "Professional Transportation For Official Travel And Field Operations.",
    intro:
      "Government and public-sector travel demands professionalism and dependability, from official meetings and inspections to field visits and multi-location departmental movement. Protocol and punctuality matter on every trip.",
    solutions: [
      "Chauffeur-driven official vehicle deployment on contract",
      "Field, inspection and departmental transportation",
      "Visiting-official, conference and official-event movement",
    ],
    fleet: ["Sedan", "SUV", "Premium"],
    footLabel: "Official & field mobility across",
    footValue: "Odisha",
  },
  {
    num: "05",
    name: "Healthcare",
    headline: "Dependable Transportation For Healthcare Teams And Operations.",
    intro:
      "Hospitals run around the clock, and so do the people who keep them running. Staff shifts, visiting specialists and administrative travel all need transportation that shows up dependably, every shift.",
    solutions: [
      "Staff commute and shift transportation across sites",
      "Doctor, specialist and administrative transportation",
      "Corporate vehicle deployment for hospital operations",
    ],
    fleet: ["Sedan", "SUV", "Staff Transport"],
    footLabel: "Note",
    footValue: "Corporate and staff mobility. Not an emergency medical service.",
    footValueMuted: true,
  },
  {
    num: "06",
    name: "Hospitality",
    headline: "Seamless Transportation For Guests, Teams And Hotel Operations.",
    intro:
      "In hospitality, transportation is part of the guest experience. Airport arrivals, hotel transfers and event movement have to feel effortless and premium, while staff mobility keeps operations running behind the scenes.",
    solutions: [
      "Guest and corporate-guest airport and hotel transfers",
      "Executive, event and local city transportation",
      "Staff transportation and group movement",
    ],
    fleet: ["Sedan", "SUV", "Premium", "Tempo Traveller"],
    footLabel: "Guest & staff mobility across",
    footValue: "Bhubaneswar • Guwahati",
  },
  {
    num: "07",
    name: "Corporate Events",
    headline: "Move People, Not Just Vehicles.",
    intro:
      "Event transportation is coordination, not just booking cars. From the first airport pickup to the final return transfer, every movement has to line up across delegates arriving in waves.",
    solutions: [
      "Airport, hotel and venue transfer coordination",
      "Executive movement and VIP transportation",
      "Group and delegate movement at event scale",
    ],
    fleet: ["Sedan", "SUV", "Premium", "Tempo Traveller", "Group"],
    footLabel: "Built for",
    footValue: "Conferences • Dealer meets • Exhibitions • Offsites",
  },
];

const eventFlow = ["Airport Pickup", "Hotel Transfer", "Venue Transfer", "Executive Movement", "Event Transport", "Return Transfer"];

const whyPoints = [
  { label: "Dedicated Operations", desc: "Transportation planned around business schedules and operating hours.", navy: false },
  { label: "Flexible Fleet", desc: "Vehicles chosen for employee, executive, project or event needs.", navy: false },
  { label: "Corporate Billing", desc: "Structured billing designed for business transportation.", navy: true },
  { label: "Reliable Support", desc: "Backup and operational support when requirements change.", navy: false },
  { label: "Local Expertise", desc: "Understanding of Odisha's urban, corporate and industrial corridors.", navy: false },
];

const corridor = ["Bhubaneswar", "Cuttack", "Angul", "Talcher", "Kalinganagar", "Rourkela", "Jharsuguda"];

function IndustryTabs() {
  const [active, setActive] = useState(0);
  const d = industries[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.6fr] gap-6 lg:gap-6 items-center">
      {/* LEFT — tab list. Horizontal scroll on mobile, vertical stack on desktop */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
        {industries.map((ind, i) => {
          const on = i === active;
          return (
            <button
              key={ind.num}
              onClick={() => setActive(i)}
              className={`shrink-0 lg:shrink flex items-center gap-3.5 px-5 py-[18px] rounded-2xl border text-left transition-all duration-200 ${
                on
                  ? "bg-[var(--navy)] border-[var(--navy)]"
                  : "bg-white border-[var(--border)] hover:border-[var(--gold)]"
              }`}
            >
              <span className={`text-[13px] font-semibold w-6 ${on ? "text-[var(--bright-gold)]" : "text-[var(--muted-light)]"}`}>
                {ind.num}
              </span>
              <span className={`text-[14px] lg:text-[15px] font-semibold whitespace-nowrap lg:whitespace-normal ${on ? "text-white" : "text-[var(--dark)]"}`}>
                {ind.name}
              </span>
              <span className={`ml-auto hidden lg:inline transition-opacity duration-200 ${on ? "text-[var(--bright-gold)] opacity-100" : "opacity-0"}`}>
                →
              </span>
            </button>
          );
        })}
      </div>

      {/* RIGHT — panel */}
      <div className="relative overflow-hidden bg-[var(--off-white)] border border-[var(--border)] rounded-[20px] p-8 md:p-10 min-h-[420px]">
        <div key={active} className="relative z-10 industry-panel-anim">
          <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
            {d.name}
          </span>
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2] max-w-[520px]">
            {d.headline}
          </h3>
          <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-6 max-w-[560px]">
            {d.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4">
            {/* How ConnectCabs Helps — card */}
            <div className="bg-white border border-[var(--border)] rounded-2xl p-5">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-semibold mb-3.5">
                How ConnectCabs Helps
              </div>
              <div className="flex flex-col gap-2.5">
                {d.solutions.map((s) => (
                  <div key={s} className="flex gap-2.5 items-start text-[13.5px] leading-[1.55]">
                    <span className="text-[var(--gold)] shrink-0">→</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable Fleet — card */}
            <div className="bg-white border border-[var(--border)] rounded-2xl p-5">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-semibold mb-3.5">
                Suitable Fleet
              </div>
              <div className="flex gap-2 flex-wrap">
                {d.fleet.map((f) => (
                  <span key={f} className="border border-[var(--border)] rounded-full px-3 py-[6px] text-[12px] font-semibold text-[var(--dark)] bg-[var(--off-white)]">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-4 mt-6">
            <span className="text-[11px] text-[var(--muted)] uppercase tracking-[1px]">{d.footLabel}&nbsp;&nbsp;</span>
            {d.footValueMuted ? (
              <span className="text-[12.5px] text-[var(--muted)]">{d.footValue}</span>
            ) : (
              <span className="text-[12.5px] font-semibold text-[var(--gold)]">{d.footValue}</span>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .industry-panel-anim {
          animation: fadeSwap 0.35s ease;
        }
        @keyframes fadeSwap {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function IndustriesPageContent() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-center pt-40 pb-24 px-6"
        style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy) 42%, #ffffff 88%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            ...dotStyle,
            WebkitMaskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 80%)",
            maskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 80%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">
              Industries We Serve
            </span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[760px] mx-auto">
              Corporate Mobility, Built Around Your Industry.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[580px] mx-auto mb-7">
              Every industry moves differently. ConnectCabs provides reliable corporate transportation designed around your people, schedules, locations and operational requirements, not a generic cab-rental model.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href={WA}
                target="_blank"
                className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
              >
                Talk to Our Mobility Team →
              </Link>
              <Link
                href="#industries"
                className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200"
              >
                Explore Industries
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRY TABS */}
      <section id="industries" className="py-20 md:py-24 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                By Environment
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Mobility Solutions For Every Business Environment.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <IndustryTabs />
          </FadeIn>
        </div>
      </section>

      {/* CORPORATE EVENTS — full-width flow (kept) */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Corporate Events
              </span>
              <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">
                One Coordinated Journey, End To End.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.7]">
                Event transportation is coordination, not just booking cars. From the first airport pickup to the final return transfer, every movement has to line up.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--dark)] rounded-[20px] p-8 md:p-11 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-5">
                  {eventFlow.map((step, i) => (
                    <div key={step} className="flex md:block items-center gap-3.5 md:text-center flex-1 relative">
                      {i < eventFlow.length - 1 && (
                        <span className="md:hidden absolute left-[5px] top-5 h-full w-px bg-white/15" />
                      )}
                      <span className="w-[12px] h-[12px] rounded-full bg-[var(--bright-gold)] shrink-0 md:mx-auto md:mb-3 relative z-10" />
                      <div className="text-[13px] font-semibold">{step}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/12 mt-8 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                  <div>
                    <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--bright-gold)] mb-2">Use Cases</div>
                    <div className="text-[13px] text-[var(--soft-navy)]">
                      Conferences • Dealer meets • Exhibitions • Seminars • Offsites • VIP & group movement
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {["Sedan", "SUV", "Premium", "Tempo Traveller", "Group"].map((f) => (
                      <span key={f} className="border border-white/20 rounded-full px-3 py-[5px] text-[11.5px] font-semibold text-white">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY INDUSTRY-SPECIFIC */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[760px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                The Difference
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.25]">
                Your Business Doesn&apos;t Run On A Taxi Schedule. Neither Should Your Transportation.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyPoints.map((w, i) => (
              <FadeIn key={w.label} delay={(i % 5) * 0.06}>
                {w.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-6 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-semibold mb-2.5 uppercase">{w.label}</div>
                      <p className="text-white text-[12.5px] leading-[1.6]">{w.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                    <div className="text-[var(--gold)] text-[11px] tracking-[1.5px] font-semibold mb-2.5 uppercase">{w.label}</div>
                    <p className="text-[var(--dark)] text-[12.5px] leading-[1.6]">{w.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ODISHA CORRIDOR */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Regional Reach
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">
                Connecting Odisha&apos;s Business & Industrial Corridors.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.7]">
                From corporate offices and airports to industrial plants and project locations, ConnectCabs helps businesses move people across Odisha.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-[20px] p-9 md:p-13 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-2">
                {corridor.map((city, i) => {
                  const endpoint = i === 0 || i === corridor.length - 1;
                  return (
                    <div key={city} className="flex md:block items-center gap-3.5 md:text-center md:flex-1 relative">
                      {i < corridor.length - 1 && (
                        <span className="md:hidden absolute left-[6px] top-5 h-full w-px bg-white/25" />
                      )}
                      <span
                        className={`rounded-full shrink-0 md:mx-auto md:mb-2.5 relative z-10 ${
                          endpoint ? "w-[14px] h-[14px] bg-[var(--bright-gold)]" : "w-[11px] h-[11px] bg-white"
                        }`}
                        style={endpoint ? { boxShadow: "0 0 0 6px rgba(255,201,40,0.15)" } : undefined}
                      />
                      <div className="text-[12.5px] font-semibold">{city}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[72px] bg-[var(--dark)] text-center">
        <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">
            Let&apos;s Talk
          </span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">
            Planning Transportation For Your Organization?
          </h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            Tell us about your people, locations, schedules and transportation requirements. We&apos;ll help you build the right mobility solution.
          </p>
          <div className="relative z-10 flex gap-3 justify-center flex-wrap px-6">
            <Link
              href={WA}
              target="_blank"
              className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
            >
              Discuss Your Requirement →
            </Link>
            <Link
              href={WA}
              target="_blank"
              className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200"
            >
              Contact ConnectCabs
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
