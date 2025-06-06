// Auto-generated utility types for Product
import type { ProductType } from '../types/product-product';

// Create request type (omit id, createdAt, updatedAt)
export type CreateProductRequest = Omit<ProductType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateProductRequest = Partial<CreateProductRequest>;

// Response type (same as base type)
export type ProductResponse = ProductType;

// List response type
export type ProductListResponse = ProductType[];

// ID type for references
export type ProductId = string;

// Partial type for patches
export type PartialProduct = Partial<ProductType>;
