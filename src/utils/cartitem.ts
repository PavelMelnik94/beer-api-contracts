// Auto-generated utility types for CartItem
import type { CartItemType } from '../types/zod-schemas-cartitem';

// Create request type (omit id, createdAt, updatedAt)
export type CreateCartItemRequest = Omit<CartItemType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateCartItemRequest = Partial<CreateCartItemRequest>;

// Response type (same as base type)
export type CartItemResponse = CartItemType;

// List response type
export type CartItemListResponse = CartItemType[];

// ID type for references
export type CartItemId = string;

// Partial type for patches
export type PartialCartItem = Partial<CartItemType>;
