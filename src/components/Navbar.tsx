"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[min(94%,1200px)] z-50
        rounded-full px-5 md:px-7 py-2.5 flex items-center justify-between
        border transition-all duration-300
        ${scrolled
          ? "bg-white/85 border-[var(--border)] shadow-[0_4px_24px_rgba(11,31,58,0.08)]"
          : "bg-white/95 border-[var(--border)]/60"
        }`}
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <Link href="/" className="flex items-center gap-1.5">
        <Image src="/logo-n.png" alt="ConnectCabs" width={160} height={48} className="h-14 w-auto" priority />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="text-[13px] text-[var(--dark)] hover:text-[var(--navy)] transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Desktop CTA */}
      <Link
        href="#contact"
        className="hidden md:inline-block bg-[var(--dark)] text-white text-xs font-medium
          px-5 py-2.5 rounded-full hover:scale-[1.03] transition-transform"
      >
        Request a quote
      </Link>

      {/* Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2"
        aria-label="Menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl
          p-5 border border-[var(--border)] shadow-[0_16px_48px_rgba(11,31,58,0.12)]
          flex flex-col gap-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-[var(--dark)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-[var(--dark)] text-white text-sm font-medium py-3 rounded-xl text-center mt-1"
          >
            Request a quote
          </Link>
        </div>
      )}
    </nav>
  );
}
