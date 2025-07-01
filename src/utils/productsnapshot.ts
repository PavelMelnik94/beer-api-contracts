// Auto-generated utility types for ProductSnapshot
import type { ProductSnapshotType } from '../types/order-productsnapshot';

// Create request type (omit id, createdAt, updatedAt)
export type CreateProductSnapshotRequest = Omit<ProductSnapshotType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateProductSnapshotRequest = Partial<CreateProductSnapshotRequest>;

// Response type (same as base type)
export type ProductSnapshotResponse = ProductSnapshotType;

// List response type
export type ProductSnapshotListResponse = ProductSnapshotType[];

// ID type for references
export type ProductSnapshotId = string;

// Partial type for patches
export type PartialProductSnapshot = Partial<ProductSnapshotType>;
