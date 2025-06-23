// Auto-generated utility types for BlogPost
import type { BlogPostType } from '../types/blog-post-zod-blogpost';

// Create request type (omit id, createdAt, updatedAt)
export type CreateBlogPostRequest = Omit<BlogPostType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateBlogPostRequest = Partial<CreateBlogPostRequest>;

// Response type (same as base type)
export type BlogPostResponse = BlogPostType;

// List response type
export type BlogPostListResponse = BlogPostType[];

// ID type for references
export type BlogPostId = string;

// Partial type for patches
export type PartialBlogPost = Partial<BlogPostType>;
