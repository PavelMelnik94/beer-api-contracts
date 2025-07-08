// Auto-generated utility types for PaginatedProductCommentsResult
import type { PaginatedProductCommentsResultType } from '../types/product-comment-paginatedproductcommentsresult';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePaginatedProductCommentsResultRequest = Omit<PaginatedProductCommentsResultType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdatePaginatedProductCommentsResultRequest = Partial<CreatePaginatedProductCommentsResultRequest>;

// Response type (same as base type)
export type PaginatedProductCommentsResultResponse = PaginatedProductCommentsResultType;

// List response type
export type PaginatedProductCommentsResultListResponse = PaginatedProductCommentsResultType[];

// ID type for references
export type PaginatedProductCommentsResultId = string;

// Partial type for patches
export type PartialPaginatedProductCommentsResult = Partial<PaginatedProductCommentsResultType>;
