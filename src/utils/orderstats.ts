// Auto-generated utility types for OrderStats
import type { OrderStatsType } from '../types/orders-orderstats';

// Create request type (omit id, createdAt, updatedAt)
export type CreateOrderStatsRequest = Omit<OrderStatsType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateOrderStatsRequest = Partial<CreateOrderStatsRequest>;

// Response type (same as base type)
export type OrderStatsResponse = OrderStatsType;

// List response type
export type OrderStatsListResponse = OrderStatsType[];

// ID type for references
export type OrderStatsId = string;

// Partial type for patches
export type PartialOrderStats = Partial<OrderStatsType>;
