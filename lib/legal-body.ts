export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'intro'; text: string }
  | { type: 'list'; items: string[] };

const MAX_LIST_ITEM_LENGTH = 180;

function isListItemLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.length > MAX_LIST_ITEM_LENGTH) return false;
  if (trimmed.endsWith(':')) return false;
  return true;
}

function linesToListItems(text: string): string[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function collectListItems(parts: string[], startIndex: number): { items: string[]; nextIndex: number } {
  const items: string[] = [];
  let index = startIndex;

  while (index < parts.length) {
    const part = parts[index].trim();
    if (!part) {
      index += 1;
      continue;
    }

    if (part.includes('\n')) {
      const lines = linesToListItems(part);
      if (lines.length > 1 && lines.every(isListItemLine)) {
        items.push(...lines);
        index += 1;
        continue;
      }
      break;
    }

    if (isListItemLine(part)) {
      items.push(part);
      index += 1;
      continue;
    }

    break;
  }

  return { items, nextIndex: index };
}

/**
 * Parses dictionary legal body strings into paragraphs, list intros, and lists.
 * Preserves clause text; only interprets existing newline structure.
 */
export function parseLegalBody(body: string): LegalBlock[] {
  const parts = body.split('\n\n').map((part) => part.trim()).filter(Boolean);
  const blocks: LegalBlock[] = [];
  let index = 0;

  while (index < parts.length) {
    const part = parts[index];

    if (part.includes('\n')) {
      const lines = linesToListItems(part);
      if (lines[0]?.endsWith(':') && lines.length > 1) {
        blocks.push({ type: 'intro', text: lines[0] });
        blocks.push({ type: 'list', items: lines.slice(1) });
        index += 1;
        continue;
      }

      if (lines.length > 1 && lines.every(isListItemLine)) {
        blocks.push({ type: 'list', items: lines });
        index += 1;
        continue;
      }
    }

    if (part.endsWith(':')) {
      blocks.push({ type: 'intro', text: part });
      const { items, nextIndex } = collectListItems(parts, index + 1);
      if (items.length > 0) {
        blocks.push({ type: 'list', items });
        index = nextIndex;
      } else {
        index += 1;
      }
      continue;
    }

    blocks.push({ type: 'paragraph', text: part });
    index += 1;
  }

  return blocks;
}

export function legalSectionId(documentId: string, index: number): string {
  return `${documentId}-section-${index + 1}`;
}

export const EMAIL_LINE_PATTERN = /(Email|E-mail):\s*([^\s]+@[^\s]+)/i;
