// Auto-generated API endpoint types for products
import type { RateProductType } from '../types/rating-rateproduct';
import type { ProductRatingType } from '../types/rating-productrating';
import type { ProductType } from '../types/product-product';
import type { CreateProductType } from '../types/product-createproduct';
import type { UpdateProductType } from '../types/product-updateproduct';
import type { ProductResponseType } from '../types/product-productresponse';
import type { ProductStatsType } from '../types/product-productstats';
import type { CreateProductCommentType } from '../types/product-comment-createproductcomment';
import type { UpdateProductCommentType } from '../types/product-comment-updateproductcomment';
import type { GetProductCommentsType } from '../types/product-comment-getproductcomments';
import type { ProductCommentAuthorType } from '../types/product-comment-productcommentauthor';
import type { ProductCommentResponseType } from '../types/product-comment-productcommentresponse';
import type { PaginatedProductCommentsResultType } from '../types/product-comment-paginatedproductcommentsresult';
import type { GetProductsType } from '../types/get-products-getproducts';

export interface ProductsApiEndpoints {
  getById: { params: { id: string }; response: RateProductType };
  getProductRatingById: { params: { id: string }; response: ProductRatingType };
  getProductById: { params: { id: string }; response: ProductType };
  create: { body: CreateProductCommentType; response: ProductResponseType };
  update: { body: UpdateProductCommentType; params: { id: string }; response: ProductResponseType };
  getProductStatsById: { params: { id: string }; response: ProductStatsType };
  getGetProductComments: { query: GetProductCommentsType; response: ProductResponseType };
  getProductCommentAuthorById: { params: { id: string }; response: ProductCommentAuthorType };
  getPaginatedProductCommentsResultById: { params: { id: string }; response: PaginatedProductCommentsResultType };
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
