// Auto-generated utility types for AddToCart
import type { AddToCartType } from '../types/add-to-cart-adcart';

// Create request type (omit id, createdAt, updatedAt)
export type CreateAddToCartRequest = Omit<
  AddToCartType,
  'id' | 'createdAt' | 'updatedAt'
>;

// Update request type (partial of create request)
export type UpdateAddToCartRequest = Partial<CreateAddToCartRequest>;

// Response type (same as base type)
export type AddToCartResponse = AddToCartType;

// List response type
export type AddToCartListResponse = AddToCartType[];

// ID type for references
export type AddToCartId = string;

// Partial type for patches
export type PartialAddToCart = Partial<AddToCartType>;
