export type PathwayKey = 'private-use-only' | 'regular-guest-stays' | 'mixed-not-defined';

export const PATHWAY_KEYS: PathwayKey[] = [
  'private-use-only',
  'regular-guest-stays',
  'mixed-not-defined',
];

const LEGACY_PATHWAY_ALIASES: Record<string, PathwayKey> = {
  'empty-between-visits': 'private-use-only',
  'private-absence': 'private-use-only',
  'active-guest-use': 'regular-guest-stays',
  'mixed-undetermined': 'mixed-not-defined',
};

export function normalizePathwayParam(value: string | null): PathwayKey | null {
  if (!value) return null;
  if (PATHWAY_KEYS.includes(value as PathwayKey)) {
    return value as PathwayKey;
  }
  return LEGACY_PATHWAY_ALIASES[value] ?? null;
}

export function isPathwayParam(value: string | null): value is PathwayKey {
  return normalizePathwayParam(value) !== null;
}
