"use client";

import FadeIn from "./FadeIn";

interface Props {
  line1: string;
  line2: string;
  highlight: string;
}

export default function TransitionQuote({ line1, line2, highlight }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.15] tracking-tight text-[var(--dark)]">
              {line1}
            </p>
            <p className="text-[28px] md:text-[36px] lg:text-[42px] font-medium leading-[1.15] tracking-tight text-[var(--dark)]">
              {line2} <span className="text-[var(--gold)]">{highlight}</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
