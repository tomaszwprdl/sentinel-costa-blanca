interface ContactMethodPanelProps {
  eyebrow: string;
  title: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  hoursLabel: string;
  hours: string;
  note: string;
}

export default function ContactMethodPanel({
  eyebrow,
  title,
  emailLabel,
  email,
  phoneLabel,
  phone,
  hoursLabel,
  hours,
  note,
}: ContactMethodPanelProps) {
  return (
    <aside className="visual-card-strong p-5 md:p-6">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black text-heading">{title}</h2>
      <dl className="mt-6 space-y-4 text-body">
        <div>
          <dt className="text-xs font-black uppercase tracking-wide text-muted">{emailLabel}</dt>
          <dd className="mt-1 [overflow-wrap:anywhere] text-base font-bold text-heading">{email}</dd>
        </div>
        <div>
          <dt className="text-xs font-black uppercase tracking-wide text-muted">{phoneLabel}</dt>
          <dd className="mt-1 text-base font-bold text-heading">{phone}</dd>
        </div>
        <div>
          <dt className="text-xs font-black uppercase tracking-wide text-muted">{hoursLabel}</dt>
          <dd className="mt-1 text-base font-bold text-heading">{hours}</dd>
        </div>
      </dl>
      <p className="mt-5 mb-0 text-sm leading-relaxed text-muted">{note}</p>
    </aside>
  );
}
