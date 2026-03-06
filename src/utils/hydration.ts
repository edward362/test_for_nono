export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
export type Climate = 'temperate' | 'hot' | 'dry' | 'very_hot';

export interface Metrics {
  weight: number; // in kg
  activity: ActivityLevel;
  climate: Climate;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 0,
  light: 300,      // +300 ml daily
  moderate: 600,   // +600 ml daily
  active: 900,     // +900 ml daily
  very_active: 1200, // +1200 ml daily
};

const CLIMATE_MULTIPLIERS: Record<Climate, number> = {
  temperate: 0,
  hot: 500,        // +500 ml daily
  dry: 400,        // +400 ml daily
  very_hot: 1000,  // +1000 ml daily
};

export function calculateHydration(metrics: Metrics): number {
  if (!metrics.weight || metrics.weight <= 0) return 0;

  // Base calculation: 35ml per kg of body weight
  const baseIntake = metrics.weight * 35;
  
  const activityAdjustment = ACTIVITY_MULTIPLIERS[metrics.activity];
  const climateAdjustment = CLIMATE_MULTIPLIERS[metrics.climate];

  // Total intake in ml
  const total = baseIntake + activityAdjustment + climateAdjustment;

  return total;
}

// Helper to convert ml to Liters
export function formatLiters(ml: number): string {
  if (ml === 0) return '0 L';
  return (ml / 1000).toFixed(1) + ' L';
}

export function formatCups(ml: number): number {
  // roughly 240ml per cup
  return Math.max(0, Math.round(ml / 240));
}
