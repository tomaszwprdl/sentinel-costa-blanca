/**
 * Sentinel operational cartography layer.
 *
 * Decorative full-bleed SVG fields that give dark authority bands an
 * operational graphic identity: service-radius rings, cadastral parcels,
 * inspection routes, intake convergence, register rules. Every variant is
 * aria-hidden geometry — numerals, units and local place names only, so it
 * stays locale-neutral (precedent: ServiceAreaMap place labels).
 *
 * Line work draws in on reveal via `.gfx-field.is-visible`, toggled after
 * mount by OperationalField itself so SSR and hydration share the same initial
 * className; under prefers-reduced-motion the field reveals on the next frame.
 */

'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactElement } from 'react';

type OperationalFieldVariant =
  | 'cartography'
  | 'gate'
  | 'sequence'
  | 'intake'
  | 'index'
  | 'footprint'
  | 'inspection'
  | 'turnover'
  | 'classification';

type OperationalFieldProps = {
  variant: OperationalFieldVariant;
  className?: string;
};

const PAPER = '#fffaf2';
const COPPER = '#d29a57';
const SEA = '#5ba69e';
const CLAY = '#cd7a58';
const INKDEEP = '#0b1d33';

const FONT = 'var(--font-sans), Arial, sans-serif';

function coord(value: number, precision = 2): string {
  const factor = 10 ** precision;
  return (Math.round(value * factor) / factor).toFixed(precision);
}

function draw(index: number) {
  return { className: 'gfx-draw', style: { ['--gfx-i' as string]: index } as CSSProperties };
}

function RingTicks({
  cx,
  cy,
  r,
  count,
  length,
  stroke,
  opacity,
}: {
  cx: number;
  cy: number;
  r: number;
  count: number;
  length: number;
  stroke: string;
  opacity: number;
}) {
  const ticks = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x1 = cx + Math.cos(angle) * r;
    const y1 = cy + Math.sin(angle) * r;
    const x2 = cx + Math.cos(angle) * (r + length);
    const y2 = cy + Math.sin(angle) * (r + length);
    return (
      <line key={i} x1={coord(x1)} y1={coord(y1)} x2={coord(x2)} y2={coord(y2)} />
    );
  });
  return (
    <g stroke={stroke} strokeOpacity={opacity} strokeWidth="1">
      {ticks}
    </g>
  );
}

