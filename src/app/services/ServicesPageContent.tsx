"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20corporate%20transportation.";

const handles = [
  "Daily employee & shift transportation",
  "Executive & leadership mobility",
  "Airport & intercity corporate travel",
  "Managed fleet operations",
  "MICE, events & group movement",
];

const supporting = [
  { num: "04", title: "Airport Transfers", desc: "Flight-tracked pickup and drop, on time every time." },
  { num: "05", title: "Intercity Corporate Travel", desc: "Business travel between cities across the corridor." },
  { num: "06", title: "Managed Fleet Services", desc: "Vehicles and operations run under one standard." },
];

const flow = [
  { title: "Corporate Client", desc: "Shares routes, shifts, headcount, vehicle type" },
  { title: "ConnectCabs", desc: "Plans, allocates and coordinates centrally" },
  { title: "Own Fleet + Partner Fleet", desc: "Right vehicle drawn from the combined network" },
  { title: "Verified Chauffeur", desc: "Background-checked, trained, assigned to the trip" },
  { title: "Trip Executed & Monitored", desc: "GPS-tracked, route-compliant, on time" },
  { title: "Reporting Back To You", desc: "Consolidated MIS, single invoice, full visibility" },
];

const why = [
  { label: "Corporate-Focused", desc: "Built for enterprise mobility, not consumer ride-hailing. Contract-based, not surge-priced.", tone: "light" as const },
  { label: "Flexible Fleet", desc: "Sedan to bus, scaled to the requirement, from one executive car to a full shift movement.", tone: "light" as const },
  { label: "Own + Partner Network", desc: "Owned vehicles plus a verified partner fleet, so capacity grows without a ceiling.", tone: "navy" as const },
  { label: "Professional Chauffeurs", desc: "Background-verified, trained and accountable to a documented safety standard.", tone: "navy" as const },
  { label: "Centralised Operations", desc: "One dispatch team coordinating every trip, every location, every shift.", tone: "light" as const },
  { label: "Reporting & Support", desc: "Consolidated MIS reporting and 24x7 support your procurement and HR teams can rely on.", tone: "light" as const },
];

const steps = [
  { num: "01", title: "Share Your Requirement", desc: "Tell us routes, shifts, headcount and vehicle type." },
  { num: "02", title: "Plan & Allocate", desc: "We plan routes and allocate the right capacity." },
  { num: "03", title: "Assign Vehicle & Chauffeur", desc: "Verified Chauffeur and vehicle assigned to the trip." },
  { num: "04", title: "Execute The Trip", desc: "Pickup, route and drop, on schedule." },
  { num: "05", title: "Monitor & Report", desc: "GPS-tracked, then reported back in consolidated MIS." },
];

const industries = [
  { title: "Manufacturing", desc: "Shift transport and plant access at scale." },
  { title: "Mining & Metals", desc: "Remote site transport, safety-compliant." },
  { title: "IT & Technology", desc: "Campus shuttles and executive mobility." },
  { title: "Government & PSU", desc: "Protocol-compliant official transport." },
  { title: "Healthcare", desc: "Staff transport across shifts and sites." },
  { title: "Hospitality", desc: "Guest and staff mobility, on demand." },
  { title: "Corporate Events", desc: "Delegate movement for MICE at scale." },
];

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

