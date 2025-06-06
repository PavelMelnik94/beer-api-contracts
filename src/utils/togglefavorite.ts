// Auto-generated utility types for ToggleFavorite
import type { ToggleFavoriteType } from '../types/favorite-togglefavorite';

// Create request type (omit id, createdAt, updatedAt)
export type CreateToggleFavoriteRequest = Omit<ToggleFavoriteType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateToggleFavoriteRequest = Partial<CreateToggleFavoriteRequest>;

// Response type (same as base type)
export type ToggleFavoriteResponse = ToggleFavoriteType;

// List response type
export type ToggleFavoriteListResponse = ToggleFavoriteType[];

// ID type for references
export type ToggleFavoriteId = string;

// Partial type for patches
export type PartialToggleFavorite = Partial<ToggleFavoriteType>;
