// Auto-generated utility types for UserAvatar
import type { UserAvatarType } from '../types/avatar-useravatar';

// Create request type (omit id, createdAt, updatedAt)
export type CreateUserAvatarRequest = Omit<UserAvatarType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateUserAvatarRequest = Partial<CreateUserAvatarRequest>;

// Response type (same as base type)
export type UserAvatarResponse = UserAvatarType;

// List response type
export type UserAvatarListResponse = UserAvatarType[];

// ID type for references
export type UserAvatarId = string;

// Partial type for patches
export type PartialUserAvatar = Partial<UserAvatarType>;
