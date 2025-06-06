// Auto-generated utility types for Login
import type { LoginType } from '../types/login-login';

// Create request type (omit id, createdAt, updatedAt)
export type CreateLoginRequest = Omit<LoginType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateLoginRequest = Partial<CreateLoginRequest>;

// Response type (same as base type)
export type LoginResponse = LoginType;

// List response type
export type LoginListResponse = LoginType[];

// ID type for references
export type LoginId = string;

// Partial type for patches
export type PartialLogin = Partial<LoginType>;
