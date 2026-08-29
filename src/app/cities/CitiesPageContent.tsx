"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20my%20city.";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

const cities = [
  {
    name: "Bhubaneswar",
    tag: "Headquarters",
    tagStyle: "bg-[#FFF4DB] text-[#633806]",
    desc: "Full-service corporate mobility. Employee transportation, executive mobility, airport and railway transfers, managed fleet and MICE logistics.",
  },
  {
    name: "Cuttack",
    tag: "Active",
    tagStyle: "bg-[#E1F5EE] text-[#085041]",
    desc: "Employee transportation, intercity travel and executive mobility for corporate clients operating in and around Cuttack.",
  },
  {
    name: "Puri",
    tag: "Active",
    tagStyle: "bg-[#E1F5EE] text-[#085041]",
    desc: "Business travel, MICE logistics and executive transfers for corporate offsites, conferences and events.",
  },
  {
    name: "Guwahati",
    tag: "Branch Office",
    tagStyle: "bg-[#FFF4DB] text-[#633806]",
    desc: "Full-service operations for corporate clients across Assam and the wider Northeast India region.",
  },
];

const corridorCities = ["Kalinganagar", "Angul", "Jharsuguda", "Rourkela", "Paradip"];

const faqs = [
  { q: "Does ConnectCabs operate outside Bhubaneswar?", a: "Yes. We currently serve Bhubaneswar, Cuttack, Puri and Guwahati, with a dedicated branch office supporting our Guwahati and Northeast India operations." },
  { q: "Can ConnectCabs support intercity corporate travel?", a: "Yes, intercity travel between our service cities is part of our managed fleet and business travel offering." },
  { q: "Is ConnectCabs expanding to new cities?", a: "Yes. As our enterprise clients grow across Odisha's industrial corridor, we are actively working to extend coverage to locations like Kalinganagar, Angul, Jharsuguda, Rourkela and Paradip." },
  { q: "How do I request service in a new city?", a: "Reach out to our team with your requirement and locations. We evaluate new city rollouts based on enterprise client demand." },
];

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-[720px] mx-auto mb-11">
      <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">{eyebrow}</span>
      <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">{title}</h2>
      {sub && <p className="text-[var(--muted)] text-[14.5px] leading-[1.7] mt-3.5">{sub}</p>}
    </div>
  );
}

export default function CitiesPageContent() {
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
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Cities We Serve</span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[720px] mx-auto">
              Corporate Mobility Across Odisha and Beyond.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[600px] mx-auto mb-7">
              From Bhubaneswar to Guwahati, ConnectCabs runs managed fleet operations wherever your business needs us, with the same standards of safety, reliability and reporting in every city.
            </p>
            <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Talk to Our Team →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CITY GRID */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <SectionHead
              eyebrow="Where We Operate"
              title="Our Current Service Cities."
              sub="Every city runs on the same technology, safety and account management standards, so your experience never changes wherever you are."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {cities.map((c, i) => (
              <FadeIn key={c.name} delay={(i % 2) * 0.06}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[18px] font-semibold">{c.name}</div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${c.tagStyle}`}>{c.tag}</span>
                  </div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6] text-justify">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANSION */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-[20px] p-9 md:p-12 text-center max-w-[900px] mx-auto">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-3">Growing With Odisha</span>
                <h2 className="text-[22px] md:text-[26px] font-medium tracking-tight text-white mb-3.5 leading-[1.2]">
                  Expanding Across Odisha&apos;s Industrial Corridor.
                </h2>
                <p className="text-[var(--soft-navy)] text-[14px] leading-[1.7] max-w-[600px] mx-auto mb-6">
                  As our enterprise clients grow across manufacturing, mining and government hubs, we are actively working to extend coverage to the locations below.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {corridorCities.map((t) => (
                    <span key={t} className="border border-white/20 rounded-full px-3.5 py-1.5 text-[12px] text-white">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Cities FAQ" title="Common Questions About Our Coverage." /></FadeIn>
          <div className="max-w-[720px] mx-auto">
            {faqs.map((f, i) => (
              <FadeIn key={f.q} delay={(i % 3) * 0.04}>
                <div className={`py-4 border-t border-[var(--border)] ${i === faqs.length - 1 ? "border-b" : ""}`}>
                  <div className="text-[14px] font-semibold mb-1">{f.q}</div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6]">{f.a}</p>
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
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6 max-w-[620px] mx-auto leading-[1.2]">
            Don&apos;t See Your City? Let&apos;s Talk Anyway.
          </h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            Tell us where your organization needs corporate mobility, and we&apos;ll work out how ConnectCabs can support it.
          </p>
          <div className="relative z-10 px-6">
            <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Talk to Our Team →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
