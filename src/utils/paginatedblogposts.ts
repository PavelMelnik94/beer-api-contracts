// Auto-generated utility types for PaginatedBlogPosts
import type { PaginatedBlogPostsType } from '../types/blog-post-zod-paginatedblogposts';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePaginatedBlogPostsRequest = Omit<PaginatedBlogPostsType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdatePaginatedBlogPostsRequest = Partial<CreatePaginatedBlogPostsRequest>;

// Response type (same as base type)
export type PaginatedBlogPostsResponse = PaginatedBlogPostsType;

// List response type
export type PaginatedBlogPostsListResponse = PaginatedBlogPostsType[];

// ID type for references
export type PaginatedBlogPostsId = string;

// Partial type for patches
export type PartialPaginatedBlogPosts = Partial<PaginatedBlogPostsType>;
