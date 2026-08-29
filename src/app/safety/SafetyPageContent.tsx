"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20discuss%20a%20safer%20corporate%20mobility%20program%20for%20my%20organisation.";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

const layers = ["Driver", "Vehicle", "Journey", "Passenger", "Technology", "Operations"];

const driverCards = [
  { title: "Verified", desc: <>Driver documentation and identity checks, with valid <strong className="text-[var(--dark)] font-semibold">[driving licence / documents]</strong>.</> },
  { title: "Trained", desc: <>Operational expectations, professional conduct and passenger-handling standards.</> },
  { title: "Accountable", desc: <>Driver and trip information maintained for operational visibility on every journey.</> },
];

const vehicleCards = [
  { title: "Preventive Maintenance", desc: <>Periodic servicing and checks, with maintenance records kept for each vehicle.</> },
  { title: "Document Compliance", desc: <>Valid <strong className="text-[var(--dark)] font-semibold">[fitness, permit, PUC, insurance]</strong> maintained for every vehicle.</> },
  { title: "Road-Ready Condition", desc: <>Tyres, brakes, lights and essential equipment checked; clean and ready for duty.</> },
];

const monitorCards = [
  { title: "Live GPS Tracking", desc: "Real-time vehicle location and journey progress." },
  { title: "Route Monitoring", desc: "Planned journeys and deviations monitored." },
  { title: "Real-Time Dashboards", desc: "Centralized visibility for authorized teams." },
  { title: "Trip Records", desc: "Journey information kept for operational review." },
];

const employeeCards = [
  { title: "Scheduled Pickup & Drop", desc: "Shift-based transportation coordinated around your schedules." },
  { title: "Authorized Passengers", desc: "Passenger information maintained for managed employee transport." },
  { title: "Trip Monitoring", desc: "Real-time operational visibility of employee journeys." },
  { title: "Escalation Procedures", desc: "Defined escalation paths when a trip needs attention." },
  { title: "Emergency Contact", desc: "Contact processes in place for urgent situations." },
  { title: "Shift Coordination", desc: "Transportation aligned to shift timings and locations." },
];

const execTags = ["Professional Drivers", "Privacy", "Punctuality", "Central Coordination"];

const techCaps = ["Live GPS Tracking", "Smart Routing", "Real-Time Dashboards", "Trip Records"];

const incident = [
  { num: "01", title: "Identify", desc: "Trip or incident information captured through operational channels.", navy: false },
  { num: "02", title: "Escalate", desc: "The appropriate operations team is notified.", navy: false },
  { num: "03", title: "Coordinate", desc: "We coordinate with the driver, passenger and relevant stakeholders.", navy: false },
  { num: "04", title: "Record", desc: "The incident is documented for review and follow-up.", navy: true },
];

const accountability = ["Centralized Visibility", "Operational Records", "Reporting", "Escalation", "Fleet & Driver Info", "Management Dashboards"];

