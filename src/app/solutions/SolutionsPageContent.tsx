"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20mobility%20engagement%20for%20my%20organisation.";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

const pillar = [
  { label: "Services", desc: "What we provide", href: "/services", active: false },
  { label: "Solutions", desc: "How you engage us", href: "/solutions", active: true },
  { label: "Industries", desc: "Who we serve", href: "/industries", active: false },
  { label: "Fleet", desc: "What we deploy", href: "/fleet", active: false },
  { label: "Technology", desc: "How we make it smarter", href: "/technology", active: false },
];

type Model = {
  name: string;
  who: string;
  requirement: string;
  engages: string;
  services: string[];
  fleet: string[];
  tech: string;
  outcome: string;
};

const models: Model[] = [
  {
    name: "Managed Employee Transport Program",
    who: "HR & Admin teams managing daily workforce commute across shifts and sites.",
    requirement: "Reliable, safe daily transportation for employees across shifts and multiple locations, with clear accountability and reporting.",
    engages: "A dedicated program with planned routes, fixed pickup points, allocated vehicles and a named account manager, run on monthly corporate billing.",
    services: ["Employee Transportation", "Airport Transfers"],
    fleet: ["Tempo Traveller", "Bus & Group", "Sedan", "SUV"],
    tech: "GPS tracking, route planning and MIS reporting on utilisation and on-time performance.",
    outcome: "Employees reach work on time while HR gains accountability and one consolidated report instead of scattered vendors.",
  },
  {
    name: "Dedicated Corporate Mobility",
    who: "Admin & Facility managers needing always-available vehicles for the business.",
    requirement: "On-call corporate vehicles for day-to-day business travel, without booking each trip separately.",
    engages: "Vehicles and verified Chauffeurs dedicated to your account on a monthly engagement, available for business travel as needed.",
    services: ["Corporate Cab Services", "Business Travel"],
    fleet: ["Sedan", "SUV"],
    tech: "Digital booking, trip logs and monthly MIS on usage.",
    outcome: "Business travel is handled without ad-hoc booking, with predictable cost and dedicated availability.",
  },
  {
    name: "Dedicated Executive Mobility",
    who: "Leadership offices, executive assistants and corporate travel managers.",
    requirement: "Premium, dependable, pre-scheduled travel for senior leadership and visiting guests.",
    engages: "Assigned premium and executive vehicles with verified Chauffeurs, pre-scheduled through a named coordinator.",
    services: ["Executive Transportation", "Airport Transfers"],
    fleet: ["Premium", "Executive", "SUV"],
    tech: "Pre-scheduling, trip monitoring and discreet coordination.",
    outcome: "Leadership travel is consistent, punctual and represents the company well on every trip.",
  },
  {
    name: "Industrial & Project Mobility Program",
    who: "Plant, project and site managers in manufacturing, mining and infrastructure.",
    requirement: "Reliable transport across remote sites, project locations and industrial corridors, with safety compliance.",
    engages: "Dedicated vehicles deployed to site requirements, with crew and staff movement on scheduled, SOP-driven plans.",
    services: ["Employee Transportation", "Corporate Cab Services", "Intercity Travel"],
    fleet: ["SUV", "Tempo Traveller", "Bus & Group"],
    tech: "GPS tracking, route compliance and site-wise MIS reporting.",
    outcome: "People and teams move reliably across sites, operations stay on schedule and safety is documented.",
  },
  {
    name: "Event & Group Mobility Program",
    who: "Event teams, marketing and corporate travel managers running MICE and offsites.",
    requirement: "Coordinated transportation for delegates arriving in waves, across airport, hotel and venue.",
    engages: "A single coordinated plan and account manager covering airport, hotel, venue and return transfers, scaled to the event.",
    services: ["Event Transportation", "Airport Transfers", "Group Transportation"],
    fleet: ["Sedan", "SUV", "Tempo Traveller", "Bus & Group"],
    tech: "Central dispatch, live coordination and per-event reporting.",
    outcome: "The event's mobility runs on one plan, so your team runs the event, not the transport.",
  },
  {
    name: "Multi-City Corporate Mobility",
    who: "Companies with teams or offices across multiple cities.",
    requirement: "A consistent corporate transportation standard across multiple cities and locations.",
    engages: "One partner, one standard and one point of contact across cities, with consolidated billing and reporting.",
    services: ["Corporate Cab Services", "Business Travel", "Intercity Travel", "Airport Transfers"],
    fleet: ["Sedan", "SUV", "Tempo Traveller"],
    tech: "Unified booking and consolidated multi-city MIS.",
    outcome: "The same service standard everywhere, with one consolidated view instead of city-by-city vendors.",
  },
  {
    name: "End-to-End Corporate Travel Desk",
    who: "Corporate travel managers and admin teams wanting travel handled as a managed service.",
    requirement: "A single desk to manage ground transportation alongside broader business travel needs.",
    engages: "ConnectCabs acts as your managed ground-mobility desk, coordinating transportation end to end with dedicated support.",
    services: ["All Corporate Services", "Business Travel Management"],
    fleet: ["Full fleet, as required"],
    tech: "Booking, tracking, consolidated MIS and dedicated support.",
    outcome: "Ground mobility runs as a managed service, so your team delegates the coordination entirely.",
  },
];

