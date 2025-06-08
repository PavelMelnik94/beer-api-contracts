// Auto-generated utility types for BreweryStats
import type { BreweryStatsType } from '../types/brewery-brewerystats';

// Create request type (omit id, createdAt, updatedAt)
export type CreateBreweryStatsRequest = Omit<BreweryStatsType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateBreweryStatsRequest = Partial<CreateBreweryStatsRequest>;

// Response type (same as base type)
export type BreweryStatsResponse = BreweryStatsType;

// List response type
export type BreweryStatsListResponse = BreweryStatsType[];

// ID type for references
export type BreweryStatsId = string;

// Partial type for patches
export type PartialBreweryStats = Partial<BreweryStatsType>;
