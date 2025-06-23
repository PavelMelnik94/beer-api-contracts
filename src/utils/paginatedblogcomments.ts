// Auto-generated utility types for PaginatedBlogComments
import type { PaginatedBlogCommentsType } from '../types/blog-comment-zod-paginatedblogcomments';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePaginatedBlogCommentsRequest = Omit<PaginatedBlogCommentsType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdatePaginatedBlogCommentsRequest = Partial<CreatePaginatedBlogCommentsRequest>;

// Response type (same as base type)
export type PaginatedBlogCommentsResponse = PaginatedBlogCommentsType;

// List response type
export type PaginatedBlogCommentsListResponse = PaginatedBlogCommentsType[];

// ID type for references
export type PaginatedBlogCommentsId = string;

// Partial type for patches
export type PartialPaginatedBlogComments = Partial<PaginatedBlogCommentsType>;
