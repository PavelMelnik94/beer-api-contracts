// Auto-generated utility types for PaginatedOrders
import type { PaginatedOrdersType } from '../types/orders-paginatedorders';

// Create request type (omit id, createdAt, updatedAt)
export type CreatePaginatedOrdersRequest = Omit<PaginatedOrdersType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdatePaginatedOrdersRequest = Partial<CreatePaginatedOrdersRequest>;

// Response type (same as base type)
export type PaginatedOrdersResponse = PaginatedOrdersType;

// List response type
export type PaginatedOrdersListResponse = PaginatedOrdersType[];

// ID type for references
export type PaginatedOrdersId = string;

// Partial type for patches
export type PartialPaginatedOrders = Partial<PaginatedOrdersType>;
