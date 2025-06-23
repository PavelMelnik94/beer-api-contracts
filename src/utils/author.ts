// Auto-generated utility types for Author
import type { AuthorType } from '../types/blog-post-zod-author';

// Create request type (omit id, createdAt, updatedAt)
export type CreateAuthorRequest = Omit<AuthorType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateAuthorRequest = Partial<CreateAuthorRequest>;

// Response type (same as base type)
export type AuthorResponse = AuthorType;

// List response type
export type AuthorListResponse = AuthorType[];

// ID type for references
export type AuthorId = string;

// Partial type for patches
export type PartialAuthor = Partial<AuthorType>;