export default function ServicesPageContent() {
  return (
    <>
      {/* SECTION 1 — HERO */}
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
              Our Services
            </span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[720px] mx-auto">
              Corporate Transportation, Built For The Way You Work.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[560px] mx-auto mb-7">
              ConnectCabs provides professional transportation services for employee mobility, executive travel, business journeys, events and dedicated corporate requirements.
            </p>
            <Link
              href={WA}
              target="_blank"
              className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
            >
              Request a Quote →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — INTRO + CAPABILITY */}
      <section className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-14 items-center">
          <div>
            <FadeIn>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                One Partner, Every Journey
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.15]">
                One Partner For Every Corporate Journey.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify mb-4">
                No two organisations move the same way. A manufacturing plant runs three shifts a day. A leadership team needs a car waiting before an early flight. An event brings two hundred delegates into a city over one weekend.
              </p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify">
                Rather than stitch together separate vendors for each of these, ConnectCabs runs every corporate transportation need through one accountable partner, one point of contact and one consolidated report, whether it is a single executive transfer or an entire workforce in motion.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-7 md:p-8 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-medium mb-5 uppercase">
                  What We Handle
                </div>
                <ul className="flex flex-col gap-3.5">
                  {handles.map((h) => (
                    <li key={h} className="flex gap-3 items-start">
                      <span className="text-[var(--bright-gold)]">—</span>
                      <span className="text-[13.5px]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — CORE SERVICES */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[700px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Core Services
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Seven Ways We Keep Your Business Moving.
              </h2>
            </div>
          </FadeIn>

          {/* Feature + 2 medium */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-4 mb-4">
            <FadeIn>
              <div className="relative overflow-hidden bg-[var(--dark)] rounded-[20px] p-8 text-white min-h-[230px] flex flex-col justify-between h-full">
                <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                <div className="relative z-10">
                  <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 4,16 L 4,12 C 4,10 5,8 8,8 L 14,8 L 18,2 L 34,2 L 38,8 L 40,8 C 42,8 44,10 44,12 L 44,16" />
                    <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" /><line x1="18" y1="2" x2="18" y2="8" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="text-[var(--bright-gold)] text-[10px] tracking-[1.5px] uppercase mb-1.5">01 / Most Requested</div>
                  <div className="text-[22px] font-semibold mb-2">Employee Transportation</div>
                  <p className="text-[var(--soft-navy)] text-[13px] leading-[1.6]">
                    Shift-based commute transport for large workforces. Route optimisation, fixed pickup points and GPS-tracked vehicles keep whole teams moving on time.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-white border border-[var(--border)] rounded-[20px] p-6 min-h-[230px] flex flex-col justify-between h-full">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] uppercase">02</div>
                <div>
                  <div className="text-[18px] font-semibold mb-1.5">Corporate Cab Services</div>
                  <p className="text-[var(--muted)] text-[12.5px] leading-[1.6]">Scheduled and on-demand corporate transportation for day-to-day business travel.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-white border border-[var(--border)] rounded-[20px] p-6 min-h-[230px] flex flex-col justify-between h-full">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] uppercase">03</div>
                <div>
                  <div className="text-[18px] font-semibold mb-1.5">Executive Transportation</div>
                  <p className="text-[var(--muted)] text-[12.5px] leading-[1.6]">Premium vehicles and verified Chauffeurs for senior leadership and VIP guests.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 4 supporting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supporting.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.06}>
                <div className="bg-[var(--light-blue)] rounded-[20px] p-6 min-h-[150px] flex flex-col justify-between h-full">
                  <div className="text-[var(--label-gold)] text-[10px] tracking-[1.5px] uppercase">{s.num}</div>
                  <div>
                    <div className="text-[16px] font-semibold mb-1">{s.title}</div>
                    <p className="text-[var(--muted)] text-[12px] leading-[1.55]">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.18}>
              <div className="bg-[var(--gold)] rounded-[20px] p-6 min-h-[150px] flex flex-col justify-between h-full">
                <div className="text-[var(--dark-gold)] text-[10px] tracking-[1.5px] uppercase">07</div>
                <div>
                  <div className="text-[16px] font-semibold mb-1">MICE & Group Transport</div>
                  <p className="text-[var(--dark-gold)] text-[12px] leading-[1.55]">Meetings, incentives, conferences & events.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORPORATE MOBILITY, MANAGED */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div>
            <FadeIn>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                The Model
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.15]">
                Corporate Mobility, Managed.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify mb-4">
                Behind every trip is a structured operating flow. Your requirement goes to one team, moves through our own and partner fleet, gets a verified Chauffeur, and comes back to you as a tracked trip and a clean report.
              </p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify">
                You deal with one accountable partner. We handle the coordination underneath.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-8 md:p-9 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-medium mb-6 uppercase">
                  How A Trip Flows
                </div>
                <div className="flex flex-col">
                  {flow.map((f, i) => (
                    <div key={f.title} className="flex gap-3.5 relative pb-5 last:pb-0">
                      {i < flow.length - 1 && (
                        <span className="absolute left-[5px] top-4 bottom-0 w-px bg-white/15" />
                      )}
                      <span className="w-[12px] h-[12px] rounded-full bg-[var(--bright-gold)] mt-1 shrink-0 relative z-10" />
                      <div>
                        <div className="text-[14px] font-semibold">{f.title}</div>
                        <div className="text-[12px] text-[var(--muted-light)]">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — FLEET (reused vehicle graphics) */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-9">
            <FadeIn>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
                Fleet
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[34px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">
                Vehicles For Every Business Need.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[var(--muted)] text-[15px] leading-relaxed text-center">
                Every journey has unique requirements. We provide flexible fleet options based on location, routes and mobility requirements.
              </p>
            </FadeIn>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-3 mb-3">
            <FadeIn>
              <div className="bg-[var(--dark)] rounded-2xl p-7 min-h-[180px] flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 4,16 L 4,12 C 4,10 5,8 8,8 L 14,8 L 18,2 L 34,2 L 38,8 L 40,8 C 42,8 44,10 44,12 L 44,16" />
                  <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" /><line x1="18" y1="2" x2="18" y2="8" />
                </svg>
                <div>
                  <div className="text-[var(--gold)] text-[10px] tracking-wider mb-1">POPULAR</div>
                  <div className="text-white text-[20px] font-semibold">Sedan</div>
                  <div className="text-[var(--soft-navy)] text-[12px]">City, airport, intercity</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <svg width="52" height="28" viewBox="0 0 52 28" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
                  <path d="M 4,20 L 4,14 C 4,10 6,6 10,6 L 18,6 L 24,0 L 38,0 L 44,6 L 46,6 C 48,6 50,10 50,14 L 50,20" />
                  <circle cx="16" cy="22" r="4" /><circle cx="38" cy="22" r="4" /><line x1="24" y1="0" x2="24" y2="6" />
                </svg>
                <div>
                  <div className="text-[var(--dark)] text-[17px] font-semibold">SUV</div>
                  <div className="text-[var(--muted-light)] text-[12px]">Executive, outstation</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6 min-h-[180px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                  <path d="M 4,16 L 4,10 C 4,8 5,6 8,6 L 14,6 L 18,0 L 36,0 L 40,6 L 42,6 C 44,6 44,8 44,10 L 44,16" />
                  <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" /><line x1="18" y1="0" x2="18" y2="6" /><circle cx="40" cy="3" r="1.5" fill="#FFB000" />
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
              <div className="bg-[var(--light-blue)] rounded-2xl p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
                <svg width="40" height="22" viewBox="0 0 40 22" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
                  <path d="M 2,14 L 2,10 C 2,8 3,6 6,6 L 12,6 L 16,0 L 28,0 L 32,6 L 34,6 C 36,6 38,8 38,10 L 38,14" />
                  <circle cx="10" cy="16" r="3" /><circle cx="30" cy="16" r="3" />
                </svg>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Executive</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-[var(--light-blue)] rounded-2xl p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
                <svg width="52" height="24" viewBox="0 0 52 24" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
                  <rect x="2" y="2" width="46" height="14" rx="3" />
                  <circle cx="14" cy="18" r="3" /><circle cx="38" cy="18" r="3" /><line x1="18" y1="2" x2="18" y2="16" /><line x1="32" y1="2" x2="32" y2="16" /><rect x="4" y="4" width="10" height="6" rx="1.5" />
                </svg>
                <div className="text-[var(--dark)] text-[16px] font-semibold">Tempo traveller</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-[var(--gold)] rounded-2xl p-5 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
                <svg width="56" height="26" viewBox="0 0 56 26" fill="none" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
                  <rect x="2" y="2" width="50" height="16" rx="3" />
                  <circle cx="14" cy="20" r="3" /><circle cx="28" cy="20" r="3" /><circle cx="42" cy="20" r="3" /><line x1="16" y1="2" x2="16" y2="18" /><line x1="30" y1="2" x2="30" y2="18" /><rect x="4" y="4" width="8" height="6" rx="1.5" />
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

      {/* SECTION 6 — WHY THESE SERVICES WORK */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[700px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Why It Works
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Built The Way Corporates Need It.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {why.map((w, i) => (
              <FadeIn key={w.label} delay={(i % 3) * 0.08}>
                {w.tone === "navy" ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-6 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-medium mb-2.5 uppercase">{w.label}</div>
                      <p className="text-white text-[13.5px] leading-[1.65]">{w.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                    <div className="text-[var(--gold)] text-[11px] tracking-[1.5px] font-medium mb-2.5 uppercase">{w.label}</div>
                    <p className="text-[var(--dark)] text-[13.5px] leading-[1.65] text-justify">{w.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW IT WORKS */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[700px] mx-auto mb-12">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                How It Works
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                From Requirement To Report, In Five Steps.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.06}>
                <div>
                  <div className="text-[34px] font-semibold text-[var(--gold)] mb-2.5">{s.num}</div>
                  <div className="text-[15px] font-semibold mb-1.5">{s.title}</div>
                  <p className="text-[var(--muted)] text-[12.5px] leading-[1.6]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — INDUSTRIES */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[700px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Who It&apos;s For
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Designed For The Way Industry Moves.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={(i % 4) * 0.06}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                  <div className="text-[15px] font-semibold mb-1.5">{ind.title}</div>
                  <p className="text-[var(--muted)] text-[12.5px] leading-[1.6]">{ind.desc}</p>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.18}>
              <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-6 h-full">
                <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold text-white mb-1.5">And More</div>
                  <p className="text-[var(--soft-navy)] text-[12.5px] leading-[1.6]">Every enterprise with people to move.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CTA */}
      <section className="relative overflow-hidden py-[72px] bg-[var(--dark)] text-center">
        <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">
            Ready When You Are
          </span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">
            Let&apos;s Move Your Business Forward.
          </h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[520px] mx-auto mb-6 px-6">
            Tell us what your organisation needs and we&apos;ll help build the right transportation solution.
          </p>
          <Link
            href={WA}
            target="_blank"
            className="relative z-10 bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
          >
            Request a Quote →
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
