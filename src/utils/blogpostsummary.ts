// Auto-generated utility types for BlogPostSummary
import type { BlogPostSummaryType } from '../types/blog-post-zod-blogpostsummary';

// Create request type (omit id, createdAt, updatedAt)
export type CreateBlogPostSummaryRequest = Omit<BlogPostSummaryType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateBlogPostSummaryRequest = Partial<CreateBlogPostSummaryRequest>;

// Response type (same as base type)
export type BlogPostSummaryResponse = BlogPostSummaryType;

// List response type
export type BlogPostSummaryListResponse = BlogPostSummaryType[];

// ID type for references
export type BlogPostSummaryId = string;

// Partial type for patches
export type PartialBlogPostSummary = Partial<BlogPostSummaryType>;
