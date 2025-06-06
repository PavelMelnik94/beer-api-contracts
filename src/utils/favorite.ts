// Auto-generated utility types for Favorite
import type { FavoriteType } from '../types/favorite-favorite';

// Create request type (omit id, createdAt, updatedAt)
export type CreateFavoriteRequest = Omit<FavoriteType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateFavoriteRequest = Partial<CreateFavoriteRequest>;

// Response type (same as base type)
export type FavoriteResponse = FavoriteType;

// List response type
export type FavoriteListResponse = FavoriteType[];

// ID type for references
export type FavoriteId = string;

// Partial type for patches
export type PartialFavorite = Partial<FavoriteType>;
