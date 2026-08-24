"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">

          {/* Left: story */}
          <div>
            <FadeIn>
              <span className="text-[15px] font-bold tracking-[2px] uppercase text-[var(--gold)] block mb-3.5">
                About
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.15]">
                Built Around the Way You Move.
              </h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-3.5">
                Connect Cabs began in Bhubaneswar with a simple vision. To make mobility easier, safer and more reliable.
              </p>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-3.5">
                We bring vehicles, verified Chauffeurs, trusted partners and technology together to deliver a seamless mobility experience. From everyday employee transportation and executive travel to events and large-scale mobility requirements.
              </p>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-6">
                Today, we help organizations across Odisha move their people with reliability, transparency and confidence.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link
                href="/about"
                className="bg-[var(--dark)] text-white text-[13px] font-medium px-6 py-3
                  rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.18)]
                  transition-all duration-200 inline-block"
              >
                Know more →
              </Link>
            </FadeIn>
          </div>

          {/* Right: vision + mission */}
          <div className="flex flex-col gap-3.5">
            <FadeIn delay={0.15}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6.5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,31,58,0.08)] transition-all duration-300 cursor-default">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] font-medium mb-2.5">
                  VISION
                </div>
                <div className="text-[var(--dark)] text-[14px] leading-[1.65] text-justify">
                  To build India&apos;s most reliable and intelligent mobility ecosystem. One city, one journey at a time.
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6.5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,31,58,0.08)] transition-all duration-300 cursor-default">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] font-medium mb-2.5">
                  MISSION
                </div>
                <div className="text-[var(--dark)] text-[14px] leading-[1.65] text-justify">
                  To make every journey safe, seamless and effortless through technology, trusted people and dedicated service.
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}