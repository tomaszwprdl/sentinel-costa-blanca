// TEMP MATRIX VALUES — to be tuned by Owner.
// Task 8 §8.8: matrix-based + additive bands only. No formulas.
//
// TODO (Matrix Integrity Session):
// - Bedroom adjustment multiplier must be higher in Guest Mode than Private Mode.
// - Area band transitions must avoid sharp jumps at thresholds.
// - Overlay additions must never exceed 40% of base jurisdiction band.
// - Guest Mode must always ≥ Private Mode for identical inputs.

export type Range = { min: number; max: number };

export function addRanges(a: Range, b: Range): Range {
  return { min: a.min + b.min, max: a.max + b.max };
}

export type PackageKey = 'structured_presence' | 'active_oversight' | 'extended_jurisdiction';
export type ModeKey = 'private_use' | 'active_guest';
export type SizeKey = 'S' | 'M' | 'L';
export type BedroomsKey = 'B1' | 'B2' | 'B3' | 'B4P';
export type OverlayKey = 'cleaning' | 'linen' | 'guest_check' | 'key_holding';

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

/** Per-overlay additive range */
export const OVERLAY_ADJ: Record<OverlayKey, Range> = {
  cleaning: { min: 20, max: 35 },
  linen: { min: 15, max: 25 },
  guest_check: { min: 25, max: 40 },
  key_holding: { min: 10, max: 20 },
};

export function computeEstimate(
  packageKey: PackageKey,
  modeKey: ModeKey,
  sizeKey: SizeKey,
  bedroomsKey: BedroomsKey,
  overlayKeys: OverlayKey[]
): Range {
  let r = BASE_MATRIX[packageKey][modeKey];
  r = addRanges(r, SIZE_ADJ[sizeKey]);
  r = addRanges(r, BEDROOMS_ADJ[bedroomsKey]);
  let overlaySum: Range = { min: 0, max: 0 };
  for (const k of overlayKeys) {
    overlaySum = addRanges(overlaySum, OVERLAY_ADJ[k]);
  }
  return addRanges(r, overlaySum);
}
