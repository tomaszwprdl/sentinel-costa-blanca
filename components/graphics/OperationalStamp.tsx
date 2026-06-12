/**
 * Operational stamp — a small bordered registry mark used on dark authority
 * surfaces. Carries factual operating parameters only (place, radius); labels
 * are passed in from messages so PL/EN parity stays in the dictionaries.
 */

type OperationalStampProps = {
  primary: string;
  secondary?: string;
  className?: string;
};

export default function OperationalStamp({ primary, secondary, className = '' }: OperationalStampProps) {
  return (
    <span className={`gfx-stamp ${className}`.trim()}>
      <span className="gfx-stamp__ring" aria-hidden="true" />
      <span className="gfx-stamp__text">
        <strong>{primary}</strong>
        {secondary ? <em>{secondary}</em> : null}
      </span>
    </span>
  );
}
