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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/82 border-b border-[var(--border)] shadow-[0_2px_16px_rgba(11,31,58,0.06)]"
          : "bg-transparent border-b border-[#F1F5F9]"
        }`}
      style={{ backdropFilter: scrolled ? "blur(16px)" : "none", WebkitBackdropFilter: scrolled ? "blur(16px)" : "none" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-4">

        {/* Logo: icon + text */}
        <Link href="/" className="flex items-center gap-.5">
          <Image src="/logo-icon.png" alt="ConnectCabs" width={200} height={200} className="h-13 w-auto" priority />
          <span className="text-[22px] font-extrabold text-[var(--dark)] tracking-tight">
            CONNECT<span className="text-[var(--gold)]">CABS</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[14px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          
          <Link
            href="#contact"
            className="bg-[var(--dark)] text-white text-[13px] font-medium
              px-6 py-2.5 rounded-lg hover:scale-[1.03] transition-transform"
          >
            Request a quote
          </Link>
        </div>

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
          <div className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white rounded-2xl
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
      </div>
    </nav>
  );
}