function CartographyField() {
  const cx = 800;
  const cy = 280;
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        {/* Left side stays quiet so hero copy keeps full contrast */}
        <linearGradient id="gfx-carto-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.46" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="0.72" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-carto-mask">
          <rect x="0" y="0" width="1200" height="700" fill="url(#gfx-carto-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-carto-mask)">
        {/* cadastral parcels — quiet structure under the approach route */}
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.12" strokeWidth="1.2">
          <path d="M 560 600 L 642 580 L 662 646 L 578 668 Z" />
          <path d="M 676 568 L 752 552 L 768 608 L 690 626 Z" />
          <path d="M 612 510 L 672 498 L 684 544 L 622 558 Z" />
        </g>

        {/* jurisdiction rings */}
        <circle {...draw(0)} cx={cx} cy={cy} r="290" fill="none" stroke={PAPER} strokeOpacity="0.18" strokeWidth="1.4" pathLength={1} />
        <circle {...draw(2)} cx={cx} cy={cy} r="205" fill="none" stroke={COPPER} strokeOpacity="0.52" strokeWidth="1.6" strokeDasharray="0.012 0.014" pathLength={1} />
        <circle {...draw(3)} cx={cx} cy={cy} r="125" fill="none" stroke={PAPER} strokeOpacity="0.26" strokeWidth="1.2" strokeDasharray="0.006 0.018" pathLength={1} />
        <g className="gfx-fade">
          <RingTicks cx={cx} cy={cy} r={290} count={36} length={9} stroke={PAPER} opacity={0.18} />
        </g>

        {/* inspection route into the operational centre */}
        <path
          {...draw(1)}
          d="M 520 690 C 560 600 600 510 660 440 C 700 392 750 330 792 292"
          fill="none"
          stroke={COPPER}
          strokeOpacity="0.62"
          strokeWidth="1.8"
          pathLength={1}
        />

        {/* numbered route markers */}
        <g className="gfx-fade">
          <g>
            <circle cx="610" cy="500" r="15" fill={INKDEEP} stroke={COPPER} strokeOpacity="0.75" strokeWidth="1.4" />
            <text x="610" y="504" textAnchor="middle" fontFamily={FONT} fontSize="11" fontWeight="800" fill={PAPER} fillOpacity="0.92">01</text>
          </g>
          <g>
            <circle cx="724" cy="368" r="15" fill={INKDEEP} stroke={COPPER} strokeOpacity="0.75" strokeWidth="1.4" />
            <text x="724" y="372" textAnchor="middle" fontFamily={FONT} fontSize="11" fontWeight="800" fill={PAPER} fillOpacity="0.92">02</text>
          </g>
        </g>

        {/* operational centre: crosshair + datum */}
        <g className="gfx-fade">
          <line x1={cx - 26} y1={cy} x2={cx + 26} y2={cy} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <line x1={cx} y1={cy - 26} x2={cx} y2={cy + 26} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="5" fill={COPPER} />
          <circle cx={cx} cy={cy} r="12" fill="none" stroke={PAPER} strokeOpacity="0.5" strokeWidth="1.2" />
          <text x={cx + 24} y={cy - 16} fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="0.08em" fill={PAPER} fillOpacity="0.78">TORREVIEJA</text>
        </g>

        {/* survey annotations — locale-neutral units */}
        <g className="gfx-fade" fontFamily={FONT} fontSize="11" fontWeight="700" letterSpacing="0.1em" fill={PAPER} fillOpacity="0.34">
          <text x="980" y="132" fill={COPPER} fillOpacity="0.8">50–70 KM</text>
          <text x="1098" y="64">37.97° N</text>
          <text x="1098" y="668">0.68° W</text>
        </g>
        <g className="gfx-fade" stroke={PAPER} strokeOpacity="0.22" strokeWidth="1">
          <line x1="1146" y1="76" x2="1146" y2="128" />
          <line x1="1141" y1="76" x2="1151" y2="76" />
          <line x1="1141" y1="128" x2="1151" y2="128" />
        </g>
      </g>
    </svg>
  );
}

function GateField() {
  // Composition for the homepage diagnostic gate: the copy block owns the
  // lower-left, the choice panel owns the right — so the instrument lives in
  // the open photo band along the top, fading out toward the copy.
  const cx = 560;
  const cy = 120;
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-gate-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.4" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="0.78" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="gfx-gate-mask">
          <rect x="0" y="0" width="1200" height="700" fill="url(#gfx-gate-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-gate-mask)">
        {/* jurisdiction rings sweeping in from the top band */}
        <circle {...draw(0)} cx={cx} cy={cy} r="265" fill="none" stroke={PAPER} strokeOpacity="0.2" strokeWidth="1.4" pathLength={1} />
        <circle {...draw(1)} cx={cx} cy={cy} r="186" fill="none" stroke={COPPER} strokeOpacity="0.55" strokeWidth="1.6" strokeDasharray="0.012 0.014" pathLength={1} />
        <circle {...draw(2)} cx={cx} cy={cy} r="112" fill="none" stroke={PAPER} strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="0.006 0.018" pathLength={1} />
        <g className="gfx-fade">
          <RingTicks cx={cx} cy={cy} r={265} count={32} length={9} stroke={PAPER} opacity={0.2} />
        </g>

        {/* operational centre */}
        <g className="gfx-fade">
          <line x1={cx - 24} y1={cy} x2={cx + 24} y2={cy} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <line x1={cx} y1={cy - 24} x2={cx} y2={cy + 24} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="4.5" fill={COPPER} />
          <circle cx={cx} cy={cy} r="11" fill="none" stroke={PAPER} strokeOpacity="0.5" strokeWidth="1.2" />
        </g>

        {/* radius annotation along the copper ring */}
        <line {...draw(3)} x1={cx} y1={cy} x2={cx + 186} y2={cy + 62} stroke={PAPER} strokeOpacity="0.34" strokeWidth="1.1" pathLength={1} />
        <text className="gfx-fade" x={cx + 116} y={cy + 24} fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="0.1em" fill={COPPER} fillOpacity="0.85">50–70 KM</text>

        {/* survey coordinates in the open top-left corner */}
        <g className="gfx-fade" fontFamily={FONT} fontSize="11" fontWeight="700" letterSpacing="0.1em" fill={PAPER} fillOpacity="0.4">
          <text x="56" y="58">37.97° N</text>
          <text x="56" y="78">0.68° W</text>
        </g>

        {/* covered localities */}
        <g className="gfx-fade" fill={PAPER} fillOpacity="0.5">
          <circle cx={cx - 132} cy={cy + 64} r="3.5" />
          <circle cx={cx + 102} cy={cy - 52} r="3.5" />
          <circle cx={cx - 38} cy={cy + 138} r="3.5" />
        </g>
      </g>
    </svg>
  );
}

