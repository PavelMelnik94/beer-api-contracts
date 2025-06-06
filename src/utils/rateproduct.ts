// Auto-generated utility types for RateProduct
import type { RateProductType } from '../types/rating-rateproduct';

// Create request type (omit id, createdAt, updatedAt)
export type CreateRateProductRequest = Omit<RateProductType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateRateProductRequest = Partial<CreateRateProductRequest>;

// Response type (same as base type)
export type RateProductResponse = RateProductType;

// List response type
export type RateProductListResponse = RateProductType[];

// ID type for references
export type RateProductId = string;

// Partial type for patches
export type PartialRateProduct = Partial<RateProductType>;
