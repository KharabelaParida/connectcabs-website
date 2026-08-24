"use client";

import FadeIn from "./FadeIn";

export default function TransitionQuote() {
  return (
    <section className="py-20 bg-[var(--dark)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-[700px] mx-auto">
            <div className="w-10 h-[3px] bg-[var(--gold)] mx-auto mb-6" />
            <p className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.3] tracking-tight text-white mb-4">
              When People Move, <span className="text-[var(--gold)]">Possibilities Move With Them.</span>
            </p>
            <p className="text-[15px] md:text-[16px] font-normal text-[var(--soft-navy)]">
              We Power the Connected Ecosystem Behind Every Journey.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}