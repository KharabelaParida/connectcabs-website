"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20discuss%20a%20fleet%20requirement%20for%20my%20organisation.";
const waFor = (v: string) =>
  `https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(v)}%20category.`;

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

/* ---------- Vehicle SVGs (reused from homepage Fleet section, enlarged) ---------- */
function VehicleSVG({ kind, stroke, opacity = 1 }: { kind: string; stroke: string; opacity?: number }) {
  const common = { fill: "none", stroke, strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, opacity };
  switch (kind) {
    case "sedan":
      return (
        <svg width="150" height="76" viewBox="0 0 48 24" {...common} aria-hidden="true">
          <path d="M 4,16 L 4,12 C 4,10 5,8 8,8 L 14,8 L 18,2 L 34,2 L 38,8 L 40,8 C 42,8 44,10 44,12 L 44,16" />
          <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" /><line x1="18" y1="2" x2="18" y2="8" />
        </svg>
      );
    case "suv":
      return (
        <svg width="160" height="86" viewBox="0 0 52 28" {...common} aria-hidden="true">
          <path d="M 4,20 L 4,14 C 4,10 6,6 10,6 L 18,6 L 24,0 L 38,0 L 44,6 L 46,6 C 48,6 50,10 50,14 L 50,20" />
          <circle cx="16" cy="22" r="4" /><circle cx="38" cy="22" r="4" /><line x1="24" y1="0" x2="24" y2="6" />
        </svg>
      );
    case "premium":
      return (
        <svg width="150" height="76" viewBox="0 0 48 24" {...common} aria-hidden="true">
          <path d="M 4,16 L 4,10 C 4,8 5,6 8,6 L 14,6 L 18,0 L 36,0 L 40,6 L 42,6 C 44,6 44,8 44,10 L 44,16" />
          <circle cx="14" cy="18" r="3" /><circle cx="34" cy="18" r="3" /><line x1="18" y1="0" x2="18" y2="6" /><circle cx="40" cy="3" r="1.5" fill={stroke} />
        </svg>
      );
    case "exec":
      return (
        <svg width="145" height="80" viewBox="0 0 40 22" {...common} aria-hidden="true">
          <path d="M 2,14 L 2,10 C 2,8 3,6 6,6 L 12,6 L 16,0 L 28,0 L 32,6 L 34,6 C 36,6 38,8 38,10 L 38,14" />
          <circle cx="10" cy="16" r="3" /><circle cx="30" cy="16" r="3" />
        </svg>
      );
    case "tempo":
      return (
        <svg width="170" height="80" viewBox="0 0 52 24" {...common} aria-hidden="true">
          <rect x="2" y="2" width="46" height="14" rx="3" />
          <circle cx="14" cy="18" r="3" /><circle cx="38" cy="18" r="3" /><line x1="18" y1="2" x2="18" y2="16" /><line x1="32" y1="2" x2="32" y2="16" /><rect x="4" y="4" width="10" height="6" rx="1.5" />
        </svg>
      );
    default: // bus
      return (
        <svg width="180" height="84" viewBox="0 0 56 26" {...common} aria-hidden="true">
          <rect x="2" y="2" width="50" height="16" rx="3" />
          <circle cx="14" cy="20" r="3" /><circle cx="28" cy="20" r="3" /><circle cx="42" cy="20" r="3" /><line x1="16" y1="2" x2="16" y2="18" /><line x1="30" y1="2" x2="30" y2="18" /><rect x="4" y="4" width="8" height="6" rx="1.5" />
        </svg>
      );
  }
}

type Vehicle = {
  kind: string;
  name: string;
  descriptor: string;
  headline: string;
  intro: string;
  best: string[];
  apps: string[];
  vbg: string;
  stroke: string;
  vop: number;
  vlabel: string;
  vlabelColor: string;
  textured: boolean;
};

