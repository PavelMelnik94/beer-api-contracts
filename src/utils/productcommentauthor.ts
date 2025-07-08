// Auto-generated utility types for ProductCommentAuthor
import type { ProductCommentAuthorType } from '../types/product-comment-productcommentauthor';

// Create request type (omit id, createdAt, updatedAt)
export type CreateProductCommentAuthorRequest = Omit<ProductCommentAuthorType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateProductCommentAuthorRequest = Partial<CreateProductCommentAuthorRequest>;

// Response type (same as base type)
export type ProductCommentAuthorResponse = ProductCommentAuthorType;

// List response type
export type ProductCommentAuthorListResponse = ProductCommentAuthorType[];

// ID type for references
export type ProductCommentAuthorId = string;

// Partial type for patches
export type PartialProductCommentAuthor = Partial<ProductCommentAuthorType>;
