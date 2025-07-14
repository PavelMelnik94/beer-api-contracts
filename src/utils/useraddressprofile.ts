// Auto-generated utility types for UserAddressProfile
import type { UserAddressProfileType } from '../types/user-profile-response-useraddressprofile';

// Create request type (omit id, createdAt, updatedAt)
export type CreateUserAddressProfileRequest = Omit<UserAddressProfileType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateUserAddressProfileRequest = Partial<CreateUserAddressProfileRequest>;

// Response type (same as base type)
export type UserAddressProfileResponse = UserAddressProfileType;

// List response type
export type UserAddressProfileListResponse = UserAddressProfileType[];

// ID type for references
export type UserAddressProfileId = string;

// Partial type for patches
export type PartialUserAddressProfile = Partial<UserAddressProfileType>;