const faqs = [
  { q: "How does ConnectCabs monitor vehicles during a trip?", a: "Through live GPS tracking and route monitoring, with real-time dashboards for authorized teams." },
  { q: "How are drivers managed?", a: "Drivers are verified with valid documentation and held to operational and conduct standards, with trip information maintained." },
  { q: "Do you provide live GPS tracking?", a: "Yes, real-time location and journey progress are available to authorized corporate teams." },
  { q: "What happens if there is a vehicle breakdown?", a: "Our escalation and coordination process is followed to arrange support and minimise disruption." },
  { q: "Can corporate clients access trip information and reports?", a: "Yes, consolidated records and reporting are available per account." },
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

export default function SafetyPageContent() {
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
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Safety &amp; Responsibility</span>
            <h1 className="text-[32px] md:text-[46px] font-medium tracking-tight text-white mb-5 leading-[1.15] max-w-[720px] mx-auto">
              Every Journey Managed With Safety in Mind.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15.5px] leading-[1.7] max-w-[600px] mx-auto mb-7">
              ConnectCabs builds safety into the way corporate transportation is planned, operated and monitored, from vehicle readiness and driver standards to live trip visibility and incident response.
            </p>
            <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Talk to Our Team →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* SAFETY OPERATING SYSTEM */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <SectionHead
              eyebrow="Safety Isn't One Feature"
              title="Safety Is an Operating System, Not a Checkbox."
              sub="Corporate mobility runs on multiple layers working together. Each one is managed, not assumed."
            />
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[900px] mx-auto">
            {layers.map((l, i) => (
              <FadeIn key={l} delay={(i % 4) * 0.05}>
                <div className="border border-[var(--border)] rounded-2xl p-5 h-full">
                  <div className="text-[11px] text-[var(--gold)] font-bold mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-[14px] font-semibold">{l}</div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.1} className="col-span-2">
              <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-5 h-full">
                <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                <div className="relative z-10">
                  <div className="text-[11px] text-[var(--bright-gold)] font-bold mb-2">07</div>
                  <div className="text-[14px] font-semibold text-white">Emergency Response</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DRIVER SAFETY */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Driver Safety & Standards" title="Responsible Drivers. Accountable Operations." /></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {driverCards.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                  <div className="text-[15px] font-semibold mb-2">{c.title}</div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6] text-justify">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE SAFETY */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Vehicle Safety" title="Vehicles Ready for the Road." /></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vehicleCards.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="border border-[var(--border)] rounded-2xl p-6 h-full">
                  <div className="text-[14px] font-semibold mb-2">{c.title}</div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6] text-justify">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <p className="text-center text-[12px] text-[var(--muted-light)] max-w-[560px] mx-auto mt-6 leading-[1.6]">
              We are developing technology-enabled ways to identify maintenance needs before they become operational disruptions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LIVE TRIP MONITORING */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Live Trip Monitoring" title="Know Where Every Journey Is." /></FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center max-w-[980px] mx-auto">
            <FadeIn>
              <div className="relative overflow-hidden bg-[var(--dark)] rounded-[20px] p-7">
                <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                <div className="relative z-10 bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[12px] font-semibold">Live Tracking</div>
                    <div className="bg-[var(--light-blue)] rounded-[5px] px-2 py-[3px] text-[9px] text-[var(--navy)] font-semibold">● Live</div>
                  </div>
                  <div className="bg-[var(--light-blue)] rounded-lg h-[100px] relative overflow-hidden">
                    <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M18,84 C80,50 140,70 200,32 S280,24 288,16" fill="none" stroke="#FFB000" strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="18" cy="84" r="5" fill="#0B3B78" /><circle cx="288" cy="16" r="5" fill="#FFB000" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {monitorCards.map((c) => (
                  <div key={c.title} className="bg-white border border-[var(--border)] rounded-[14px] p-4">
                    <div className="text-[13px] font-semibold mb-1">{c.title}</div>
                    <p className="text-[11.5px] text-[var(--muted)] leading-[1.5]">{c.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* EMPLOYEE TRANSPORTATION SAFETY */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Employee Transportation Safety" title="Built Around Employee Mobility." /></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {employeeCards.map((c, i) => (
              <FadeIn key={c.title} delay={(i % 3) * 0.06}>
                <div className="border border-[var(--border)] rounded-2xl p-5 h-full">
                  <div className="text-[13.5px] font-semibold mb-1.5">{c.title}</div>
                  <p className="text-[12px] text-[var(--muted)] leading-[1.55]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVE & GUEST SAFETY */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-[20px] p-9 md:p-12 text-center">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-3">Executive &amp; Guest Safety</span>
                <h2 className="text-[24px] md:text-[30px] font-medium tracking-tight text-white mb-3.5 leading-[1.2]">Discreet. Professional. Reliable.</h2>
                <p className="text-[var(--soft-navy)] text-[14px] leading-[1.7] max-w-[560px] mx-auto mb-6">
                  Professional chauffeurs, quality vehicles and coordinated journeys for CXOs, visiting executives, clients, consultants and VIP guests, with privacy, punctuality and centralized coordination.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {execTags.map((t) => (
                    <span key={t} className="border border-white/20 rounded-full px-3.5 py-1.5 text-[12px] text-white">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TECHNOLOGY & SAFETY */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Technology & Safety" title="Technology That Adds Visibility." /></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[820px] mx-auto mb-6">
            {techCaps.map((t, i) => (
              <FadeIn key={t} delay={(i % 4) * 0.05}>
                <div className="bg-white border border-[var(--border)] rounded-xl p-4 text-center h-full flex items-center justify-center">
                  <div className="text-[12.5px] font-semibold">{t}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <p className="text-center text-[13px] text-[var(--muted)] max-w-[520px] mx-auto mb-5 leading-[1.65]">
              Technology doesn&apos;t replace operational responsibility. It gives teams better visibility to manage it.
            </p>
            <div className="text-center">
              <Link href="/technology" className="text-[13px] font-semibold text-[var(--navy)] border-b-[1.5px] border-[var(--gold)] pb-0.5 hover:text-[var(--gold)] transition-colors">
                Explore Our Technology →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INCIDENT RESPONSE */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Incident Response" title="When Something Goes Wrong, Response Matters." /></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {incident.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.06}>
                {s.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-5 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[22px] font-semibold text-[var(--bright-gold)] mb-2">{s.num}</div>
                      <div className="text-[13.5px] font-semibold text-white mb-1">{s.title}</div>
                      <p className="text-[11.5px] text-[var(--soft-navy)] leading-[1.5]">{s.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-5 h-full">
                    <div className="text-[22px] font-semibold text-[var(--gold)] mb-2">{s.num}</div>
                    <div className="text-[13.5px] font-semibold mb-1">{s.title}</div>
                    <p className="text-[11.5px] text-[var(--muted)] leading-[1.5]">{s.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE ACCOUNTABILITY */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <SectionHead
              eyebrow="Corporate Accountability"
              title="Safety That Can Be Managed and Reviewed."
              sub="Corporate clients want more than a safe ride, they want accountability. Relevant to HR, Admin, Procurement, Facility and Travel Managers."
            />
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[820px] mx-auto">
            {accountability.map((a, i) => (
              <FadeIn key={a} delay={(i % 3) * 0.05}>
                <div className="border border-[var(--border)] rounded-[14px] p-4 text-center h-full flex items-center justify-center">
                  <div className="text-[13px] font-semibold">{a}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-[88px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn><SectionHead eyebrow="Safety FAQ" title="Your Safety Questions, Answered." /></FadeIn>
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
            Let&apos;s Build a Safer Mobility Program for Your Organization.
          </h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            Tell us about your employee transportation, executive mobility or corporate travel requirements.
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
