import Image from 'next/image';

interface OperationalModuleTileProps {
  image: string;
  label: string;
  title: string;
  body: string;
  items: string[];
  note?: string;
}

export default function OperationalModuleTile({
  image,
  label,
  title,
  body,
  items,
  note,
}: OperationalModuleTileProps) {
  return (
    <article className="visual-card overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 text-[11px] font-black uppercase tracking-wide text-accent">{label}</p>
        <h3 className="mb-3 text-xl font-black text-heading">{title}</h3>
        <p className="text-sm leading-relaxed text-body">{body}</p>
        <ul className="ml-4 list-disc space-y-1.5 text-sm text-body">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {note && <p className="mt-4 mb-0 text-xs leading-relaxed text-muted">{note}</p>}
      </div>
    </article>
  );
}