const vehicles: Vehicle[] = [
  {
    kind: "sedan", name: "Sedan", descriptor: "City, airport, intercity",
    headline: "Comfortable Everyday Mobility For Business Travel.",
    intro: "A clean, professional option for individual and small-group corporate travel. The everyday workhorse for city movement, airport runs and business meetings.",
    best: ["Corporate & executive travel", "Airport transfers", "Business meetings & client visits"],
    apps: ["Daily employee travel", "Point-to-point transfers", "City meeting circuits"],
    vbg: "var(--dark)", stroke: "#FFB000", vop: 1, vlabel: "01 · Popular", vlabelColor: "var(--bright-gold)", textured: true,
  },
  {
    kind: "suv", name: "SUV", descriptor: "Executive, outstation",
    headline: "More Space, Greater Flexibility, Confident Mobility.",
    intro: "Additional passenger and luggage space for executive travel, longer journeys and mixed road conditions across Odisha's corridors.",
    best: ["Executive & management travel", "Airport transfers with luggage", "Site visits & longer journeys"],
    apps: ["Industrial & project travel", "Intercity business travel", "Outstation mobility"],
    vbg: "var(--navy)", stroke: "#FFB000", vop: 1, vlabel: "02 · Flexible", vlabelColor: "var(--bright-gold)", textured: true,
  },
  {
    kind: "premium", name: "Premium", descriptor: "Senior leadership",
    headline: "A Refined Experience For Important Business Journeys.",
    intro: "An elevated travel experience for senior leadership, visiting clients and VIP guests, where the journey is part of the impression you make.",
    best: ["Senior executives & VIP guests", "Important meetings & conferences", "Client hospitality"],
    apps: ["Executive & VIP transportation", "Premium airport transfers", "Corporate events"],
    vbg: "var(--light-blue)", stroke: "#0B3B78", vop: 0.7, vlabel: "03 · Premium", vlabelColor: "var(--gold)", textured: false,
  },
  {
    kind: "exec", name: "Executive", descriptor: "VIP & leadership",
    headline: "Dedicated Comfort For Leadership Movement.",
    intro: "A professional, comfortable segment reserved for leadership and VIP travel, where a pre-scheduled, dependable ride matters before every important commitment.",
    best: ["Senior leadership travel", "Visiting executives", "Pre-scheduled corporate movement"],
    apps: ["Leadership mobility", "Board & client visits", "Dedicated executive deployment"],
    vbg: "var(--navy)", stroke: "#FFB000", vop: 1, vlabel: "04 · Leadership", vlabelColor: "var(--bright-gold)", textured: true,
  },
  {
    kind: "tempo", name: "Tempo Traveller", descriptor: "Group travel",
    headline: "Keep Your Team Together, Not Split Across Cars.",
    intro: "Comfortable group mobility for teams travelling together. Keep your group together, simplify coordination and reduce the need to manage multiple individual vehicles.",
    best: ["Corporate groups & project teams", "Airport group transfers", "Conferences & offsites"],
    apps: ["Team & event transportation", "Employee movement", "Hotel & venue transfers"],
    vbg: "var(--light-blue)", stroke: "#0B3B78", vop: 0.7, vlabel: "05 · Group", vlabelColor: "var(--gold)", textured: false,
  },
  {
    kind: "bus", name: "Bus & Group", descriptor: "Events, MICE, large teams",
    headline: "Move Larger Teams Efficiently, Together.",
    intro: "Coordinated large-group transportation for events, conferences and workforce movement, where one vehicle replaces a fleet of smaller cars.",
    best: ["Large corporate events", "Conferences & MICE", "Large group transfers"],
    apps: ["Employee & workforce transport", "Conference transfers", "Industrial workforce movement"],
    vbg: "var(--gold)", stroke: "#0B1F3A", vop: 0.75, vlabel: "06 · Large Scale", vlabelColor: "var(--dark-gold)", textured: false,
  },
];

