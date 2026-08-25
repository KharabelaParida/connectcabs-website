"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const glance = [
  { num: "2026", label: "Founded" },
  { num: "2 cities", label: "Bhubaneswar & Guwahati" },
  { num: "43+ yrs", label: "Combined leadership experience" },
  { num: "24x7", label: "Customer support" },
];

const values = [
  "Reliability, first and every time",
  "Safety as a non-negotiable",
  "Transparent, contract-based pricing",
  "Long-term partnership over transactions",
];

const journey = [
  { title: "Company founded", desc: "Registered in Bhubaneswar, Odisha" },
  { title: "Platform built", desc: "Corporate website and brand identity live" },
  { title: "First clients onboarded", desc: "Operations began in Bhubaneswar and Guwahati" },
  { title: "Today", desc: "Scaling across Odisha's industrial corridor" },
];

const leadership = [
  {
    initials: "CB",
    name: "Chandramani Behera",
    role: "Director, Operations",
    bioParagraphs: [
      "MBA in Operations from NMIMS, and an alumnus of the Indian Institute of Management, Visakhapatnam.",
      "Over 21 years of experience in customer service, supply chain management, transportation and integrated logistics operations, with deep expertise in coordinating fleet services, optimising supply chains and ensuring high levels of customer satisfaction.",
      "With strong leadership and operational planning skills, he has successfully handled large-scale transportation activities, vendor coordination and service delivery management across complex, multi-location operations.",
    ],
    tone: "navy" as const,
    photo: "/team/chandramani-behera.jpg",
    linkedin: "https://linkedin.com/in/",
  },
  {
    initials: "PM",
    name: "Prakash Kumar Mahali",
    role: "Director, Technology",
    bioParagraphs: [
      "MCA from Sambalpur University, and an alumnus of the Indian Institute of Information Technology, Bangalore.",
      "Over 22 years of experience in client management in the US, information technology, enterprise software development and digital product innovation, with extensive expertise in software architecture, product engineering and technology strategy.",
      "With deep technical knowledge and strategic thinking, he has successfully led teams in building scalable and innovative products that connect technology directly to business outcomes.",
    ],
    tone: "gold" as const,
    photo: "/team/prakash-kumar-mahali.jpg",
    linkedin: "https://linkedin.com/in/",
  },
];

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.45-1.49-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
    </svg>
  );
}

