// Auto-generated API endpoint types for orders
import type { OrderItemType } from '../types/orders-orderitem';
import type { OrderType } from '../types/orders-order';
import type { PaginatedOrdersType } from '../types/orders-paginatedorders';
import type { OrderStatsType } from '../types/orders-orderstats';
import type { GetOrdersType } from '../types/get-orders-getorders';

export interface OrdersApiEndpoints {
  getById: { params: { id: string }; response: OrderItemType };
  getOrderById: { params: { id: string }; response: OrderType };
  getPaginatedOrdersById: { params: { id: string }; response: PaginatedOrdersType };
  getOrderStatsById: { params: { id: string }; response: OrderStatsType };
  getGetOrders: { query: GetOrdersType; response: GetOrdersType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for orders
export type OrdersApiClient = {
  [K in keyof OrdersApiEndpoints]: (
    data: OrdersApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : OrdersApiEndpoints[K] extends { body: infer B }
      ? { body: B }
      : OrdersApiEndpoints[K] extends { query: infer Q }
      ? { query: Q }
      : OrdersApiEndpoints[K] extends { params: infer P }
      ? { params: P }
      : never
  ) => Promise<OrdersApiEndpoints[K] extends { response: infer R } ? R : void>;
};
