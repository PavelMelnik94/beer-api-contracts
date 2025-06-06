// Auto-generated utility types for Brewery
import type { BreweryType } from '../types/brewery-brewery';

// Create request type (omit id, createdAt, updatedAt)
export type CreateBreweryRequest = Omit<BreweryType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateBreweryRequest = Partial<CreateBreweryRequest>;

// Response type (same as base type)
export type BreweryResponse = BreweryType;

// List response type
export type BreweryListResponse = BreweryType[];

// ID type for references
export type BreweryId = string;

// Partial type for patches
export type PartialBrewery = Partial<BreweryType>;
