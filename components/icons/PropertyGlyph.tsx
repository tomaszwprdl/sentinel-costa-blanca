// Institutional line glyph: a flat-roofed apartment/property block with a window
// grid and door. Deliberately not a playful pitched-roof house. Decorative cue
// beside the usage-selector title; kept aria-hidden.
export default function PropertyGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <path d="M4.5 21h15.5" />
      <path d="M6 21V5.4h8.2V21" />
      <path d="M14.2 21V9.4h4.4V21" />
      <path d="M8.4 8.6h1.6M11.4 8.6h1.6" />
      <path d="M8.4 11.7h1.6M11.4 11.7h1.6" />
      <path d="M8.4 14.8h1.6M11.4 14.8h1.6" />
      <path d="M9.8 21v-3.1h2.6V21" />
      <path d="M15.9 12.4h1.4M15.9 15.4h1.4" />
    </svg>
  );
}