function SequenceField() {
  const y = 480;
  const stations = [180, 460, 740, 1020];
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-seq-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="0.72" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-seq-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-seq-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-seq-mask)">
        {/* datum line */}
        <line {...draw(0)} x1="60" y1={y} x2="1140" y2={y} stroke={PAPER} strokeOpacity="0.2" strokeWidth="1.2" pathLength={1} />
        {/* active route */}
        <line {...draw(1)} x1="60" y1={y} x2={stations[3]} y2={y} stroke={COPPER} strokeOpacity="0.55" strokeWidth="1.8" pathLength={1} />

        {/* stations: numbered, with object glyphs alongside — report · key · door · check */}
        {stations.map((x, i) => (
          <g key={x}>
            <circle {...draw(2 + i)} cx={x} cy={y} r="24" fill={INKDEEP} stroke={PAPER} strokeOpacity="0.4" strokeWidth="1.4" pathLength={1} />
            <g className="gfx-fade">
              <text x={x} y={y + 4.5} textAnchor="middle" fontFamily={FONT} fontSize="13" fontWeight="800" fill={PAPER} fillOpacity="0.92">
                {`0${i + 1}`}
              </text>
            </g>
          </g>
        ))}
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.45" strokeWidth="1.4">
          {/* report sheet */}
          <g transform={`translate(${stations[0] + 52} ${y})`}>
            <rect x="-9" y="-13" width="18" height="26" rx="2" />
            <line x1="-4" y1="-5" x2="4" y2="-5" />
            <line x1="-4" y1="0" x2="4" y2="0" />
            <line x1="-4" y1="5" x2="1" y2="5" />
          </g>
          {/* key */}
          <g transform={`translate(${stations[1] + 52} ${y - 2})`}>
            <circle cx="-4" cy="-5" r="6" />
            <line x1="0" y1="-1" x2="10" y2="9" />
            <line x1="6" y1="9" x2="10" y2="9" />
          </g>
          {/* doorway */}
          <g transform={`translate(${stations[2] + 52} ${y})`}>
            <path d="M -8 13 V -9 Q -8 -13 -5 -13 H 5 Q 8 -13 8 -9 V 13" />
            <circle cx="3" cy="2" r="1.4" fill={PAPER} fillOpacity="0.45" stroke="none" />
          </g>
          {/* verification check */}
          <g transform={`translate(${stations[3] + 52} ${y})`}>
            <circle cx="0" cy="0" r="11" />
            <path d="M -4 0.5 L -1 3.5 L 5 -3.5" />
          </g>
        </g>

        {/* forward arrow */}
        <g className="gfx-fade" stroke={COPPER} strokeOpacity="0.7" strokeWidth="1.8" fill="none">
          <path d={`M 1106 ${y - 8} L 1122 ${y} L 1106 ${y + 8}`} />
        </g>

        {/* interval ticks above the datum */}
        <g className="gfx-fade" stroke={PAPER} strokeOpacity="0.18" strokeWidth="1">
          {Array.from({ length: 21 }, (_, i) => 80 + i * 50).map((x) => (
            <line key={x} x1={x} y1={y - 40} x2={x} y2={y - 32} />
          ))}
        </g>
      </g>
    </svg>
  );
}

