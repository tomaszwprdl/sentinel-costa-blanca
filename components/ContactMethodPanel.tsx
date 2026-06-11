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
    <aside className="contact-method-panel reveal-rise p-5 md:p-6">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-black text-heading">{title}</h2>
      <dl className="contact-method-panel__items mt-5 text-body">
        <div className="contact-method-panel__row">
          <dt>{emailLabel}</dt>
          <dd className="[overflow-wrap:anywhere]">{email}</dd>
        </div>
        <div className="contact-method-panel__row">
          <dt>{phoneLabel}</dt>
          <dd>{phone}</dd>
        </div>
        <div className="contact-method-panel__row">
          <dt>{hoursLabel}</dt>
          <dd>{hours}</dd>
        </div>
      </dl>
      <p className="mt-4 mb-0 text-sm leading-relaxed text-muted">{note}</p>
    </aside>
  );
}
