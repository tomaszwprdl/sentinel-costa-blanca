/**
 * Report anatomy — a large proof module that dissects the structural
 * inspection report: a schematic report sheet with numbered anatomy pins,
 * paired with matching callout entries. The schematic is abstract (rules and
 * blocks, no fabricated content); callout text arrives via props.
 */

type AnatomyItem = {
  title: string;
  body: string;
};

type ReportAnatomyProps = {
  items: AnatomyItem[];
  className?: string;
};

const PIN_POSITIONS = [
  { x: 332, y: 96 },
  { x: 332, y: 236 },
  { x: 332, y: 384 },
  { x: 332, y: 472 },
  { x: 332, y: 540 },
];

export default function ReportAnatomy({ items, className = '' }: ReportAnatomyProps) {
  return (
    <div className={`report-anatomy ${className}`.trim()}>
      <figure className="report-anatomy__sheet" aria-hidden="true">
        <svg viewBox="0 0 380 600" focusable="false">
          {/* sheet */}
          <rect x="14" y="14" width="304" height="572" rx="14" fill="var(--surface-card)" stroke="var(--structural-light)" strokeWidth="1.5" />
          <rect x="14" y="14" width="304" height="6" rx="3" fill="var(--copper)" opacity="0.85" />

          {/* 01 — header / summary */}
          <rect x="40" y="52" width="132" height="13" rx="6" fill="var(--authority)" opacity="0.78" />
          <rect x="40" y="80" width="190" height="8" rx="4" fill="var(--authority)" opacity="0.2" />
          <rect x="40" y="98" width="156" height="8" rx="4" fill="var(--authority)" opacity="0.15" />
          <rect x="232" y="48" width="58" height="20" rx="10" fill="none" stroke="var(--support)" strokeWidth="1.4" />
          <rect x="244" y="56" width="34" height="5" rx="2.5" fill="var(--support)" opacity="0.7" />

          {/* 02 — checklist */}
          <rect x="40" y="140" width="250" height="138" rx="10" fill="var(--surface-light-alt)" stroke="var(--structural-light)" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(58 ${162 + i * 28})`}>
              <rect width="108" height="7" rx="3.5" y="3" fill="var(--authority)" opacity="0.24" />
              <circle cx="196" cy="6" r="9" fill="none" stroke="var(--support)" strokeWidth="2.4" />
              <path d="M191.5 6l3.5 3.5 7.5-9" fill="none" stroke="var(--support)" strokeWidth="2.4" />
            </g>
          ))}

          {/* 03 — photo evidence */}
          <g transform="translate(40 306)">
            {[0, 1, 2].map((i) => (
              <g key={i} transform={`translate(${i * 88} 0)`}>
                <rect width="74" height="74" rx="8" fill="var(--surface-light)" stroke="var(--structural-light)" />
                <path d="M12 54l16-18 12 12 12-16 12 22" fill="none" stroke="var(--sage)" strokeWidth="3" opacity="0.8" />
                <circle cx="22" cy="20" r="5" fill="var(--copper)" opacity="0.7" />
              </g>
            ))}
          </g>

          {/* 04 — notes */}
          <rect x="40" y="404" width="250" height="8" rx="4" fill="var(--authority)" opacity="0.18" />
          <rect x="40" y="422" width="214" height="8" rx="4" fill="var(--authority)" opacity="0.14" />
          <rect x="40" y="440" width="232" height="8" rx="4" fill="var(--authority)" opacity="0.14" />

          {/* 05 — next action: highlighted decision row */}
          <rect x="40" y="500" width="250" height="56" rx="10" fill="none" stroke="var(--clay)" strokeWidth="1.6" />
          <rect x="40" y="500" width="4" height="56" rx="2" fill="var(--clay)" opacity="0.85" />
          <rect x="58" y="514" width="120" height="8" rx="4" fill="var(--authority)" opacity="0.3" />
          <rect x="58" y="532" width="170" height="7" rx="3.5" fill="var(--authority)" opacity="0.16" />
          <path d="M262 528l10 0m0 0l-5-5m5 5l-5 5" stroke="var(--clay)" strokeWidth="2.2" fill="none" />

          {/* anatomy pins */}
          {PIN_POSITIONS.map((pin, index) => (
            <g key={pin.y}>
              <line x1="318" y1={pin.y} x2={pin.x} y2={pin.y} stroke="var(--copper)" strokeWidth="1.4" opacity="0.7" />
              <circle cx={pin.x + 16} cy={pin.y} r="15" fill="var(--authority-bg)" stroke="var(--copper)" strokeWidth="1.4" />
              <text
                x={pin.x + 16}
                y={pin.y + 4}
                textAnchor="middle"
                fontFamily="var(--font-sans), Arial, sans-serif"
                fontSize="11"
                fontWeight="800"
                fill="#fffaf2"
              >
                {String(index + 1).padStart(2, '0')}
              </text>
            </g>
          ))}
        </svg>
      </figure>

      <ol className="report-anatomy__callouts">
        {items.map((item, index) => (
          <li key={item.title} className="report-anatomy__callout">
            <span className="report-anatomy__pin" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h4 className="report-anatomy__callout-title">{item.title}</h4>
              <p className="report-anatomy__callout-body">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
