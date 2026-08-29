"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const PHONE = "+918277840505";
const PHONE_DISPLAY = "+91 8277840505";
const EMAIL = "hello@connectcabsindia.com";
const WA = "https://wa.me/918277840505?text=Hi%20ConnectCabs%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20transportation%20requirement.";
const MAP_SRC =
  "https://www.google.com/maps?q=Jagannathpur%2C%20Khordha%2C%20Bhubaneswar%2C%20Odisha%20752101&output=embed";

const dotStyle = {
  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

const requirements = [
  "Employee Transportation",
  "Corporate Car Rental",
  "Executive Transportation",
  "Airport Transfers",
  "Event Transportation",
  "Group Transportation",
  "Industrial / Project Transportation",
  "Government / Official Transportation",
  "Other",
];

const steps = [
  { num: "01", title: "Understand Your Requirement", desc: "We look at your passengers, routes, schedules and business needs.", navy: false },
  { num: "02", title: "Recommend The Right Fleet", desc: "Match your requirement with an appropriate vehicle category.", navy: false },
  { num: "03", title: "Plan The Movement", desc: "From individual corporate travel to employee and event transportation.", navy: false },
  { num: "04", title: "Keep Business Moving", desc: "Professional transportation support built around your operations.", navy: true },
];

const faqs = [
  { q: "Can businesses request recurring transportation?", a: "Yes. Share your routes, schedule and vehicle needs and we'll plan a dedicated corporate arrangement." },
  { q: "Can I request transportation for a corporate event?", a: "Yes. Submit passenger count, locations and schedule and we'll coordinate the movement end to end." },
  { q: "Can ConnectCabs arrange airport transfers?", a: "Yes, airport pickup and drop is one of our core corporate services." },
];

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full border border-[var(--border)] rounded-[10px] px-[13px] py-[11px] text-[13.5px] text-[var(--dark)] bg-white outline-none focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 transition-colors placeholder:text-[var(--muted-light)]";

function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    // Honeypot: if filled, silently succeed without sending
    if (payload.website) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--off-white)] border border-[var(--border)] rounded-[20px] p-10 text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-14 h-14 rounded-full bg-[var(--gold)]/15 flex items-center justify-center mb-5">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-[22px] font-medium tracking-tight text-[var(--dark)] mb-2.5">Enquiry Received.</h3>
        <p className="text-[var(--muted)] text-[14px] leading-[1.7] max-w-[380px]">
          Thanks for reaching out. Our mobility team will get back to you shortly. For anything urgent, you can also reach us on WhatsApp.
        </p>
        <Link
          href={WA}
          target="_blank"
          className="mt-6 bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200"
        >
          Chat on WhatsApp →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--off-white)] border border-[var(--border)] rounded-[20px] p-6 md:p-8"
    >
      {/* Honeypot — hidden from users */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Full Name <span className="text-[var(--gold)]">*</span></label>
          <input name="fullName" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Company Name <span className="text-[var(--gold)]">*</span></label>
          <input name="company" required placeholder="Your company" className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Work Email <span className="text-[var(--gold)]">*</span></label>
          <input name="email" type="email" required placeholder="you@company.com" className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Phone Number <span className="text-[var(--gold)]">*</span></label>
          <input name="phone" required placeholder="+91 ..." className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">City / Location <span className="text-[var(--gold)]">*</span></label>
          <input name="city" required placeholder="e.g. Bhubaneswar" className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Transportation Requirement <span className="text-[var(--gold)]">*</span></label>
          <select name="requirement" required defaultValue="" className={inputCls}>
            <option value="" disabled>Select requirement</option>
            {requirements.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Number of Passengers</label>
          <input name="passengers" placeholder="Optional" className={inputCls} />
        </div>
        <div>
          <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Travel / Service Date</label>
          <input name="serviceDate" placeholder="Optional" className={inputCls} onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = "text"; }} />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-[12px] font-semibold text-[var(--dark)] mb-1.5 block">Additional Requirement</label>
        <textarea name="message" rows={4} placeholder="Tell us about your routes, passenger count, schedule or transportation requirement." className={`${inputCls} resize-y`} />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-600 mt-4">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full mt-5 bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry →"}
      </button>
      <p className="text-[11.5px] text-[var(--muted-light)] text-center mt-3">
        We&apos;ll only use your details to respond to this enquiry.
      </p>
    </form>
  );
}

