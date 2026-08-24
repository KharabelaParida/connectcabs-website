"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="py-10 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div
            className="rounded-3xl py-16 px-8 md:px-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, var(--dark), var(--deep-navy))" }}
          >
            <h2 className="text-white text-[32px] md:text-[38px] lg:text-[42px] font-medium leading-[1.12] tracking-tight mb-4">
              Let&apos;s Move Forward, <span className="text-[var(--gold)]">Together.</span>
            </h2>
            <p className="text-[var(--soft-navy)] text-[15px] mx-auto mb-8 max-w-[420px] leading-relaxed">
              Please share your mobility needs. We&apos;ll design a mobility solution
              around your people and planet.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="https://wa.me/918277840505?text=Hi%20Connect%20Cabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank"
                className="bg-[var(--gold)] text-[var(--dark)] text-[15px] font-medium px-7 py-4
                  rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,176,0,0.3)]
                  transition-all duration-200"
              >
                Request a quote
              </Link>
              <Link
                href="https://wa.me/918277840505?text=Hi%20Connect%20Cabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank"
                className="text-white text-[15px] font-medium px-7 py-4 rounded-xl
                  border border-white/20 hover:border-white/50 transition-colors duration-200"
              >
                Talk to our team
              </Link>
            </div>

            {/* Decorative gold glow */}
            <div
              className="absolute -top-16 -right-16 w-[200px] h-[200px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,176,0,0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}