const roles = [
  { role: "HR Head", need: "Daily workforce commute, safely and on time.", model: "Managed Employee Transport Program", navy: false },
  { role: "Admin Manager", need: "Always-available vehicles for the business.", model: "Dedicated Corporate Mobility", navy: false },
  { role: "Facility Manager", need: "Transport across sites and project locations.", model: "Industrial & Project Mobility", navy: false },
  { role: "Procurement Manager", need: "One standard and one view across cities.", model: "Multi-City Corporate Mobility", navy: false },
  { role: "Corporate Travel Manager", need: "Travel handled as a managed service.", model: "End-to-End Corporate Travel Desk", navy: false },
  { role: "Leadership Office", need: "Premium, pre-scheduled executive travel.", model: "Dedicated Executive Mobility", navy: true },
];

const process = [
  { num: "01", title: "Assess", desc: "We understand your requirement, routes and scale." },
  { num: "02", title: "Design", desc: "We shape the right engagement model for you." },
  { num: "03", title: "Deploy", desc: "Vehicles, Chauffeurs and routes are put in place." },
  { num: "04", title: "Manage", desc: "Dedicated support and centralised dispatch run it." },
  { num: "05", title: "Report", desc: "Consolidated MIS gives you full visibility." },
];

function fieldLabel(text: string) {
  return <div className="text-[10.5px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-1.5">{text}</div>;
}

function ChipRow({ items, links }: { items: string[]; links: "services" | "fleet" }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {items.map((c) => {
        const chip = (
          <span className="border border-[var(--border)] rounded-full px-3 py-[5px] text-[11.5px] font-semibold text-[var(--dark)] bg-white inline-block">
            {c}
          </span>
        );
        // Chips link to the relevant page (Services / Fleet)
        return (
          <Link key={c} href={links === "services" ? "/services" : "/fleet"} className="hover:opacity-80 transition-opacity">
            {chip}
          </Link>
        );
      })}
    </div>
  );
}

