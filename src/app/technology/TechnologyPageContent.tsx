"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20talk%20to%20your%20team%20about%20your%20technology%20platform.";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

const outcomes = [
  { label: "Visibility", desc: "GPS-enabled tracking and live trip monitoring, so admin and HR teams always know where things stand.", navy: false },
  { label: "Accountability", desc: "Every trip logged, every Chauffeur verified, every journey traceable end to end.", navy: false },
  { label: "Control", desc: "Consolidated MIS reporting replaces scattered vendor invoices with one clear view.", navy: true },
];

const capabilities = [
  { num: "01", title: "Real-Time Fleet Tracking", desc: "GPS-enabled tracking and live movement visibility across the network." },
  { num: "02", title: "Digital Booking & Dispatch", desc: "Streamlined booking, allocation and dispatch through one connected platform." },
  { num: "03", title: "Live Trip Monitoring", desc: "Real-time oversight of journeys, schedules and service performance." },
  { num: "04", title: "Automated Communication", desc: "Instant confirmations, updates, alerts and notifications across every journey." },
  { num: "05", title: "Account & Mobility Management", desc: "Centralized management for business and corporate mobility needs." },
  { num: "06", title: "Data, MIS & Analytics", desc: "Actionable insights, performance dashboards and consolidated reporting." },
];

const trust = [
  { label: "Secure Payments", desc: "Secure payment gateways and automated confirmations." },
  { label: "Data Privacy", desc: "Trip and account data handled with care and confidentiality." },
  { label: "24x7 Support", desc: "Dedicated support and centralised dispatch, round the clock." },
  { label: "SOP-Driven Ops", desc: "Standardised processes behind every booking and trip." },
];

const flow = [
  { title: "Digital Booking", desc: "Request placed through one platform" },
  { title: "Allocation & Dispatch", desc: "Right vehicle and verified Chauffeur assigned" },
  { title: "Live Tracking & Alerts", desc: "Journey monitored, updates sent automatically" },
  { title: "MIS & Reporting", desc: "Trip logged into consolidated reporting" },
];

