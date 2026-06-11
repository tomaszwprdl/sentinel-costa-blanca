import { EMAIL_LINE_PATTERN, parseLegalBody, type LegalBlock } from '@/lib/legal-body';

function renderText(text: string) {
  const match = text.match(EMAIL_LINE_PATTERN);

  if (!match || match.index === undefined) {
    return text;
  }

  const [full, label, email] = match;
  const before = text.slice(0, match.index);
  const after = text.slice(match.index + full.length);

  return (
    <>
      {before}
      <span className="legal-prose__contact-line">
        {label}:{' '}
        <a href={`mailto:${email}`} className="legal-prose__link">
          {email}
        </a>
      </span>
      {after}
    </>
  );
}

function renderBlock(block: LegalBlock, key: string) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={key} className="legal-prose__intro">
          {renderText(block.text)}
        </p>
      );
    case 'list':
      return (
        <ul key={key} className="legal-prose__list">
          {block.items.map((item) => (
            <li key={item}>{renderText(item)}</li>
          ))}
        </ul>
      );
    case 'paragraph':
      return (
        <p key={key} className="legal-prose__paragraph">
          {renderText(block.text)}
        </p>
      );
    default:
      return null;
  }
}

export default function LegalBody({ body }: { body: string }) {
  const blocks = parseLegalBody(body);

  return <div className="legal-prose__body">{blocks.map((block, index) => renderBlock(block, `block-${index}`))}</div>;
}