function EngagementModels() {
  const [active, setActive] = useState(0);
  const d = models[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.75fr] gap-6 items-center">
      {/* LEFT — model selector */}
      <div className="flex lg:flex-col gap-6 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
        {models.map((m, i) => {
          const on = i === active;
          return (
            <button
              key={m.name}
              onClick={() => setActive(i)}
              className={`shrink-0 lg:shrink flex items-center gap-3 px-4 py-[15px] rounded-[14px] border text-left transition-all duration-200 ${
                on ? "bg-[var(--navy)] border-[var(--navy)]" : "bg-white border-[var(--border)] hover:border-[var(--gold)]"
              }`}
            >
              <span className={`text-[12px] font-semibold w-5 shrink-0 ${on ? "text-[var(--bright-gold)]" : "text-[var(--muted-light)]"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-[13.5px] font-semibold leading-[1.25] whitespace-nowrap lg:whitespace-normal ${on ? "text-white" : "text-[var(--dark)]"}`}>
                {m.name}
              </span>
              <span className={`ml-auto hidden lg:inline ${on ? "text-[var(--bright-gold)] opacity-100" : "opacity-0"}`}>→</span>
            </button>
          );
        })}
      </div>

      {/* RIGHT — engagement spec panel */}
      <div className="relative overflow-hidden bg-[var(--off-white)] border border-[var(--border)] rounded-[20px] p-6 md:p-8 min-h-[560px]">
        <div key={active} className="sol-panel-anim">
          <div className="mb-[22px]">
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-2">Engagement Model</span>
            <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight text-[var(--dark)] leading-[1.2] max-w-[440px]">{d.name}</h3>
          </div>

          <div className="mb-[18px]">
            {fieldLabel("Who It's For")}
            <div className="text-[13.5px] leading-[1.6] text-[var(--muted)]">{d.who}</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-4">
              {fieldLabel("Business Requirement")}
              <div className="text-[13.5px] leading-[1.6] text-[var(--muted)] text-justify">{d.requirement}</div>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-4">
              {fieldLabel("How ConnectCabs Engages")}
              <div className="text-[13.5px] leading-[1.6] text-[var(--muted)] text-justify">{d.engages}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-4">
              {fieldLabel("Services Involved")}
              <ChipRow items={d.services} links="services" />
            </div>
            <div className="bg-white border border-[var(--border)] rounded-[14px] p-4">
              {fieldLabel("Fleet Involved")}
              <ChipRow items={d.fleet} links="fleet" />
            </div>
          </div>

          <Link href="/technology" className="block bg-white border border-[var(--border)] rounded-[14px] p-4 mb-[18px] hover:border-[var(--gold)] transition-colors">
            {fieldLabel("Technology & Management Layer")}
            <div className="text-[13.5px] leading-[1.6] text-[var(--muted)]">{d.tech}</div>
          </Link>

          <div className="relative overflow-hidden bg-[var(--navy)] rounded-[14px] p-[18px]">
            <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
            <div className="relative z-10">
              <div className="text-[10.5px] tracking-[1.5px] uppercase text-[var(--bright-gold)] font-bold mb-1.5">Intended Business Outcome</div>
              <div className="text-[14px] leading-[1.6] text-white">{d.outcome}</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sol-panel-anim { animation: fadeSwap 0.35s ease; }
        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function SolutionsPageContent() {
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
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Solutions</span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[760px] mx-auto">
              Mobility Solutions Designed Around Your Business.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[600px] mx-auto mb-7">
              Every organization manages transportation differently. Our solutions are corporate mobility engagement models, structured ways to work with ConnectCabs to manage a specific transportation requirement, end to end.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="#models" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
                Explore Engagement Models →
              </Link>
              <Link href={WA} target="_blank" className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200">
                Talk to Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DISTINCTION STRIP */}
      <section className="relative z-20 -mt-10 px-6">
        <FadeIn>
          <div className="max-w-[1200px] mx-auto bg-white rounded-[18px] shadow-[0_16px_40px_rgba(11,31,58,0.12)] grid grid-cols-2 md:grid-cols-5 overflow-hidden">
            {pillar.map((p, i) => {
              const inner = (
                <>
                  <div className={`text-[11px] tracking-[1px] uppercase font-bold mb-1 ${p.active ? "text-[var(--dark-gold)]" : "text-[var(--muted-light)]"}`}>{p.label}</div>
                  <div className={`text-[12.5px] ${p.active ? "text-[var(--dark)] font-medium" : "text-[var(--muted)]"}`}>{p.desc}</div>
                </>
              );
              const cls = `p-5 ${i < pillar.length - 1 ? "border-b md:border-b-0 md:border-r border-[var(--border)]" : ""} ${p.active ? "bg-[var(--light-gold)]" : ""}`;
              return p.active ? (
                <div key={p.label} className={cls}>{inner}</div>
              ) : (
                <Link key={p.label} href={p.href} className={`${cls} hover:bg-[var(--off-white)] transition-colors`}>{inner}</Link>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section id="models" className="py-20 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Engagement Models</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">
                Find The Engagement Model That Fits Your Requirement.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <EngagementModels />
          </FadeIn>
        </div>
      </section>

      {/* THE RIGHT MODEL FOR YOUR ROLE */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Where Do You Fit?</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">The Right Model For Your Role.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((r, i) => (
              <FadeIn key={r.role} delay={(i % 3) * 0.06}>
                {r.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-6 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[15px] font-semibold text-white mb-1">{r.role}</div>
                      <div className="text-[12.5px] text-[var(--soft-navy)] mb-3">{r.need}</div>
                      <div className="text-[11px] text-[var(--bright-gold)] font-bold tracking-[0.5px]">→ {r.model}</div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                    <div className="text-[15px] font-semibold mb-1">{r.role}</div>
                    <div className="text-[12.5px] text-[var(--muted)] mb-3">{r.need}</div>
                    <div className="text-[11px] text-[var(--gold)] font-bold tracking-[0.5px]">→ {r.model}</div>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW ENGAGEMENT WORKS */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-12">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">How Engagement Works</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">From Requirement To Managed Mobility.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {process.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.06}>
                <div>
                  <div className="text-[32px] font-semibold text-[var(--gold)] mb-2.5">{s.num}</div>
                  <div className="text-[14px] font-semibold mb-1.5">{s.title}</div>
                  <p className="text-[12px] text-[var(--muted)] leading-[1.6]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[72px] bg-[var(--dark)] text-center">
        <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Let&apos;s Talk</span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">Not Sure Which Model Fits? Let&apos;s Work It Out Together.</h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            Tell us how your organization moves and we&apos;ll help you shape the right corporate mobility engagement.
          </p>
          <div className="relative z-10 flex gap-3 justify-center flex-wrap px-6">
            <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Discuss Your Requirement →
            </Link>
            <Link href="/contact" className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200">
              Contact ConnectCabs
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