function IntakeField() {
  const nx = 700;
  const ny = 290;
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-intake-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.34" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="0.54" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-intake-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-intake-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-intake-mask)">
        {/* three intake routes converging on the review node */}
        <path {...draw(0)} d={`M 40 130 C 320 150 560 210 ${nx - 78} ${ny - 30}`} fill="none" stroke={PAPER} strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="0.014 0.012" pathLength={1} />
        <path {...draw(1)} d={`M 40 300 C 300 300 560 300 ${nx - 92} ${ny}`} fill="none" stroke={COPPER} strokeOpacity="0.55" strokeWidth="1.6" pathLength={1} />
        <path {...draw(2)} d={`M 40 480 C 320 460 560 392 ${nx - 78} ${ny + 32}`} fill="none" stroke={PAPER} strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="0.014 0.012" pathLength={1} />

        {/* entry registration ticks */}
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.34" strokeWidth="1.3">
          <rect x="118" y="124" width="11" height="11" transform="rotate(8 123 129)" />
          <rect x="112" y="294" width="11" height="11" />
          <rect x="118" y="470" width="11" height="11" transform="rotate(-8 123 475)" />
        </g>

        {/* structured review node: ring + dossier sheet */}
        <circle {...draw(3)} cx={nx} cy={ny} r="64" fill="none" stroke={PAPER} strokeOpacity="0.28" strokeWidth="1.2" strokeDasharray="0.01 0.014" pathLength={1} />
        <circle {...draw(4)} cx={nx} cy={ny} r="38" fill="none" stroke={COPPER} strokeOpacity="0.65" strokeWidth="1.5" pathLength={1} />
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.62" strokeWidth="1.4">
          <rect x={nx - 13} y={ny - 17} width="26" height="34" rx="2.5" fill={INKDEEP} />
          <line x1={nx - 6} y1={ny - 7} x2={nx + 6} y2={ny - 7} />
          <line x1={nx - 6} y1={ny} x2={nx + 6} y2={ny} />
          <line x1={nx - 6} y1={ny + 7} x2={nx + 2} y2={ny + 7} />
        </g>

        {/* outcome line — review opens a documented path */}
        <line {...draw(5)} x1={nx + 70} y1={ny} x2="1140" y2={ny} stroke={COPPER} strokeOpacity="0.55" strokeWidth="1.8" pathLength={1} />
        <g className="gfx-fade" stroke={COPPER} strokeOpacity="0.7" strokeWidth="1.8" fill="none">
          <path d={`M 1108 ${ny - 8} L 1124 ${ny} L 1108 ${ny + 8}`} />
        </g>

        {/* response-window scale */}
        <g className="gfx-fade" stroke={PAPER} strokeOpacity="0.2" strokeWidth="1">
          <line x1={nx - 64} y1={ny + 110} x2={nx + 64} y2={ny + 110} />
          <line x1={nx - 64} y1={ny + 104} x2={nx - 64} y2={ny + 116} />
          <line x1={nx} y1={ny + 106} x2={nx} y2={ny + 114} />
          <line x1={nx + 64} y1={ny + 104} x2={nx + 64} y2={ny + 116} />
        </g>
        <text className="gfx-fade" x={nx} y={ny + 134} textAnchor="middle" fontFamily={FONT} fontSize="10.5" fontWeight="800" letterSpacing="0.12em" fill={PAPER} fillOpacity="0.34">24–48 H</text>
      </g>
    </svg>
  );
}

