// Auto-generated utility types for Cart
import type { CartType } from '../types/zod-schemas-cart';

// Create request type (omit id, createdAt, updatedAt)
export type CreateCartRequest = Omit<CartType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateCartRequest = Partial<CreateCartRequest>;

// Response type (same as base type)
export type CartResponse = CartType;

// List response type
export type CartListResponse = CartType[];

// ID type for references
export type CartId = string;

// Partial type for patches
export type PartialCart = Partial<CartType>;