export default function AboutPageContent() {
  return (
    <>
      {/* HERO — navy-to-white diagonal gradient with dot-grid texture, centered */}
      <section className="relative overflow-hidden text-center pt-40 pb-24 px-6"
        style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy) 42%, #ffffff 88%)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 80%)",
            maskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 80%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">
              About ConnectCabs
            </span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[760px] mx-auto">
              Corporate Travel Management, Built For Bhubaneswar And Beyond.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[560px] mx-auto">
              ConnectCabs Private Limited is a Bhubaneswar-based corporate mobility company helping enterprises across Odisha move their people with reliability, safety and full visibility.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* STAT STRIP — bento cards overlapping the hero gradient to bridge into the page */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {glance.map((g, i) => (
            <FadeIn key={g.label} delay={i * 0.05}>
              <div className="bg-white rounded-2xl px-5 py-5 shadow-[0_16px_40px_rgba(11,31,58,0.12)] h-full">
                <div className="text-[20px] md:text-[22px] font-semibold text-[var(--dark)]">{g.num}</div>
                <div className="text-[12px] text-[var(--muted)] mt-1">{g.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-14 items-center">
          <div>
            <FadeIn>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">
                Our Story
              </span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.15]">
                Built Around The Way Odisha Moves For Work.
              </h2>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify mb-4">
                ConnectCabs started in Bhubaneswar with a simple observation. Enterprises across manufacturing, mining, IT and government in Odisha were managing employee and executive travel through scattered local operators, phone calls and spreadsheets, with no single partner accountable for safety, punctuality or reporting.
              </p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify mb-4">
                We set out to change that. By bringing owned vehicles, verified Chauffeurs, a trusted partner fleet network and a technology layer together, we built a corporate mobility service designed specifically for the way businesses in Odisha&apos;s industrial corridor actually operate.
              </p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify mb-4">
                Unlike national platforms managing Odisha from a call centre elsewhere, ConnectCabs is based here. We know Kalinganagar&apos;s plant access routes and Angul&apos;s site timings because we operate in Odisha, not just for it.
              </p>
              <p className="text-[var(--muted)] text-[14.5px] leading-[1.75] text-justify">
                Today, we are active in Bhubaneswar and Guwahati, already serving clients with employee transportation, executive mobility and airport transfers. Every trip is tracked, every Chauffeur is verified, and every client gets the visibility their procurement and HR teams expect.
              </p>
            </FadeIn>
          </div>

          {/* JOURNEY CARD — vertically centered against the story column */}
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-7 md:p-8 text-white">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative z-10">
                <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-medium mb-6 uppercase">
                  Our Journey
                </div>
                <div className="flex flex-col">
                  {journey.map((j, i) => (
                    <div key={j.title} className="flex gap-3.5 relative pb-5 last:pb-0">
                      {i < journey.length - 1 && (
                        <span className="absolute left-[4px] top-4 bottom-0 w-px bg-white/15" />
                      )}
                      <span className="w-[10px] h-[10px] rounded-full bg-[var(--bright-gold)] mt-1 shrink-0 relative z-10" />
                      <div>
                        <div className="text-[13px] font-semibold">{j.title}</div>
                        <div className="text-[11.5px] text-[var(--muted-light)]">{j.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <FadeIn>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-7 h-full">
              <div className="text-[var(--gold)] text-[11px] tracking-[1.5px] font-medium mb-3 uppercase">Vision</div>
              <p className="text-[var(--dark)] text-[14.5px] leading-[1.65] text-justify">
                To build India&apos;s most reliable and intelligent corporate mobility ecosystem, one city and one business at a time.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-7 h-full">
              <div className="text-[var(--gold)] text-[11px] tracking-[1.5px] font-medium mb-3 uppercase">Mission</div>
              <p className="text-[var(--dark)] text-[14.5px] leading-[1.65] text-justify">
                To help organisations move their people effortlessly through technology, safety and dedicated service, on every trip, every day.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-7 h-full">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
              />
              <div className="relative z-10">
                <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-medium mb-3 uppercase">Our Values</div>
                <ul className="text-white text-[13.5px] leading-[1.9]">
                  {values.map((v) => (
                    <li key={v} className="flex gap-2">
                      <span className="text-[var(--bright-gold)]">—</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LEADERSHIP — Option 3: big photo block, bare LinkedIn icon overlay, expanded bio */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3 text-center">
              Leadership
            </span>
            <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-12 leading-[1.15] text-center">
              The Team Behind ConnectCabs.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col h-full">
                  {/* Photo block — Option B: offset circular photo, name/role inside block */}
                  <div
                    className="relative h-[150px] flex items-center gap-4 px-6"
                    style={{ background: p.tone === "navy" ? "var(--light-blue)" : "var(--light-gold)" }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage:
                          p.tone === "navy"
                            ? "radial-gradient(rgba(11,59,120,0.08) 1px, transparent 1px)"
                            : "radial-gradient(rgba(133,79,11,0.08) 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                      }}
                    />
                    <div className="relative z-10 w-[76px] h-[76px] rounded-full overflow-hidden border-[3px] border-white shadow-[0_4px_14px_rgba(11,31,58,0.12)] shrink-0 flex items-center justify-center bg-white">
                      {/* Fallback initials — hidden by default, only shown if the photo fails to load */}
                      <span
                        className={`fallback-initials text-[18px] font-semibold ${
                          p.tone === "navy" ? "text-[var(--navy)]" : "text-[var(--dark-gold)]"
                        }`}
                        style={{ display: "none" }}
                      >
                        {p.initials}
                      </span>
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.previousElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="text-[15px] font-semibold text-[var(--dark)]">{p.name}</div>
                      <div className="text-[11px] tracking-[1px] uppercase font-bold text-[var(--gold)]">{p.role}</div>
                    </div>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on LinkedIn`}
                      className="absolute bottom-3.5 right-4 z-10 text-[var(--dark)] hover:text-[var(--gold)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  {/* Bio block */}
                  <div className="p-6 md:p-7 pt-4">
                    {p.bioParagraphs.map((para, idx) => (
                      <p
                        key={idx}
                        className="text-[var(--muted)] text-[12.5px] md:text-[13px] leading-[1.7] text-justify mb-2.5 last:mb-0"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — echoes hero texture for bookend consistency */}
      <section className="relative overflow-hidden py-16 bg-[var(--dark)] text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">
            Ready When You Are
          </span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-5 px-6">
            Let&apos;s Talk About Your Fleet.
          </h2>
          <Link
            href="https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            className="relative z-10 bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
          >
            Chat on WhatsApp →
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
