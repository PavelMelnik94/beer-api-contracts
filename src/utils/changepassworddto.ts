// Auto-generated utility types for ChangePasswordDto
import type { ChangePasswordDtoType } from '../types/change-password-changepassword';

// Create request type (omit id, createdAt, updatedAt)
export type CreateChangePasswordDtoRequest = Omit<ChangePasswordDtoType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateChangePasswordDtoRequest = Partial<CreateChangePasswordDtoRequest>;

// Response type (same as base type)
export type ChangePasswordDtoResponse = ChangePasswordDtoType;

// List response type
export type ChangePasswordDtoListResponse = ChangePasswordDtoType[];

// ID type for references
export type ChangePasswordDtoId = string;

// Partial type for patches
export type PartialChangePasswordDto = Partial<ChangePasswordDtoType>;
