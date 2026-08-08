"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-10 bg-[var(--off-white)]">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 md:pt-20 pb-16 md:pb-24 relative">
        {/* Mobile background graphic */}
        <svg
          viewBox="0 0 400 400"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] opacity-[0.07] lg:hidden pointer-events-none"
        >
          <circle cx="200" cy="200" r="165" fill="none" stroke="#0B3B78" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="125" fill="none" stroke="#0B3B78" strokeWidth="1" />
          <circle cx="200" cy="200" r="85" fill="none" stroke="#0B3B78" strokeWidth="0.8" />
          <path d="M 200 35 A 165 165 0 0 1 365 200" fill="none" stroke="#FFB000" strokeWidth="3" strokeLinecap="round" />
          <path d="M 75 200 A 125 125 0 0 1 200 75" fill="none" stroke="#FFB000" strokeWidth="2" strokeLinecap="round" />
          <circle cx="200" cy="35" r="7" fill="#0B3B78" />
          <circle cx="365" cy="200" r="7" fill="#FFB000" />
          <circle cx="200" cy="200" r="28" fill="#0B3B78" />
          <circle cx="200" cy="200" r="11" fill="#FFB000" />
          <circle cx="295" cy="95" r="4" fill="#FFB000" />
          <circle cx="110" cy="305" r="3" fill="#0B3B78" />
          <circle cx="315" cy="315" r="3.5" fill="#FFB000" />
        </svg>
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-5">
            Enterprise mobility
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-start">
          {/* Left: copy */}
          <FadeIn>
            <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight text-[var(--dark)] mb-6">
              Move your<br />business.<br />
              <span className="relative inline-block">
                Not just
                <span
                  className="absolute left-[-4px] right-[-4px] bottom-1 h-[18px] rounded-sm"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), var(--bright-gold))",
                    opacity: 0.35,
                    zIndex: 0,
                  }}
                />
              </span>{" "}
              your people.
            </h1>
            <p className="text-[var(--muted)] text-[17px] leading-relaxed mb-9 max-w-[420px]">
              Employee transport, executive mobility and managed fleets — connected
              through one accountable partner.
            </p>
            <div className="flex gap-3.5 flex-wrap items-center">
              <Link
                href="#contact"
                className="bg-[var(--dark)] text-white text-[15px] font-medium px-7 py-4
                  rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.18)]
                  transition-all duration-200"
              >
                Request a quote
              </Link>
              <Link
                href="#contact"
                className="text-[var(--dark)] text-[15px] font-medium px-2 py-4 transition-colors
                  hover:text-[var(--navy)]"
              >
                Talk to our team →
              </Link>
            </div>
          </FadeIn>

          {/* Right: Animated geometric network */}
          <FadeIn delay={0.2} className="hidden lg:flex items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[400px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric circles */}
              <circle cx="200" cy="200" r="165" fill="none" stroke="#0B3B78" strokeWidth="1.2" strokeOpacity="0.1" />
              <circle cx="200" cy="200" r="125" fill="none" stroke="#0B3B78" strokeWidth="1" strokeOpacity="0.07" />
              <circle cx="200" cy="200" r="85" fill="none" stroke="#0B3B78" strokeWidth="0.8" strokeOpacity="0.05" />

              {/* Gold arcs */}
              <path d="M 200 35 A 165 165 0 0 1 365 200" fill="none" stroke="#FFB000" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" />
              <path d="M 75 200 A 125 125 0 0 1 200 75" fill="none" stroke="#FFB000" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
              <path d="M 200 315 A 115 115 0 0 1 85 200" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.25" />

              {/* Node dots */}
              <circle cx="200" cy="35" r="7" fill="#0B3B78" />
              <circle cx="365" cy="200" r="7" fill="#FFB000" />
              <circle cx="200" cy="365" r="5" fill="#0B3B78" opacity="0.3" />
              <circle cx="35" cy="200" r="5" fill="#0B3B78" opacity="0.3" />

              {/* Center hub */}
              <circle cx="200" cy="200" r="28" fill="#0B3B78" />
              <circle cx="200" cy="200" r="11" fill="#FFB000" />

              {/* Radial dashed lines */}
              <line x1="200" y1="172" x2="200" y2="42" stroke="#0B3B78" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="4,6" />
              <line x1="228" y1="200" x2="358" y2="200" stroke="#FFB000" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4,6" />
              <line x1="200" y1="228" x2="200" y2="360" stroke="#0B3B78" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="4,6" />
              <line x1="172" y1="200" x2="40" y2="200" stroke="#0B3B78" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="4,6" />

              {/* Scattered accent dots */}
              <circle cx="295" cy="95" r="4" fill="#FFB000" opacity="0.5" />
              <circle cx="110" cy="305" r="3" fill="#0B3B78" opacity="0.2" />
              <circle cx="315" cy="315" r="3.5" fill="#FFB000" opacity="0.35" />
              <circle cx="95" cy="110" r="3" fill="#0B3B78" opacity="0.15" />
              <circle cx="300" cy="200" r="2.5" fill="#FFB000" opacity="0.3" />
              <circle cx="145" cy="90" r="2.5" fill="#0B3B78" opacity="0.12" />

              {/* Soft glow */}
              <defs>
                <radialGradient id="heroGlow">
                  <stop offset="0%" stopColor="#FFB000" />
                  <stop offset="100%" stopColor="#FFB000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="55" fill="url(#heroGlow)" opacity="0.12" />

              {/* Vehicle 1: gold, top → right → bottom-right */}
              <circle r="6" fill="#FFB000">
                <animateMotion dur="5s" repeatCount="indefinite"
                  path="M 200,35 Q 310,80 365,200 Q 350,280 315,315" />
              </circle>
              <circle r="16" fill="#FFB000" opacity="0.12">
                <animateMotion dur="5s" repeatCount="indefinite"
                  path="M 200,35 Q 310,80 365,200 Q 350,280 315,315" />
              </circle>

              {/* Vehicle 2: navy, left → center → bottom */}
              <circle r="5" fill="#0B3B78">
                <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s"
                  path="M 35,200 Q 100,180 200,200 Q 210,290 200,365" />
              </circle>
              <circle r="14" fill="#0B3B78" opacity="0.08">
                <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s"
                  path="M 35,200 Q 100,180 200,200 Q 210,290 200,365" />
              </circle>

              {/* Vehicle 3: gold, bottom-left → center → top-right */}
              <circle r="4.5" fill="#FFB000" opacity="0.7">
                <animateMotion dur="6s" repeatCount="indefinite" begin="3s"
                  path="M 110,305 Q 160,250 200,200 Q 250,140 295,95" />
              </circle>
              <circle r="12" fill="#FFB000" opacity="0.1">
                <animateMotion dur="6s" repeatCount="indefinite" begin="3s"
                  path="M 110,305 Q 160,250 200,200 Q 250,140 295,95" />
              </circle>

              {/* Node pulse on arrival */}
              <circle cx="315" cy="315" r="3.5" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="3.5;12;3.5" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.3;0" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="365" r="5" fill="none" stroke="#0B3B78" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="5;14;5" dur="7s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="opacity" values="0;0.2;0" dur="7s" repeatCount="indefinite" begin="1.5s" />
              </circle>
            </svg>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}