// Auto-generated API endpoint types for cart
import type { CartItemType } from '../types/zod-schemas-cartitem';
import type { CartType } from '../types/zod-schemas-cart';
import type { PromoCodeType } from '../types/zod-schemas-promocode';
import type { UpdateCartItemType } from '../types/update-cart-item-updatecartitem';
import type { AddToCartType } from '../types/add-to-cart-adcart';

export interface CartApiEndpoints {
  getById: { params: { id: string }; response: CartItemType };
  getCartById: { params: { id: string }; response: CartType };
  getPromoCodeById: { params: { id: string }; response: PromoCodeType };
  update: { body: UpdateCartItemType; params: { id: string }; response: UpdateCartItemType };
  getAddToCartById: { params: { id: string }; response: AddToCartType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for cart
export type CartApiClient = {
  [K in keyof CartApiEndpoints]: (
    data: CartApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : CartApiEndpoints[K] extends { body: infer B }
      ? { body: B }
      : CartApiEndpoints[K] extends { query: infer Q }
      ? { query: Q }
      : CartApiEndpoints[K] extends { params: infer P }
      ? { params: P }
      : never
  ) => Promise<CartApiEndpoints[K] extends { response: infer R } ? R : void>;
};
