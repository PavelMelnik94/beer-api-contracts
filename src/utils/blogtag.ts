// Auto-generated utility types for BlogTag
import type { BlogTagType } from '../types/blog-post-zod-blogtag';

// Create request type (omit id, createdAt, updatedAt)
export type CreateBlogTagRequest = Omit<BlogTagType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateBlogTagRequest = Partial<CreateBlogTagRequest>;

// Response type (same as base type)
export type BlogTagResponse = BlogTagType;

// List response type
export type BlogTagListResponse = BlogTagType[];

// ID type for references
export type BlogTagId = string;

// Partial type for patches
export type PartialBlogTag = Partial<BlogTagType>;
