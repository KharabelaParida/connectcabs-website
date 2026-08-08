import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-16 pb-6">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-16">

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

          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Company</div>
            <div className="flex flex-col gap-3.5">
              <Link href="#about" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">About</Link>
              <Link href="#technology" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Technology</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Safety</Link>
              <Link href="#fleet" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Fleet</Link>
              
            </div>
          </div>

          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Legal</div>
            <div className="flex flex-col gap-3.5">
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[13px] text-[var(--muted)] hover:text-[var(--dark)] transition-colors">Terms of Use</Link>
            </div>
          </div>

          <div>
            <div className="text-[15px] font-semibold text-[var(--dark)] mb-5">Contact</div>
            <div className="flex flex-col gap-3.5">
              <span className="text-[13px] text-[var(--muted)]">connectcabso@gmail.com</span>
              <span className="text-[13px] text-[var(--muted)]">+91-8277840505</span>
              <span className="text-[13px] text-[var(--muted)]">Bhubaneswar, Odisha</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--off-white)] pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[14px] font-bold text-[var(--dark)]">CONNECT<span className="text-[var(--gold)]">CABS</span></span>
          <span className="text-[12px] text-[var(--muted-light)]">
            © {new Date().getFullYear()} Connect Cabs Private Limited
          </span>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-[var(--off-white)] flex items-center justify-center hover:bg-[var(--border)] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#64748B" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}