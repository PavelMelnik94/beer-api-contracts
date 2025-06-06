// Auto-generated API endpoint types for products
import type { RateProductType } from '../types/rating-rateproduct';
import type { ProductRatingType } from '../types/rating-productrating';
import type { ProductType } from '../types/product-product';
import type { CreateProductType } from '../types/product-createproduct';
import type { UpdateProductType } from '../types/product-updateproduct';
import type { ProductResponseType } from '../types/product-productresponse';
import type { GetProductsType } from '../types/get-products-getproducts';

export interface ProductsApiEndpoints {
  getById: { params: { id: string }; response: RateProductType };
  getProductRatingById: { params: { id: string }; response: ProductRatingType };
  getProductById: { params: { id: string }; response: ProductType };
  create: { body: CreateProductType; response: ProductResponseType };
  update: { body: UpdateProductType; params: { id: string }; response: ProductResponseType };
  getGetProducts: { query: GetProductsType; response: ProductResponseType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for products
export type ProductsApiClient = {
  [K in keyof ProductsApiEndpoints]: (
    data: ProductsApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : ProductsApiEndpoints[K] extends { body: infer B }
      ? { body: B }
      : ProductsApiEndpoints[K] extends { query: infer Q }
      ? { query: Q }
      : ProductsApiEndpoints[K] extends { params: infer P }
      ? { params: P }
      : never
  ) => Promise<ProductsApiEndpoints[K] extends { response: infer R } ? R : void>;
};
