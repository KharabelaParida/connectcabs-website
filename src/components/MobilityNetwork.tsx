"use client";

import FadeIn from "./FadeIn";

export default function MobilityNetwork() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <span className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--label-gold)] block mb-3.5">
            Mobility network
          </span>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-[var(--dark)] mb-8 leading-[1.15]">
            The network behind every journey.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-[var(--off-white)] rounded-3xl p-4 sm:p-8 md:p-12 flex flex-col items-center overflow-x-auto">
            <svg viewBox="0 0 740 420" className="w-full min-w-[600px] sm:min-w-0" style={{ maxWidth: 740 }}>

              {/* Hex grid background */}
              <g stroke="#0B3B78" strokeOpacity="0.04" strokeWidth="0.8" fill="none">
                <path d="M 50,40 L 85,20 L 120,40 L 120,80 L 85,100 L 50,80 Z" />
                <path d="M 120,40 L 155,20 L 190,40 L 190,80 L 155,100 L 120,80 Z" />
                <path d="M 190,40 L 225,20 L 260,40 L 260,80 L 225,100 L 190,80 Z" />
                <path d="M 260,40 L 295,20 L 330,40 L 330,80 L 295,100 L 260,80 Z" />
                <path d="M 330,40 L 365,20 L 400,40 L 400,80 L 365,100 L 330,80 Z" />
                <path d="M 400,40 L 435,20 L 470,40 L 470,80 L 435,100 L 400,80 Z" />
                <path d="M 470,40 L 505,20 L 540,40 L 540,80 L 505,100 L 470,80 Z" />
                <path d="M 540,40 L 575,20 L 610,40 L 610,80 L 575,100 L 540,80 Z" />
                <path d="M 610,40 L 645,20 L 680,40 L 680,80 L 645,100 L 610,80 Z" />
                <path d="M 85,100 L 120,80 L 155,100 L 155,140 L 120,160 L 85,140 Z" />
                <path d="M 155,100 L 190,80 L 225,100 L 225,140 L 190,160 L 155,140 Z" />
                <path d="M 225,100 L 260,80 L 295,100 L 295,140 L 260,160 L 225,140 Z" />
                <path d="M 295,100 L 330,80 L 365,100 L 365,140 L 330,160 L 295,140 Z" />
                <path d="M 365,100 L 400,80 L 435,100 L 435,140 L 400,160 L 365,140 Z" />
                <path d="M 435,100 L 470,80 L 505,100 L 505,140 L 470,160 L 435,140 Z" />
                <path d="M 505,100 L 540,80 L 575,100 L 575,140 L 540,160 L 505,140 Z" />
                <path d="M 575,100 L 610,80 L 645,100 L 645,140 L 610,160 L 575,140 Z" />
                <path d="M 50,160 L 85,140 L 120,160 L 120,200 L 85,220 L 50,200 Z" />
                <path d="M 120,160 L 155,140 L 190,160 L 190,200 L 155,220 L 120,200 Z" />
                <path d="M 190,160 L 225,140 L 260,160 L 260,200 L 225,220 L 190,200 Z" />
                <path d="M 260,160 L 295,140 L 330,160 L 330,200 L 295,220 L 260,200 Z" />
                <path d="M 330,160 L 365,140 L 400,160 L 400,200 L 365,220 L 330,200 Z" />
                <path d="M 400,160 L 435,140 L 470,160 L 470,200 L 435,220 L 400,200 Z" />
                <path d="M 470,160 L 505,140 L 540,160 L 540,200 L 505,220 L 470,200 Z" />
                <path d="M 540,160 L 575,140 L 610,160 L 610,200 L 575,220 L 540,200 Z" />
                <path d="M 610,160 L 645,140 L 680,160 L 680,200 L 645,220 L 610,200 Z" />
                <path d="M 85,220 L 120,200 L 155,220 L 155,260 L 120,280 L 85,260 Z" />
                <path d="M 155,220 L 190,200 L 225,220 L 225,260 L 190,280 L 155,260 Z" />
                <path d="M 225,220 L 260,200 L 295,220 L 295,260 L 260,280 L 225,260 Z" />
                <path d="M 295,220 L 330,200 L 365,220 L 365,260 L 330,280 L 295,260 Z" />
                <path d="M 365,220 L 400,200 L 435,220 L 435,260 L 400,280 L 365,260 Z" />
                <path d="M 435,220 L 470,200 L 505,220 L 505,260 L 470,280 L 435,260 Z" />
                <path d="M 505,220 L 540,200 L 575,220 L 575,260 L 540,280 L 505,260 Z" />
                <path d="M 575,220 L 610,200 L 645,220 L 645,260 L 610,280 L 575,260 Z" />
                <path d="M 50,280 L 85,260 L 120,280 L 120,320 L 85,340 L 50,320 Z" />
                <path d="M 120,280 L 155,260 L 190,280 L 190,320 L 155,340 L 120,320 Z" />
                <path d="M 190,280 L 225,260 L 260,280 L 260,320 L 225,340 L 190,320 Z" />
                <path d="M 260,280 L 295,260 L 330,280 L 330,320 L 295,340 L 260,320 Z" />
                <path d="M 330,280 L 365,260 L 400,280 L 400,320 L 365,340 L 330,320 Z" />
                <path d="M 400,280 L 435,260 L 470,280 L 470,320 L 435,340 L 400,320 Z" />
                <path d="M 470,280 L 505,260 L 540,280 L 540,320 L 505,340 L 470,320 Z" />
                <path d="M 540,280 L 575,260 L 610,280 L 610,320 L 575,340 L 540,320 Z" />
                <path d="M 610,280 L 645,260 L 680,280 L 680,320 L 645,340 L 610,320 Z" />
              </g>

              {/* Connecting paths supply → hub */}
              <path d="M 126,110 Q 220,110 325,185" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="6,4" />
              <path d="M 126,280 Q 220,280 325,210" fill="none" stroke="#0B3B78" strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="6,4" />
              <path d="M 240,195 Q 280,195 325,195" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeOpacity="0.4" />

              {/* Connecting paths hub → demand */}
              <path d="M 405,180 Q 500,110 590,110" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6,4" />
              <path d="M 405,195 Q 500,195 590,195" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6,4" />
              <path d="M 405,210 Q 500,280 590,280" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6,4" />

              {/* Shadows */}
              <defs>
                <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0B1F3A" floodOpacity="0.06" />
                </filter>
                <filter id="hubShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="6" stdDeviation="16" floodColor="#0B3B78" floodOpacity="0.2" />
                </filter>
              </defs>

              {/* Supply nodes */}
              <circle cx="90" cy="110" r="36" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#nodeShadow)" />
              <text x="90" y="106" textAnchor="middle" fill="#0B1F3A" fontSize="11" fontWeight="600">Own</text>
              <text x="90" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">fleet</text>

              <circle cx="90" cy="280" r="36" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#nodeShadow)" />
              <text x="90" y="276" textAnchor="middle" fill="#0B1F3A" fontSize="11" fontWeight="600">Partner</text>
              <text x="90" y="290" textAnchor="middle" fill="#94A3B8" fontSize="9">fleet</text>

              <circle cx="210" cy="195" r="30" fill="#FFF4D6" stroke="#FFB000" strokeWidth="1.5" />
              <text x="210" y="198" textAnchor="middle" fill="#8A5B00" fontSize="10" fontWeight="600">Drivers</text>

              {/* Center hub */}
              <circle cx="365" cy="195" r="48" fill="#0B3B78" stroke="#FFB000" strokeWidth="2.5" filter="url(#hubShadow)" />
              <text x="365" y="190" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Connect</text>
              <text x="365" y="207" textAnchor="middle" fill="#FFB000" fontSize="13" fontWeight="700">Cabs</text>

              {/* Demand nodes */}
              <circle cx="625" cy="110" r="36" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#nodeShadow)" />
              <text x="625" y="106" textAnchor="middle" fill="#0B1F3A" fontSize="11" fontWeight="600">Corporate</text>
              <text x="625" y="120" textAnchor="middle" fill="#94A3B8" fontSize="9">clients</text>

              <circle cx="625" cy="195" r="36" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#nodeShadow)" />
              <text x="625" y="191" textAnchor="middle" fill="#0B1F3A" fontSize="11" fontWeight="600">Employees</text>
              <text x="625" y="205" textAnchor="middle" fill="#94A3B8" fontSize="9">riders</text>

              <circle cx="625" cy="280" r="36" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#nodeShadow)" />
              <text x="625" y="276" textAnchor="middle" fill="#0B1F3A" fontSize="11" fontWeight="600">Executives</text>
              <text x="625" y="290" textAnchor="middle" fill="#94A3B8" fontSize="9">premium</text>

              {/* Hub pulse */}
              <circle cx="365" cy="195" r="48" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="48;72;48" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.2;0" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="365" cy="195" r="48" fill="none" stroke="#FFB000" strokeWidth="0.8" opacity="0">
                <animate attributeName="r" values="48;90;48" dur="3s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.08;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </circle>

              {/* Node pulses */}
              <circle cx="625" cy="110" r="36" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="36;52;36" dur="4s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="opacity" values="0;0.12;0" dur="4s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="625" cy="195" r="36" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="36;52;36" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="opacity" values="0;0.1;0" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="210" cy="195" r="30" fill="none" stroke="#FFB000" strokeWidth="1" opacity="0">
                <animate attributeName="r" values="30;46;30" dur="3s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0;0.15;0" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Moving dots */}
              <circle r="5" fill="#FFB000" opacity="0.7">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 126,110 Q 220,110 325,185" />
              </circle>
              <circle r="14" fill="#FFB000" opacity="0.08">
                <animateMotion dur="3s" repeatCount="indefinite" path="M 126,110 Q 220,110 325,185" />
              </circle>

              <circle r="4" fill="#0B3B78" opacity="0.5">
                <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s" path="M 126,280 Q 220,280 325,210" />
              </circle>

              <circle r="4" fill="#FFB000" opacity="0.8">
                <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M 240,195 Q 280,195 325,195" />
              </circle>

              <circle r="5" fill="#FFB000" opacity="0.6">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 405,180 Q 500,110 590,110" />
              </circle>
              <circle r="14" fill="#FFB000" opacity="0.06">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M 405,180 Q 500,110 590,110" />
              </circle>

              <circle r="4" fill="#FFB000" opacity="0.5">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M 405,195 Q 500,195 590,195" />
              </circle>

              <circle r="4" fill="#FFB000" opacity="0.4">
                <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M 405,210 Q 500,280 590,280" />
              </circle>

              {/* Bottom labels */}
              <text x="150" y="400" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="500">Supply</text>
              <circle cx="258" cy="397" r="2" fill="#E2E8F0" />
              <text x="365" y="400" textAnchor="middle" fill="#FFB000" fontSize="11" fontWeight="600">Platform</text>
              <circle cx="473" cy="397" r="2" fill="#E2E8F0" />
              <text x="580" y="400" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="500">Demand</text>

            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}