export default function TechnologyPageContent() {
  return (
    <>
      {/* PRODUCT-LED HERO */}
      <section
        className="relative overflow-hidden text-center pt-[110px] px-6"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--light-blue) 60%, #ffffff 100%)" }}
      >
        <div className="relative z-10 max-w-[1200px] mx-auto pt-16">
          <FadeIn>
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-4">Technology</span>
            <h1 className="text-[34px] md:text-[48px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.12] max-w-[760px] mx-auto">
              The Technology Layer Behind Every Trip.
            </h1>
            <p className="text-[var(--muted)] text-[15px] md:text-[16px] leading-[1.7] max-w-[600px] mx-auto mb-7">
              GPS-enabled tracking, digital booking, live trip monitoring and consolidated reporting, working together so your corporate transportation runs with full visibility and control.
            </p>
            <div className="flex gap-3 justify-center flex-wrap mb-14">
              <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
                Talk to Our Team →
              </Link>
              <Link href="#capabilities" className="bg-white text-[var(--navy)] border border-[var(--border)] text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:border-[var(--gold)] transition-colors duration-200">
                Explore Capabilities
              </Link>
            </div>
          </FadeIn>

          {/* DASHBOARD DEVICE FRAME */}
          <FadeIn delay={0.1}>
            <div className="max-w-[920px] mx-auto pb-16">
              <div className="bg-white rounded-t-2xl overflow-hidden border border-b-0 border-[var(--border)]" style={{ boxShadow: "0 40px 100px rgba(11,31,58,0.28)" }}>
                {/* browser bar */}
                <div className="bg-[var(--off-white)] border-b border-[var(--border)] px-4 py-[11px] flex items-center gap-2">
                  <div className="w-[11px] h-[11px] rounded-full bg-[var(--border)]" />
                  <div className="w-[11px] h-[11px] rounded-full bg-[var(--border)]" />
                  <div className="w-[11px] h-[11px] rounded-full bg-[var(--border)]" />
                  <div className="ml-3 bg-white border border-[var(--border)] rounded-md px-3 py-1 text-[11px] text-[var(--muted-light)] flex-1 max-w-[280px] text-left">app.connectcabs.in/dashboard</div>
                </div>
                {/* dashboard body */}
                <div className="grid grid-cols-[130px_1fr] sm:grid-cols-[170px_1fr] text-left">
                  {/* sidebar */}
                  <div className="bg-[var(--dark)] p-3.5 sm:px-3.5 sm:py-[18px] min-h-[360px]">
                    <div className="text-white text-[13px] font-extrabold mb-[22px]">CONNECT<span className="text-[var(--gold)]">CABS</span></div>
                    <div className="flex flex-col gap-[3px]">
                      <div className="bg-white/[0.08] text-white text-[11.5px] px-2.5 py-2 rounded-[7px]">Dashboard</div>
                      {["Live Tracking", "Bookings", "Trips", "Chauffeurs", "MIS Reports"].map((s) => (
                        <div key={s} className="text-[var(--soft-navy)] text-[11.5px] px-2.5 py-2">{s}</div>
                      ))}
                    </div>
                  </div>
                  {/* main */}
                  <div className="p-5 bg-white">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-[15px] font-semibold">Operations Overview</div>
                      <div className="bg-[var(--light-blue)] rounded-md px-2.5 py-1 text-[10px] text-[var(--navy)] font-semibold">● Live</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-3">
                      <div className="bg-[var(--off-white)] rounded-[10px] p-3.5"><div className="text-[10px] text-[var(--muted-light)]">Fleet on road</div><div className="text-[20px] font-bold">Active</div><div className="text-[9px] text-[var(--muted-light)]">GPS tracked</div></div>
                      <div className="bg-[var(--off-white)] rounded-[10px] p-3.5"><div className="text-[10px] text-[var(--muted-light)]">Trips in progress</div><div className="text-[20px] font-bold">Live</div><div className="text-[9px] text-[var(--muted-light)]">monitored</div></div>
                      <div className="bg-[var(--light-gold)] rounded-[10px] p-3.5"><div className="text-[10px] text-[#8A5B00]">Alerts</div><div className="text-[20px] font-bold">Route flag</div><div className="text-[9px] text-[#8A5B00]">deviation</div></div>
                    </div>
                    <div className="bg-[var(--off-white)] rounded-[10px] p-3.5 mb-3">
                      <div className="flex justify-between items-center mb-2.5">
                        <div><div className="text-[10px] text-[var(--muted-light)]">Active trip</div><div className="text-[13px] font-semibold">BBS Airport → Tech Park</div></div>
                        <div className="bg-[var(--navy)] rounded-md px-2.5 py-1 text-[10px] text-white font-medium">On route</div>
                      </div>
                      <div className="h-[4px] bg-[var(--border)] rounded-full"><div className="w-[64%] h-full bg-[var(--gold)] rounded-full" /></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[var(--off-white)] rounded-[10px] p-3"><div className="text-[10px] text-[var(--muted-light)]">Chauffeur</div><div className="text-[12px] font-semibold">Assigned · Verified</div></div>
                      <div className="bg-[var(--dark)] rounded-[10px] p-3"><div className="text-[10px] text-[var(--soft-navy)]">Reports</div><div className="text-[12px] font-semibold text-white">MIS ready</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-[var(--muted-light)] mt-3.5">Representative dashboard. Product in active development; feature availability may vary by engagement.</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Why It Matters</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">Technology That Earns Its Place In Procurement.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {outcomes.map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.08}>
                {o.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-7 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] uppercase font-bold mb-2.5">{o.label}</div>
                      <p className="text-white text-[13.5px] leading-[1.65]">{o.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-7 h-full">
                    <div className="text-[var(--gold)] text-[11px] tracking-[1.5px] uppercase font-bold mb-2.5">{o.label}</div>
                    <p className="text-[var(--dark)] text-[13.5px] leading-[1.65] text-justify">{o.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="py-20 bg-[var(--off-white)] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Capabilities</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">One Connected Layer For Every Journey.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <FadeIn key={c.num} delay={(i % 3) * 0.06}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-[26px] h-full">
                  <div className="text-[11px] text-[var(--gold)] tracking-[1.5px] uppercase font-bold mb-2.5">{c.num}</div>
                  <div className="text-[16px] font-semibold mb-2">{c.title}</div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6] text-justify">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: TRACKING */}
      <section className="py-16 md:py-[60px] bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeIn>
            <div className="relative overflow-hidden bg-[var(--dark)] rounded-[20px] p-8 min-h-[300px]">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10 bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-[12px] font-semibold">Live Tracking</div>
                  <div className="bg-[var(--light-blue)] rounded-[5px] px-2 py-[3px] text-[9px] text-[var(--navy)] font-semibold">● Live</div>
                </div>
                <div className="bg-[var(--light-blue)] rounded-lg h-[120px] relative overflow-hidden mb-2.5">
                  <svg width="100%" height="120" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M20,100 C80,60 140,90 200,40 S280,30 290,20" fill="none" stroke="#FFB000" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="20" cy="100" r="5" fill="#0B3B78" /><circle cx="290" cy="20" r="5" fill="#FFB000" />
                  </svg>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-[var(--off-white)] rounded-md p-2"><div className="text-[9px] text-[var(--muted-light)]">ETA</div><div className="text-[12px] font-semibold">On time</div></div>
                  <div className="flex-1 bg-[var(--off-white)] rounded-md p-2"><div className="text-[9px] text-[var(--muted-light)]">Route</div><div className="text-[12px] font-semibold">Compliant</div></div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Real-Time Visibility</span>
              <h2 className="text-[26px] md:text-[30px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">Know Where Every Vehicle Is, Every Moment.</h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-[18px]">
                GPS-enabled tracking gives your team live visibility of every trip in motion. Route compliance, estimated arrival and journey status are visible at a glance, so a delay or deviation is something you see, not something you find out about later.
              </p>
              {["Live vehicle location and movement", "Route-compliance and deviation flags", "Estimated arrival and trip status"].map((s) => (
                <div key={s} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0">
                  <span className="text-[var(--gold)] shrink-0">→</span><span>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SPLIT: MIS */}
      <section className="py-16 md:py-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <FadeIn className="lg:order-2">
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-[20px] p-8 min-h-[300px]">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10 bg-white rounded-xl p-4">
                <div className="text-[12px] font-semibold mb-3">Monthly MIS Summary</div>
                <div className="flex items-end gap-2 h-[100px] mb-2.5">
                  <div className="flex-1 bg-[var(--light-blue)] rounded-t h-[50%]" />
                  <div className="flex-1 bg-[var(--light-blue)] rounded-t h-[70%]" />
                  <div className="flex-1 bg-[var(--gold)] rounded-t h-[90%]" />
                  <div className="flex-1 bg-[var(--light-blue)] rounded-t h-[60%]" />
                  <div className="flex-1 bg-[var(--light-blue)] rounded-t h-[80%]" />
                  <div className="flex-1 bg-[var(--navy)] rounded-t h-[75%]" />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-[var(--off-white)] rounded-md p-2"><div className="text-[9px] text-[var(--muted-light)]">Trips</div><div className="text-[12px] font-semibold">Logged</div></div>
                  <div className="flex-1 bg-[var(--off-white)] rounded-md p-2"><div className="text-[9px] text-[var(--muted-light)]">On-time</div><div className="text-[12px] font-semibold">Tracked</div></div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:order-1">
            <div>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Reporting & MIS</span>
              <h2 className="text-[26px] md:text-[30px] font-medium tracking-tight text-[var(--dark)] mb-3.5 leading-[1.2]">One Report Instead Of Five Invoices.</h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-[18px]">
                Consolidated MIS reporting turns scattered trip data into one clear view your procurement and HR teams can actually use. Trip logs, utilisation and service performance come together in a single report, not a stack of separate vendor bills.
              </p>
              {["Consolidated trip and utilisation reporting", "Service-performance visibility", "A single, auditable view per account"].map((s) => (
                <div key={s} className="flex gap-2.5 items-start text-[13.5px] leading-[1.5] mb-2 last:mb-0">
                  <span className="text-[var(--gold)] shrink-0">→</span><span>{s}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Built To Be Relied On</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">Secure, Supported, Dependable.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map((t, i) => (
              <FadeIn key={t.label} delay={(i % 4) * 0.06}>
                <div className="bg-white border border-[var(--border)] rounded-2xl p-6 h-full">
                  <div className="text-[11px] text-[var(--gold)] tracking-[1.5px] uppercase font-bold mb-2.5">{t.label}</div>
                  <p className="text-[12.5px] text-[var(--muted)] leading-[1.6]">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED FLOW */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <FadeIn>
            <div>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">End To End</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">From Booking To Report, One Connected Flow.</h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify">
                Every step of a corporate trip runs through the same connected layer. A booking becomes a dispatched vehicle, a tracked journey, an automated update and finally a line in your monthly report, without anything falling through the cracks between systems.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-8 md:p-9 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <div className="text-[var(--bright-gold)] text-[11px] tracking-[1.5px] font-bold mb-6 uppercase">The Connected Flow</div>
                <div className="flex flex-col">
                  {flow.map((f, i) => (
                    <div key={f.title} className="flex gap-3.5 relative pb-5 last:pb-0">
                      {i < flow.length - 1 && <span className="absolute left-[5px] top-4 bottom-0 w-px bg-white/15" />}
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

      {/* CTA */}
      <section className="relative overflow-hidden py-[72px] bg-[var(--dark)] text-center">
        <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Let&apos;s Talk</span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">Bring Visibility And Control To Your Mobility.</h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            See how ConnectCabs&apos; technology can give your team full visibility over corporate transportation. Talk to our team about what you need.
          </p>
          <div className="relative z-10 flex gap-3 justify-center flex-wrap px-6">
            <Link href={WA} target="_blank" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Talk to Our Team →
            </Link>
            <Link href="/contact" className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
