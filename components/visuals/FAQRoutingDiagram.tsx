export default function FAQRoutingDiagram() {
  return (
    <figure className="visual-card-strong overflow-hidden border-authority-on-dark/25 bg-authority-on-dark/5" aria-hidden="true">
      <div className="relative aspect-[4/3] p-5 md:p-7">
        <svg viewBox="0 0 640 480" className="h-full w-full" role="img">
          <defs>
            <linearGradient id="faq-card-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--surface-light)" stopOpacity="0.98" />
              <stop offset="1" stopColor="var(--surface-light-alt)" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="faq-route-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--support)" stopOpacity="0.92" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0.86" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="640" height="480" rx="34" fill="var(--authority-bg)" opacity="0.14" />
          <path d="M120 238 C190 112 410 118 500 232" fill="none" stroke="var(--authority-on-dark)" strokeWidth="2" strokeDasharray="10 14" opacity="0.22" />
          <path d="M122 240 C210 356 430 344 502 232" fill="none" stroke="var(--authority-on-dark)" strokeWidth="2" strokeDasharray="10 14" opacity="0.2" />

          <g filter="drop-shadow(0 18px 34px rgba(0,0,0,0.18))">
            <rect x="46" y="154" width="176" height="178" rx="22" fill="url(#faq-card-fill)" />
            <rect x="70" y="184" width="68" height="10" rx="5" fill="var(--accent)" opacity="0.85" />
            <rect x="70" y="214" width="120" height="8" rx="4" fill="var(--authority)" opacity="0.42" />
            <rect x="70" y="235" width="96" height="8" rx="4" fill="var(--authority)" opacity="0.28" />
            <circle cx="184" cy="292" r="18" fill="var(--accent)" opacity="0.18" />
            <path d="M178 292 L184 298 L196 284" fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <g filter="drop-shadow(0 18px 34px rgba(0,0,0,0.18))">
            <rect x="264" y="74" width="172" height="126" rx="20" fill="url(#faq-card-fill)" />
            <rect x="288" y="104" width="66" height="10" rx="5" fill="var(--support)" opacity="0.8" />
            <rect x="288" y="132" width="106" height="8" rx="4" fill="var(--authority)" opacity="0.34" />
            <rect x="288" y="153" width="78" height="8" rx="4" fill="var(--authority)" opacity="0.24" />
          </g>

          <g filter="drop-shadow(0 18px 34px rgba(0,0,0,0.18))">
            <rect x="264" y="280" width="172" height="126" rx="20" fill="url(#faq-card-fill)" />
            <rect x="288" y="310" width="72" height="10" rx="5" fill="var(--accent)" opacity="0.78" />
            <rect x="288" y="338" width="108" height="8" rx="4" fill="var(--authority)" opacity="0.34" />
            <rect x="288" y="359" width="88" height="8" rx="4" fill="var(--authority)" opacity="0.24" />
          </g>

          <g filter="drop-shadow(0 18px 34px rgba(0,0,0,0.18))">
            <rect x="476" y="154" width="116" height="178" rx="24" fill="url(#faq-route-fill)" />
            <circle cx="534" cy="206" r="28" fill="var(--authority-on-dark)" opacity="0.22" />
            <path d="M522 207 L532 217 L550 195" fill="none" stroke="var(--authority-on-dark)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="508" y="264" width="66" height="8" rx="4" fill="var(--authority-on-dark)" opacity="0.62" />
            <rect x="516" y="286" width="50" height="8" rx="4" fill="var(--authority-on-dark)" opacity="0.42" />
          </g>

          <path d="M222 244 L264 154" fill="none" stroke="var(--authority-on-dark)" strokeWidth="4" strokeLinecap="round" opacity="0.58" />
          <path d="M222 244 L264 340" fill="none" stroke="var(--authority-on-dark)" strokeWidth="4" strokeLinecap="round" opacity="0.52" />
          <path d="M436 138 L476 216" fill="none" stroke="var(--authority-on-dark)" strokeWidth="4" strokeLinecap="round" opacity="0.58" />
          <path d="M436 344 L476 254" fill="none" stroke="var(--authority-on-dark)" strokeWidth="4" strokeLinecap="round" opacity="0.52" />

          <circle cx="222" cy="244" r="11" fill="var(--accent)" />
          <circle cx="264" cy="154" r="9" fill="var(--support)" />
          <circle cx="264" cy="340" r="9" fill="var(--accent)" />
          <circle cx="476" cy="216" r="9" fill="var(--support)" />
          <circle cx="476" cy="254" r="9" fill="var(--accent)" />
        </svg>
      </div>
    </figure>
  );
}
