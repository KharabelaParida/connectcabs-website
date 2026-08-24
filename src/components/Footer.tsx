"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-16 pb-6">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* ───── Footer Columns ───── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-16">

          {/* Column 1: Solutions */}
          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Solutions</div>
            <div className="flex flex-col gap-3.5">
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Employee Transport</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Executive Mobility</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Airport Transfers</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Managed Fleet</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Corporate Events</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Business Travel</Link>
            </div>
          </div>

          {/* Column 2: Industries */}
          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Industries</div>
            <div className="flex flex-col gap-3.5">
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Manufacturing</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Mining</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">IT & Technology</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Government</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Healthcare</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">SMEs & Startups</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Company</div>
            <div className="flex flex-col gap-3.5">
              <Link href="/about" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">About</Link>
              <Link href="#technology" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Technology</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Safety</Link>
              <Link href="#fleet" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Fleet</Link>
              <Link href="https://wa.me/918277840505?text=Hi%20Connect%20Cabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Legal</div>
            <div className="flex flex-col gap-3.5">
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Terms of Use</Link>
            </div>
          </div>

          {/* Column 5: Contact */}
          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Contact</div>
            <div className="flex flex-col gap-3.5">
              <span className="text-[13px] text-[var(--muted)]">hello@connectcabsindia.com</span>
              <span className="text-[13px] text-[var(--muted)]">+91-8277840505</span>
              <span className="text-[13px] text-[var(--muted)]">Bhubaneswar, Odisha, India</span>
            </div>
          </div>

        </div>

        {/* ───── Bottom Bar ───── */}
        <div className="border-t border-[var(--off-white)] pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Logo icon — scrolls to top on click */}
          
          <a  href="/"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="cursor-pointer"
          >
            <Image src="/logo-icon.png" alt="Connect Cabs" width={100} height={100} className="h-8 w-auto" />
          </a>

          {/* Copyright */}
          <span className="text-[12px] text-[var(--muted-light)]">
            © {new Date().getFullYear()} Connect Cabs Private Limited. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex gap-3">

            {/* LinkedIn */}
            <a href="#" target="_blank" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="#" target="_blank" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" target="_blank" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#64748B" stroke="none" />
              </svg>
            </a>

            {/* WhatsApp */}
            
            <a   href="https://wa.me/918277840505?text=Hi%20Connect%20Cabs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#64748B">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}