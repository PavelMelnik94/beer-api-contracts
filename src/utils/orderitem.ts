// Auto-generated utility types for OrderItem
import type { OrderItemType } from '../types/orders-orderitem';

// Create request type (omit id, createdAt, updatedAt)
export type CreateOrderItemRequest = Omit<OrderItemType, 'id' | 'createdAt' | 'updatedAt'>;

// Update request type (partial of create request)
export type UpdateOrderItemRequest = Partial<CreateOrderItemRequest>;

// Response type (same as base type)
export type OrderItemResponse = OrderItemType;

// List response type
export type OrderItemListResponse = OrderItemType[];

// ID type for references
export type OrderItemId = string;

// Partial type for patches
export type PartialOrderItem = Partial<OrderItemType>;