export default function ContactPageContent() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-center pt-[110px] pb-[72px] px-6"
        style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy) 42%, #ffffff 92%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            ...dotStyle,
            WebkitMaskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 82%)",
            maskImage: "linear-gradient(160deg, black 0%, black 45%, transparent 82%)",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto pt-16">
          <FadeIn>
            <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Contact Us</span>
            <h1 className="text-[32px] md:text-[44px] font-medium tracking-tight text-white mb-4.5 leading-[1.15] max-w-[720px] mx-auto">
              Let&apos;s Move Your Business Forward.
            </h1>
            <p className="text-white/70 text-[14.5px] md:text-[15px] leading-[1.7] max-w-[580px] mx-auto mb-6">
              Tell us what you need, from employee transportation and executive mobility to airport transfers, fleet deployment or event transportation, and our team will help you find the right solution.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="#form" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
                Send an Enquiry →
              </Link>
              <Link href={WA} target="_blank" className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200">
                WhatsApp Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT OPTIONS STRIP */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn>
            <a href={`tel:${PHONE}`} className="block bg-white rounded-2xl p-[22px] shadow-[0_16px_40px_rgba(11,31,58,0.12)] h-full hover:-translate-y-0.5 transition-transform duration-200">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-2">Call Us</div>
              <div className="text-[15px] font-semibold text-[var(--dark)]">{PHONE_DISPLAY}</div>
              <div className="text-[12px] text-[var(--muted)] mt-0.5">Mon–Sat, business hours</div>
            </a>
          </FadeIn>
          <FadeIn delay={0.05}>
            <a href={`mailto:${EMAIL}`} className="block bg-white rounded-2xl p-[22px] shadow-[0_16px_40px_rgba(11,31,58,0.12)] h-full hover:-translate-y-0.5 transition-transform duration-200">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-2">Email Us</div>
              <div className="text-[14px] font-semibold text-[var(--dark)] break-all">{EMAIL}</div>
              <div className="text-[12px] text-[var(--muted)] mt-0.5">We reply within a day</div>
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a href={WA} target="_blank" className="block bg-white rounded-2xl p-[22px] shadow-[0_16px_40px_rgba(11,31,58,0.12)] h-full hover:-translate-y-0.5 transition-transform duration-200">
              <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-2">WhatsApp</div>
              <div className="text-[15px] font-semibold text-[var(--dark)]">Chat with our team</div>
              <div className="text-[12px] text-[var(--muted)] mt-0.5">Quicker conversations</div>
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-[22px] h-full">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--bright-gold)] font-bold mb-2">Headquarters</div>
                <div className="text-[15px] font-semibold text-white">Bhubaneswar, Odisha</div>
                <div className="text-[12px] text-[var(--soft-navy)] mt-0.5">Khorda · 752101</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MAIN ENQUIRY */}
      <section id="form" className="py-20 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-center">
          <FadeIn>
            <div className="lg:sticky lg:top-[100px]">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Enquiry</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-4 leading-[1.2]">Tell Us What You Need.</h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-[22px]">
                Share a few details about your requirement and our mobility team will get back to you with the right vehicle category and a plan that fits your routes, schedules and passenger needs.
              </p>
              <div className="flex flex-col gap-2.5">
                {["Employee & executive transportation", "Airport transfers & intercity travel", "Group, industrial & event mobility"].map((t) => (
                  <div key={t} className="flex gap-2.5 items-center text-[13.5px]">
                    <span className="text-[var(--gold)]">→</span> {t}
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--border)] mt-6 pt-5">
                <div className="text-[12px] text-[var(--muted)] mb-1.5">Prefer to talk now?</div>
                <Link href={WA} target="_blank" className="text-[13px] font-semibold text-[var(--navy)] border-b-[1.5px] border-[var(--gold)] pb-0.5 hover:text-[var(--gold)] transition-colors">
                  Chat on WhatsApp →
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <EnquiryForm />
          </FadeIn>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-20 bg-[var(--off-white)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">Our Offices</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">Find Us Across Three Key Business Hubs.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FadeIn>
              <div className="relative overflow-hidden bg-[var(--navy)] rounded-[18px] p-7 text-white h-full">
                <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                <div className="relative z-10">
                  <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--bright-gold)] font-bold mb-3.5">Headquarters</div>
                  <div className="text-[19px] font-semibold mb-2">Bhubaneswar</div>
                  <p className="text-[13px] leading-[1.65] text-[var(--soft-navy)]">Highway Heights, Jagannathpur, Khorda, Bhubaneswar, Odisha 752101</p>
                  <a href={`tel:${PHONE}`} className="inline-block mt-4 text-white text-[13px] font-semibold border-b-[1.5px] border-[var(--bright-gold)] pb-0.5">Call this office →</a>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="bg-white border border-[var(--border)] rounded-[18px] p-7 h-full">
                <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-3.5">Branch</div>
                <div className="text-[19px] font-semibold mb-2">Bangalore</div>
                <p className="text-[13px] leading-[1.65] text-[var(--muted)]">Prestige Tranquility, Budigere Cross, Bangalore, Karnataka 560049</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="bg-white border border-[var(--border)] rounded-[18px] p-7 h-full">
                <div className="text-[11px] tracking-[1.5px] uppercase text-[var(--gold)] font-bold mb-3.5">Branch</div>
                <div className="text-[19px] font-semibold mb-2">Guwahati</div>
                <p className="text-[13px] leading-[1.65] text-[var(--muted)]">Bongra, Guwahati, Assam</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="mt-4 border border-[var(--border)] rounded-[18px] overflow-hidden h-[320px]">
              <iframe
                src={MAP_SRC}
                title="ConnectCabs Bhubaneswar office location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-[88px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-[720px] mx-auto mb-11">
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">How It Works</span>
              <h2 className="text-[26px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] leading-[1.2]">One Conversation. The Right Mobility Solution.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={(i % 4) * 0.06}>
                {s.navy ? (
                  <div className="relative overflow-hidden bg-[var(--navy)] rounded-2xl p-[26px] h-full">
                    <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
                    <div className="relative z-10">
                      <div className="text-[30px] font-semibold text-[var(--bright-gold)] mb-3">{s.num}</div>
                      <div className="text-[15px] font-semibold text-white mb-1.5">{s.title}</div>
                      <p className="text-[12.5px] text-[var(--soft-navy)] leading-[1.6]">{s.desc}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-[var(--border)] rounded-2xl p-[26px] h-full">
                    <div className="text-[30px] font-semibold text-[var(--gold)] mb-3">{s.num}</div>
                    <div className="text-[15px] font-semibold mb-1.5">{s.title}</div>
                    <p className="text-[12.5px] text-[var(--muted)] leading-[1.6]">{s.desc}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RECURRING + FAQ */}
      <section className="pb-20 md:pb-[88px]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <FadeIn>
            <div className="relative overflow-hidden bg-[var(--dark)] rounded-[20px] p-8 md:p-9 text-white">
              <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
              <div className="relative z-10">
                <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-3">For Businesses</span>
                <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight mb-3.5 leading-[1.2]">Have A Recurring Transportation Requirement?</h3>
                <p className="text-[13.5px] leading-[1.7] text-justify text-[var(--soft-navy)] mb-[22px]">
                  Whether you need daily employee transportation, dedicated corporate vehicles, executive travel or periodic event mobility, tell us what your business requires.
                </p>
                <Link href="#form" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
                  Discuss a Corporate Requirement →
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <span className="text-[13px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3">FAQ</span>
              <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.2]">Quick Answers.</h3>
              {faqs.map((f) => (
                <div key={f.q} className="border-t border-[var(--border)] py-4">
                  <div className="text-[14px] font-semibold mb-1">{f.q}</div>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6]">{f.a}</p>
                </div>
              ))}
              <div className="border-t border-b border-[var(--border)] py-4">
                <div className="text-[14px] font-semibold mb-1">Which cities do you serve?</div>
                <p className="text-[13px] text-[var(--muted)] leading-[1.6]">
                  We operate across Odisha&apos;s business and industrial corridors.{" "}
                  <Link href="/cities" className="text-[var(--navy)] font-semibold border-b-[1.5px] border-[var(--gold)]">See the cities we serve →</Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-[72px] bg-[var(--dark)] text-center">
        <div className="absolute inset-0 pointer-events-none" style={dotStyle} />
        <FadeIn>
          <span className="relative z-10 text-[13px] font-bold tracking-[2px] uppercase text-[var(--bright-gold)] block mb-4">Let&apos;s Talk</span>
          <h2 className="relative z-10 text-[24px] md:text-[28px] font-medium text-white mb-3.5 px-6">Your Business Has Places To Be. Let&apos;s Get You There.</h2>
          <p className="relative z-10 text-white/70 text-[14.5px] leading-[1.7] max-w-[540px] mx-auto mb-6 px-6">
            Tell us what you need and let ConnectCabs help you plan the right transportation solution.
          </p>
          <div className="relative z-10 flex gap-3 justify-center flex-wrap px-6">
            <Link href="#form" className="bg-[var(--gold)] text-[var(--dark)] text-[14px] font-semibold px-7 py-3.5 rounded-xl inline-block hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,176,0,0.28)] transition-all duration-200">
              Send an Enquiry →
            </Link>
            <Link href={WA} target="_blank" className="bg-transparent text-white border border-white/30 text-[14px] font-semibold px-[26px] py-[13px] rounded-xl inline-block hover:bg-white/10 transition-colors duration-200">
              WhatsApp Us
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
