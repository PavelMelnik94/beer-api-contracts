// Auto-generated utility types for Order
import type { OrderType } from '../types/orders-order';

// Create request type (omit id, createdAt, updatedAt)
export type CreateOrderRequest = Omit<OrderType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateOrderRequest = Partial<CreateOrderRequest>;

// Response type (same as base type)
export type OrderResponse = OrderType;

// List response type
export type OrderListResponse = OrderType[];

// ID type for references
export type OrderId = string;

// Partial type for patches
export type PartialOrder = Partial<OrderType>;
