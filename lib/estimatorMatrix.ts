// PRE-LIVE INDICATIVE VALUES — Owner confirmation required before public launch.
// Matrix-based + additive bands only. No formulas.
//
// TODO (Matrix Integrity Session):
// - Bedroom adjustment multiplier must be higher in Guest Mode than Private Mode.
// - Area band transitions must avoid sharp jumps at thresholds.
// - Scope element additions must never exceed 40% of base jurisdiction band.
// - Guest Mode must always ≥ Private Mode for identical inputs.
// - turnover_cleaning and vendor_access bands are provisional (mapped from closest legacy values).

export type Range = { min: number; max: number };

export function addRanges(a: Range, b: Range): Range {
  return { min: a.min + b.min, max: a.max + b.max };
}

export type PackageKey = 'structured_presence' | 'active_oversight' | 'extended_jurisdiction';
export type ModeKey = 'private_use' | 'active_guest';
export type SizeKey = 'S' | 'M' | 'L';
export type BedroomsKey = 'B1' | 'B2' | 'B3' | 'B4P';
export type ScopeElementKey =
  | 'cleaning_readiness'
  | 'turnover_cleaning'
  | 'linen'
  | 'guest_check'
  | 'keyholding'
  | 'vendor_access';

/** Deterministic display / serialization order for operational scope elements */
export const SCOPE_ELEMENT_KEYS: ScopeElementKey[] = [
  'cleaning_readiness',
  'turnover_cleaning',
  'linen',
  'guest_check',
  'keyholding',
  'vendor_access',
];

const LEGACY_SCOPE_ALIASES: Record<string, ScopeElementKey> = {
  cleaning: 'cleaning_readiness',
  key_holding: 'keyholding',
};

export function normalizeScopeElementKey(value: string): ScopeElementKey | null {
  if (SCOPE_ELEMENT_KEYS.includes(value as ScopeElementKey)) {
    return value as ScopeElementKey;
  }
  return LEGACY_SCOPE_ALIASES[value] ?? null;
}

/** Parse comma-separated scope params; supports legacy keys for backward compatibility. */
export function parseScopeElementParam(serialized: string | null): ScopeElementKey[] {
  if (!serialized) return [];
  const keys: ScopeElementKey[] = [];
  for (const part of serialized.split(',')) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const normalized = normalizeScopeElementKey(trimmed);
    if (normalized && !keys.includes(normalized)) {
      keys.push(normalized);
    }
  }
  return keys.sort((a, b) => SCOPE_ELEMENT_KEYS.indexOf(a) - SCOPE_ELEMENT_KEYS.indexOf(b));
}

/** Base monthly range by Package × Operational Mode */
export const BASE_MATRIX: Record<PackageKey, Record<ModeKey, Range>> = {
  structured_presence: {
    private_use: { min: 80, max: 120 },
    active_guest: { min: 120, max: 180 },
  },
  active_oversight: {
    private_use: { min: 140, max: 200 },
    active_guest: { min: 200, max: 280 },
  },
  extended_jurisdiction: {
    private_use: { min: 220, max: 320 },
    active_guest: { min: 300, max: 420 },
  },
};

/** Size bracket adjustment range (internal; never expose thresholds to UI) */
export const SIZE_ADJ: Record<SizeKey, Range> = {
  S: { min: 0, max: 0 },
  M: { min: 15, max: 25 },
  L: { min: 35, max: 55 },
};

/** Min/max m² for estimator input. Thresholds for band mapping are internal only. */
export const SQM_INPUT_MIN = 20;
export const SQM_INPUT_MAX = 1000;

/**
 * Map numeric m² to size band. Thresholds are not exposed.
 * Used only for matrix lookup; UI never displays band letter.
 */
export function getSizeKeyFromSqm(sqm: number): SizeKey {
  const n = Math.max(SQM_INPUT_MIN, Math.min(SQM_INPUT_MAX, Math.round(sqm)));
  if (n <= 60) return 'S';
  if (n <= 120) return 'M';
  return 'L';
}

/** Bedrooms adjustment range */
export const BEDROOMS_ADJ: Record<BedroomsKey, Range> = {
  B1: { min: 0, max: 0 },
  B2: { min: 5, max: 15 },
  B3: { min: 15, max: 30 },
  B4P: { min: 25, max: 45 },
};

/** Per operational scope element additive range */
export const SCOPE_ELEMENT_ADJ: Record<ScopeElementKey, Range> = {
  cleaning_readiness: { min: 20, max: 35 },
  turnover_cleaning: { min: 20, max: 35 },
  linen: { min: 15, max: 25 },
  guest_check: { min: 25, max: 40 },
  keyholding: { min: 10, max: 20 },
  vendor_access: { min: 10, max: 20 },
};

export function computeEstimate(
  packageKey: PackageKey,
  modeKey: ModeKey,
  sizeKey: SizeKey,
  bedroomsKey: BedroomsKey,
  scopeElementKeys: ScopeElementKey[]
): Range {
  let r = BASE_MATRIX[packageKey][modeKey];
  r = addRanges(r, SIZE_ADJ[sizeKey]);
  r = addRanges(r, BEDROOMS_ADJ[bedroomsKey]);
  let scopeSum: Range = { min: 0, max: 0 };
  for (const k of scopeElementKeys) {
    scopeSum = addRanges(scopeSum, SCOPE_ELEMENT_ADJ[k]);
  }
  return addRanges(r, scopeSum);
}
