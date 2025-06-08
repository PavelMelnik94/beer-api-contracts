// Auto-generated utility types for ProductStats
import type { ProductStatsType } from '../types/product-productstats';

// Create request type (omit id, createdAt, updatedAt)
export type CreateProductStatsRequest = Omit<ProductStatsType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateProductStatsRequest = Partial<CreateProductStatsRequest>;

// Response type (same as base type)
export type ProductStatsResponse = ProductStatsType;

// List response type
export type ProductStatsListResponse = ProductStatsType[];

// ID type for references
export type ProductStatsId = string;

// Partial type for patches
export type PartialProductStats = Partial<ProductStatsType>;
