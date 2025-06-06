// Auto-generated utility types for ProductRating
import type { ProductRatingType } from '../types/rating-productrating';

// Create request type (omit id, createdAt, updatedAt)
export type CreateProductRatingRequest = Omit<ProductRatingType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateProductRatingRequest = Partial<CreateProductRatingRequest>;

// Response type (same as base type)
export type ProductRatingResponse = ProductRatingType;

// List response type
export type ProductRatingListResponse = ProductRatingType[];

// ID type for references
export type ProductRatingId = string;

// Partial type for patches
export type PartialProductRating = Partial<ProductRatingType>;