function IndexField() {
  // Vertical answer register in the seam between the FAQ copy and the hero
  // figure — a ruled index column with one resolved entry.
  const rows = [140, 204, 268, 332, 396, 460];
  const mx = 610;
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-index-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="0.82" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="gfx-index-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-index-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-index-mask)">
        {/* ruled register margin */}
        <line {...draw(0)} x1={mx - 18} y1="116" x2={mx - 18} y2="492" stroke={CLAY} strokeOpacity="0.5" strokeWidth="1.4" pathLength={1} />

        {/* register entries: marker + stub rule; one entry resolved (copper) */}
        {rows.map((y, i) => {
          const active = i === 2;
          return (
            <g key={y}>
              <rect
                className="gfx-fade"
                x={mx}
                y={y - 6}
                width="12"
                height="12"
                fill={active ? COPPER : 'none'}
                fillOpacity={active ? 0.85 : 1}
                stroke={active ? COPPER : PAPER}
                strokeOpacity={active ? 0.9 : 0.34}
                strokeWidth="1.3"
              />
              <line
                {...draw(1 + i)}
                x1={mx + 26}
                y1={y}
                x2={active ? mx + 64 : mx + 52 - (i % 3) * 10}
                y2={y}
                stroke={active ? COPPER : PAPER}
                strokeOpacity={active ? 0.66 : 0.24}
                strokeWidth={active ? 1.8 : 1.2}
                pathLength={1}
              />
              {active && (
                <path
                  className="gfx-fade"
                  d={`M ${mx + 2.5} ${y - 0.5} L ${mx + 5.5} ${y + 2.5} L ${mx + 10} ${y - 3.5}`}
                  fill="none"
                  stroke={INKDEEP}
                  strokeWidth="1.7"
                />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function FootprintField() {
  const cx = 800;
  const cy = 350;
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-foot-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.34" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-foot-mask">
          <rect x="0" y="0" width="1200" height="700" fill="url(#gfx-foot-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-foot-mask)">
        {/* coastline datum */}
        <path
          {...draw(0)}
          d="M 560 0 C 640 120 660 240 700 330 C 744 428 820 520 920 600 C 980 648 1040 676 1100 700"
          fill="none"
          stroke={PAPER}
          strokeOpacity="0.3"
          strokeWidth="2.4"
          pathLength={1}
        />
        <path
          className="gfx-fade"
          d="M 560 0 C 640 120 660 240 700 330 C 744 428 820 520 920 600 C 980 648 1040 676 1100 700"
          fill="none"
          stroke={SEA}
          strokeOpacity="0.3"
          strokeWidth="7"
          transform="translate(14 0)"
        />

        {/* operating footprint rings */}
        <circle {...draw(1)} cx={cx} cy={cy} r="250" fill="none" stroke={COPPER} strokeOpacity="0.5" strokeWidth="1.6" strokeDasharray="0.012 0.013" pathLength={1} />
        <circle {...draw(2)} cx={cx} cy={cy} r="160" fill="none" stroke={PAPER} strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="0.006 0.016" pathLength={1} />
        <g className="gfx-fade">
          <RingTicks cx={cx} cy={cy} r={250} count={28} length={9} stroke={PAPER} opacity={0.18} />
        </g>

        {/* operational centre */}
        <g className="gfx-fade">
          <line x1={cx - 22} y1={cy} x2={cx + 22} y2={cy} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 22} stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="4.5" fill={COPPER} />
          <text x={cx + 20} y={cy - 14} fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="0.08em" fill={PAPER} fillOpacity="0.78">TORREVIEJA</text>
        </g>

        {/* radius annotation */}
        <line {...draw(3)} x1={cx} y1={cy} x2={cx + 250} y2={cy} stroke={PAPER} strokeOpacity="0.32" strokeWidth="1.2" pathLength={1} />
        <text className="gfx-fade" x={cx + 124} y={cy - 10} textAnchor="middle" fontFamily={FONT} fontSize="11" fontWeight="800" letterSpacing="0.1em" fill={COPPER} fillOpacity="0.8">50–70 KM</text>

        {/* covered localities inside the footprint */}
        <g className="gfx-fade" fill={PAPER} fillOpacity="0.4">
          <circle cx={cx - 116} cy={cy - 86} r="4" />
          <circle cx={cx + 64} cy={cy + 128} r="4" />
          <circle cx={cx - 60} cy={cy + 102} r="4" />
          <circle cx={cx + 132} cy={cy - 118} r="4" />
        </g>
      </g>
    </svg>
  );
}

function InspectionField() {
  const cx = 820;
  const cy = 300;
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-insp-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.38" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.66" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-insp-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-insp-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-insp-mask)">
        {/* calm cadence rings — scheduled presence around a closed property */}
        <circle {...draw(0)} cx={cx} cy={cy} r="210" fill="none" stroke={SEA} strokeOpacity="0.4" strokeWidth="1.4" pathLength={1} />
        <circle {...draw(1)} cx={cx} cy={cy} r="146" fill="none" stroke={PAPER} strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="0.008 0.016" pathLength={1} />
        <circle {...draw(2)} cx={cx} cy={cy} r="84" fill="none" stroke={SEA} strokeOpacity="0.5" strokeWidth="1.3" strokeDasharray="0.014 0.012" pathLength={1} />
        <g className="gfx-fade">
          <RingTicks cx={cx} cy={cy} r={210} count={12} length={10} stroke={SEA} opacity={0.45} />
        </g>

        {/* scheduled visit marks on the cadence ring */}
        <g className="gfx-fade" fill={SEA} fillOpacity="0.9">
          {[-90, -30, 30, 90, 150, 210].map((deg, i) => {
            if (i % 2 !== 0) {
              return null;
            }

            const rad = (deg * Math.PI) / 180;
            const px = cx + Math.cos(rad) * 210;
            const py = cy + Math.sin(rad) * 210;

            return (
              <rect
                key={deg}
                x={coord(px - 5)}
                y={coord(py - 5)}
                width="10"
                height="10"
                transform={`rotate(45 ${coord(px)} ${coord(py)})`}
              />
            );
          })}
        </g>

        {/* closed property at centre */}
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.7" strokeWidth="1.5">
          <path d={`M ${cx - 20} ${cy + 16} V ${cy - 8} L ${cx} ${cy - 24} L ${cx + 20} ${cy - 8} V ${cy + 16} Z`} fill={INKDEEP} />
          <line x1={cx - 6} y1={cy + 16} x2={cx - 6} y2={cy + 2} />
          <line x1={cx + 6} y1={cy + 16} x2={cx + 6} y2={cy + 2} />
        </g>

        {/* inspection sweep */}
        <line {...draw(3)} x1={cx} y1={cy} x2={cx + 148} y2={cy - 148} stroke={SEA} strokeOpacity="0.6" strokeWidth="1.4" pathLength={1} />
        <circle className="gfx-fade" cx={cx + 148} cy={cy - 148} r="6" fill="none" stroke={SEA} strokeOpacity="0.8" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function TurnoverField() {
  const ax = 660;
  const ay = 340;
  const bx = 1010;
  const by = 250;
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-turn-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-turn-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-turn-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-turn-mask)">
        {/* turnover circuit between stay and readiness */}
        <path {...draw(0)} d={`M ${ax + 18} ${ay - 26} C ${ax + 100} ${ay - 110} ${bx - 100} ${by - 70} ${bx - 22} ${by - 20}`} fill="none" stroke={COPPER} strokeOpacity="0.6" strokeWidth="1.7" pathLength={1} />
        <path {...draw(1)} d={`M ${bx - 20} ${by + 30} C ${bx - 90} ${by + 120} ${ax + 110} ${ay + 96} ${ax + 24} ${ay + 24}`} fill="none" stroke={PAPER} strokeOpacity="0.32" strokeWidth="1.5" strokeDasharray="0.012 0.012" pathLength={1} />

        {/* arrowheads */}
        <g className="gfx-fade" fill="none" strokeWidth="1.7">
          <path d={`M ${bx - 42} ${by - 36} L ${bx - 22} ${by - 20} L ${bx - 46} ${by - 14}`} stroke={COPPER} strokeOpacity="0.75" />
          <path d={`M ${ax + 48} ${ay + 18} L ${ax + 24} ${ay + 24} L ${ax + 44} ${ay + 42}`} stroke={PAPER} strokeOpacity="0.45" />
        </g>

        {/* node A: occupied stay */}
        <circle {...draw(2)} cx={ax} cy={ay} r="34" fill="none" stroke={PAPER} strokeOpacity="0.4" strokeWidth="1.4" pathLength={1} />
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.66" strokeWidth="1.4">
          <circle cx={ax} cy={ay - 6} r="5.5" />
          <path d={`M ${ax - 9} ${ay + 12} C ${ax - 7} ${ay + 3} ${ax + 7} ${ay + 3} ${ax + 9} ${ay + 12}`} />
        </g>

        {/* node B: documented readiness */}
        <circle {...draw(3)} cx={bx} cy={by} r="34" fill="none" stroke={COPPER} strokeOpacity="0.6" strokeWidth="1.5" pathLength={1} />
        <g className="gfx-fade" fill="none" stroke={COPPER} strokeOpacity="0.85" strokeWidth="1.5">
          <path d={`M ${bx - 8} ${by} L ${bx - 2.5} ${by + 6} L ${bx + 9} ${by - 7}`} />
        </g>

        {/* circuit checkpoints: access · clean · verify */}
        <g className="gfx-fade">
          <g fill="none" stroke={PAPER} strokeOpacity="0.5" strokeWidth="1.3">
            <circle cx={(ax + bx) / 2 - 18} cy={by - 64} r="4" />
            <circle cx={(ax + bx) / 2 + 64} cy={ay + 78} r="4" />
          </g>
          <g fill="none" stroke={PAPER} strokeOpacity="0.45" strokeWidth="1.3">
            {/* key glyph on the access leg */}
            <g transform={`translate(${(ax + bx) / 2 - 70} ${by - 36})`}>
              <circle cx="-4" cy="-4" r="5.5" />
              <line x1="0" y1="0" x2="10" y2="10" />
              <line x1="6" y1="10" x2="10" y2="10" />
            </g>
          </g>
        </g>

        {/* turnover interval ruler */}
        <g className="gfx-fade" stroke={PAPER} strokeOpacity="0.22" strokeWidth="1">
          <line x1={ax - 30} y1="500" x2={bx + 30} y2="500" />
          {Array.from({ length: 8 }, (_, i) => ax - 30 + i * 54).map((x) => (
            <line key={x} x1={x} y1="494" x2={x} y2="506" />
          ))}
        </g>
      </g>
    </svg>
  );
}

function ClassificationField() {
  const mx = 760;
  const my = 310;
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" focusable="false">
      <defs>
        <linearGradient id="gfx-class-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="gfx-class-mask">
          <rect x="0" y="0" width="1200" height="620" fill="url(#gfx-class-fade)" />
        </mask>
      </defs>

      <g mask="url(#gfx-class-mask)">
        {/* two undetermined usage lines */}
        <path {...draw(0)} d={`M 60 200 C 300 196 520 224 ${mx - 70} ${my - 28}`} fill="none" stroke={PAPER} strokeOpacity="0.32" strokeWidth="1.5" strokeDasharray="0.016 0.012" pathLength={1} />
        <path {...draw(1)} d={`M 60 430 C 300 432 520 384 ${mx - 70} ${my + 28}`} fill="none" stroke={PAPER} strokeOpacity="0.32" strokeWidth="1.5" strokeDasharray="0.016 0.012" pathLength={1} />

        {/* classification gate */}
        <line {...draw(2)} x1={mx - 56} y1={my - 64} x2={mx - 56} y2={my + 64} stroke={CLAY} strokeOpacity="0.7" strokeWidth="2" pathLength={1} />
        <g className="gfx-fade" stroke={CLAY} strokeOpacity="0.7" strokeWidth="2" fill="none">
          <line x1={mx - 56} y1={my - 64} x2={mx - 42} y2={my - 64} />
          <line x1={mx - 56} y1={my + 64} x2={mx - 42} y2={my + 64} />
        </g>

        {/* structured review diamond */}
        <rect
          {...draw(3)}
          x={mx - 20}
          y={my - 20}
          width="40"
          height="40"
          fill={INKDEEP}
          stroke={CLAY}
          strokeOpacity="0.85"
          strokeWidth="1.6"
          transform={`rotate(45 ${mx} ${my})`}
          pathLength={1}
        />
        <g className="gfx-fade" fill="none" stroke={PAPER} strokeOpacity="0.75" strokeWidth="1.4">
          <line x1={mx - 7} y1={my - 3} x2={mx + 7} y2={my - 3} />
          <line x1={mx - 7} y1={my + 3} x2={mx + 3} y2={my + 3} />
        </g>

        {/* one defined operating line out */}
        <line {...draw(4)} x1={mx + 34} y1={my} x2="1130" y2={my} stroke={CLAY} strokeOpacity="0.65" strokeWidth="1.9" pathLength={1} />
        <g className="gfx-fade" stroke={CLAY} strokeOpacity="0.8" strokeWidth="1.9" fill="none">
          <path d={`M 1098 ${my - 8} L 1114 ${my} L 1098 ${my + 8}`} />
        </g>

        {/* decision ticks after review */}
        <g className="gfx-fade" stroke={CLAY} strokeOpacity="0.5" strokeWidth="1.2">
          {[860, 940, 1020].map((x) => (
            <line key={x} x1={x} y1={my - 7} x2={x} y2={my + 7} />
          ))}
        </g>
      </g>
    </svg>
  );
}

const VARIANTS: Record<OperationalFieldVariant, () => ReactElement> = {
  cartography: CartographyField,
  gate: GateField,
  sequence: SequenceField,
  intake: IntakeField,
  index: IndexField,
  footprint: FootprintField,
  inspection: InspectionField,
  turnover: TurnoverField,
  classification: ClassificationField,
};

export default function OperationalField({ variant, className = '' }: OperationalFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Field = VARIANTS[variant];

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    const reveal = () => setVisible(true);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      const frame = window.requestAnimationFrame(reveal);
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) {
            return;
          }

          reveal();
          observer.disconnect();
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [variant]);

  const classes = ['gfx-field', `gfx-field--${variant}`, visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} aria-hidden="true">
      <Field />
    </div>
  );
}
