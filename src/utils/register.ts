// Auto-generated utility types for Register
import type { RegisterType } from '../types/register-register';

// Create request type (omit id, createdAt, updatedAt)
export type CreateRegisterRequest = Omit<
  RegisterType,
  'id' | 'createdAt' | 'updatedAt'
>;

// Update request type (partial of create request)
export type UpdateRegisterRequest = Partial<CreateRegisterRequest>;

// Response type (same as base type)
export type RegisterResponse = RegisterType;

// List response type
export type RegisterListResponse = RegisterType[];

// ID type for references
export type RegisterId = string;

// Partial type for patches
export type PartialRegister = Partial<RegisterType>;