function FleetTabs() {
  const [active, setActive] = useState(0);
  const d = vehicles[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.7fr] gap-6 items-center">
      {/* LEFT — tab list */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
        {vehicles.map((v, i) => {
          const on = i === active;
          return (
            <button
              key={v.kind}
              onClick={() => setActive(i)}
              className={`shrink-0 lg:shrink flex items-center gap-3.5 px-[18px] py-4 rounded-2xl border text-left transition-all duration-200 ${
                on ? "bg-[var(--navy)] border-[var(--navy)]" : "bg-white border-[var(--border)] hover:border-[var(--gold)]"
              }`}
            >
              <span className={`text-[13px] font-semibold w-[22px] ${on ? "text-[var(--bright-gold)]" : "text-[var(--muted-light)]"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className={`block text-[15px] font-semibold whitespace-nowrap lg:whitespace-normal ${on ? "text-white" : "text-[var(--dark)]"}`}>
                  {v.name}
                </span>
                <span className={`block text-[11.5px] ${on ? "text-[var(--soft-navy)]" : "text-[var(--muted-light)]"}`}>
                  {v.descriptor}
                </span>
              </span>
              <span className={`ml-auto hidden lg:inline ${on ? "text-[var(--bright-gold)] opacity-100" : "opacity-0"}`}>→</span>
            </button>
          );
        })}
      </div>

      {/* RIGHT — panel */}
      <div className="relative overflow-hidden bg-[var(--off-white)] border border-[var(--border)] rounded-[20px] p-6 md:p-9 min-h-[440px] flex flex-col md:flex-row gap-6 md:gap-8">
        {/* visual block */}
        <div
          className="relative overflow-hidden rounded-2xl w-full md:w-[230px] md:min-w-[230px] flex flex-col justify-center items-center p-6 min-h-[180px] md:min-h-0"
          style={{ background: d.vbg }}
        >
          {d.textured && <div className="absolute inset-0 pointer-events-none" style={dotStyle} />}
          <div key={active} className="relative z-10 text-center fleet-visual-anim">
            <VehicleSVG kind={d.kind} stroke={d.stroke} opacity={d.vop} />
            <div className="text-[11px] tracking-[1.5px] uppercase mt-[18px]" style={{ color: d.vlabelColor }}>
              {d.vlabel}
            </div>
          </div>
        </div>

        {/* content */}
        <div key={`c-${active}`} className="flex-1 fleet-panel-anim">
          <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-2.5">{d.name}</span>
          <h3 className="text-[24px] md:text-[26px] font-medium tracking-tight text-[var(--dark)] mb-3 leading-[1.2] max-w-[440px]">
            {d.headline}
          </h3>
          <p className="text-[var(--muted)] text-[13.5px] leading-[1.7] text-justify mb-[22px] max-w-[480px]">{d.intro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[22px]">
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-[18px]">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-3">Best Suited For</div>
              {d.best.map((b) => (
                <div key={b} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0">
                  <span className="text-[var(--gold)] shrink-0">→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-[18px]">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-3">Corporate Applications</div>
              {d.apps.map((a) => (
                <div key={a} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0">
                  <span className="text-[var(--gold)] shrink-0">→</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={waFor(d.name)}
            target="_blank"
            className="text-[13px] font-semibold text-[var(--navy)] border-b-[1.5px] border-[var(--gold)] pb-0.5 hover:text-[var(--gold)] transition-colors duration-200"
          >
            Enquire About This Vehicle →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .fleet-panel-anim { animation: fadeSwap 0.35s ease; }
        .fleet-visual-anim { animation: fadeSwap 0.35s ease; }
        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ---------- Comparison matrix ---------- */
const cmpCols = ["Sedan", "SUV", "Premium", "Executive", "Tempo", "Bus & Group"];
const cmpRows: { req: string; on: boolean[] }[] = [
  { req: "Individual travel", on: [true, true, true, true, false, false] },
  { req: "Executive travel", on: [true, true, true, true, false, false] },
  { req: "Airport transfers", on: [true, true, true, true, true, true] },
  { req: "Long-distance travel", on: [true, true, false, true, true, true] },
  { req: "Employee commute", on: [false, false, false, false, true, true] },
  { req: "Industrial / site visits", on: [false, true, false, true, true, false] },
  { req: "Corporate events", on: [false, false, true, true, true, true] },
  { req: "VIP / client transportation", on: [false, true, true, true, false, false] },
];

const guide = [
  { num: "01", title: "How Many People?", rows: ["1–4 → Sedan / SUV", "Small group → Tempo Traveller", "Larger workforce → Bus & Group"], navy: false },
  { num: "02", title: "What Type Of Journey?", rows: ["Executive → Premium / Executive", "Airport → Sedan / SUV / Tempo", "Event → multiple categories"], navy: false },
  { num: "03", title: "What's The Requirement?", rows: ["Daily → dedicated mobility", "Occasional → on-demand travel", "Large event → fleet deployment"], navy: true },
];

const solutions = [
  { label: "Dedicated Vehicles", desc: "Vehicles deployed for recurring corporate requirements.", navy: false },
  { label: "Employee Transportation", desc: "Support for employee commute and shift-based movement.", navy: false },
  { label: "Executive Mobility", desc: "Professional transportation for management and visiting clients.", navy: false },
  { label: "Event & Group Mobility", desc: "Coordinated transportation for conferences, events and large groups.", navy: true },
];

const steps = [
  { num: "01", title: "Tell Us Your Requirement", desc: "Share passenger count, route, schedule and purpose." },
  { num: "02", title: "We Recommend The Fleet", desc: "Our team matches your requirement with the right category." },
  { num: "03", title: "Deploy The Vehicles", desc: "Vehicles are scheduled according to your requirement." },
  { num: "04", title: "Keep Your Business Moving", desc: "Reliable transportation with ongoing operational support." },
];

const useCases = [
  { t: "Employee Commute", d: "Daily workforce movement." },
  { t: "Airport Transfers", d: "On-time pickup and drop." },
  { t: "Executive Travel", d: "Leadership mobility." },
  { t: "Client Visits", d: "Professional client movement." },
  { t: "Plant Visits", d: "Site and facility access." },
  { t: "Industrial Travel", d: "Corridor and project routes." },
  { t: "Corporate Events", d: "Coordinated event mobility." },
  { t: "Conferences", d: "Delegate transfers at scale." },
  { t: "Business Meetings", d: "City meeting circuits." },
  { t: "Intercity Travel", d: "Business travel between cities." },
  { t: "Project Teams", d: "Team movement to sites." },
  { t: "Guest Transportation", d: "Visitor and guest travel." },
];

const corridor = ["Bhubaneswar", "Cuttack", "Angul", "Talcher", "Kalinganagar", "Rourkela", "Jharsuguda"];

export default function FleetPageContent() {
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
              Our Fleet
            </span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[760px] mx-auto">
              A Fleet Built Around The Way Your Business Moves.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[580px] mx-auto mb-7">
              From compact corporate travel to employee transportation and large group movement, choose the vehicle category that fits your passengers, route and business requirements.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href={WA}
                target="_blank"
                className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
              >
                Discuss Your Requirement →
              </Link>
              <Link
                href="#fleet"
                className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200"
              >
                View Fleet
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FLEET TABS */}
      <section id="fleet" className="py-20 md:py-24 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">The Fleet</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">
                Find The Right Vehicle For The Journey.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.7]">
                Different journeys need different vehicles. Select a category to see what it&apos;s best suited for and how it fits into corporate mobility.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FleetTabs />
          </FadeIn>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Compare</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Choose The Right Fleet For Your Requirement.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex justify-center gap-5 mb-5 text-[12px] text-[var(--muted)]">
              <span className="flex items-center gap-1.5"><span className="text-[var(--gold)]">●</span> Suitable</span>
              <span className="flex items-center gap-1.5"><span className="text-[var(--border)]">—</span> Not typical</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[760px]">
                <caption className="sr-only">Which vehicle category suits each business requirement</caption>
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th scope="col" className="text-left px-4 py-3.5 text-[12px] uppercase tracking-[1px] text-[var(--muted)] font-semibold">Requirement</th>
                    {cmpCols.map((c) => (
                      <th key={c} scope="col" className="px-2.5 py-3.5 text-[13px] font-semibold text-[var(--dark)]">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {cmpRows.map((row, ri) => (
                    <tr key={row.req} className={`border-b border-[var(--border)] ${ri % 2 === 1 ? "bg-white" : ""}`}>
                      <th scope="row" className="text-left font-normal px-4 py-3 text-[var(--muted)]">{row.req}</th>
                      {row.on.map((yes, ci) => (
                        <td key={ci} className="text-center" aria-label={yes ? "Suitable" : "Not typical"}>
                          <span className={yes ? "text-[var(--gold)]" : "text-[var(--border)]"}>{yes ? "●" : "—"}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHICH VEHICLE */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Quick Guide</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">
                Not Sure Which Vehicle Fits Your Requirement?
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.7]">
                Tell us how many people are travelling, where they&apos;re going and what the journey involves. We&apos;ll recommend the right vehicle category for your requirement.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {guide.map((g, i) => (
              <FadeIn key={g.num} delay={i * 0.08}>
                {g.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-7 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[30px] font-semibold text-[var(--bright-gold)] mb-3.5">{g.num}</div>
                      <div className="text-[16px] font-semibold text-white mb-3.5">{g.title}</div>
                      {g.rows.map((r) => (
                        <div key={r} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0 text-white">
                          <span className="text-[var(--bright-gold)] shrink-0">→</span><span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-7 h-full">
                    <div className="text-[30px] font-semibold text-[var(--gold)] mb-3.5">{g.num}</div>
                    <div className="text-[16px] font-semibold mb-3.5">{g.title}</div>
                    {g.rows.map((r) => (
                      <div key={r} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0">
                        <span className="text-[var(--gold)] shrink-0">→</span><span>{r}</span>
                      </div>
                    ))}
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE FLEET SOLUTIONS */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Beyond Bookings</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                More Than A Vehicle. A Fleet Solution.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s, i) => (
              <FadeIn key={s.label} delay={(i % 4) * 0.06}>
                {s.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-[26px] h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--bright-gold)] font-bold mb-3">{s.label}</div>
                      <p className="text-white text-[13px] leading-[1.6]">{s.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-[26px] h-full">
                    <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-3">{s.label}</div>
                    <p className="text-[var(--dark)] text-[13px] leading-[1.6]">{s.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <p className="text-center mt-7 text-[13.5px] text-[var(--muted)]">
              Explore our{" "}
              <Link href="/services" className="text-[var(--navy)] font-semibold border-b-[1.5px] border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                corporate mobility services
              </Link>{" "}
              and{" "}
              <Link href="/industries" className="text-[var(--navy)] font-semibold border-b-[1.5px] border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                industry solutions
              </Link>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">The Process</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                From Requirement To Road.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* USE CASES */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Use Cases</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                One Fleet. Many Business Journeys.
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {useCases.map((u, i) => (
              <FadeIn key={u.t} delay={(i % 4) * 0.05}>
                <div className="bg-white border border-[var(--border)] rounded-[14px] p-[18px] h-full">
                  <div className="text-[14px] font-semibold mb-1">{u.t}</div>
                  <div className="text-[12px] text-[var(--muted)] leading-[1.5]">{u.d}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ODISHA CORRIDOR */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Regional Reach</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">
                Corporate Mobility Across Odisha.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.7]">
                From corporate offices in Bhubaneswar to industrial and project locations across Odisha, ConnectCabs provides fleet options for everyday business travel, employee transportation, executive movement and group mobility. Fleet availability can be arranged based on requirement and location.
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
                      {i < corridor.length - 1 && <span className="md:hidden absolute left-[6px] top-5 h-full w-px bg-white/25" />}
                      <span
                        className={`rounded-full shrink-0 md:mx-auto md:mb-2.5 relative z-10 ${endpoint ? "w-[14px] h-[14px] bg-[var(--bright-gold)]" : "w-[11px] h-[11px] bg-white"}`}
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
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Let&apos;s Talk</span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">
            Let&apos;s Match Your Business With The Right Fleet.
          </h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[560px] mx-auto mb-6 px-6">
            Whether you need one executive vehicle, recurring employee transportation or coordinated fleet deployment for an event, tell us what you need and we&apos;ll help you choose the right solution.
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
