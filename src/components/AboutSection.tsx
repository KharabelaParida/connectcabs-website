"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-start">

          {/* Left: story */}
          <div>
            <FadeIn>
              <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
                About
              </span>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-5 leading-[1.15]">
                Built around the way businesses move.
              </h2>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-3.5">
                Connect Cabs started in Bhubaneswar with a simple idea. Corporate transportation shouldn&apos;t be this hard. Too many vendors, too many phone calls, too little visibility. We wanted to fix that.
              </p>
              <p className="text-[var(--muted)] text-[14px] leading-[1.7] text-justify mb-6">
                Today, we help businesses across Odisha move their people reliably. From daily employee commutes to executive travel and large-scale event logistics. We bring our own fleet, a trusted partner network, verified drivers and real-time operations together under one roof.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="bg-[var(--dark)] text-white text-[13px] font-medium px-6 py-3
                    rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.18)]
                    transition-all duration-200"
                >
                  Know more →
                </Link>
                <div className="flex gap-5">
                  <div>
                    <div className="text-[var(--gold)] text-[10px] tracking-wider mb-0.5">BASED IN</div>
                    <div className="text-[var(--dark)] text-[12px] font-semibold">Bhubaneswar, Odisha</div>
                  </div>
                  <div>
                    <div className="text-[var(--gold)] text-[10px] tracking-wider mb-0.5">FOCUS</div>
                    <div className="text-[var(--dark)] text-[12px] font-semibold">Corporate mobility</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: vision + mission */}
          <div className="flex flex-col gap-3">
            <FadeIn delay={0.15}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,31,58,0.08)] transition-all duration-300 cursor-default">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] font-medium mb-2.5">
                  VISION
                </div>
                <div className="text-[var(--dark)] text-[14px] leading-[1.65] text-justify">
                  To build India&apos;s most reliable and intelligent corporate mobility ecosystem. One city at a time, one business at a time.
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,31,58,0.08)] transition-all duration-300 cursor-default">
                <div className="text-[var(--gold)] text-[10px] tracking-[1.5px] font-medium mb-2.5">
                  MISSION
                </div>
                <div className="text-[var(--dark)] text-[14px] leading-[1.65] text-justify">
                  Help organizations move their people effortlessly through technology, safety and dedicated service. Every trip, every day.
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}