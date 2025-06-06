// Auto-generated API endpoint types for categories
import type { CategoryType } from '../types/category-category';
import type { CreateCategoryType } from '../types/category-createcategory';
import type { UpdateCategoryType } from '../types/category-updatecategory';
import type { CategoryResponseType } from '../types/category-categoryresponse';

export interface CategoriesApiEndpoints {
  getById: { params: { id: string }; response: CategoryType };
  create: { body: CreateCategoryType; response: CategoryResponseType };
  update: {
    body: UpdateCategoryType;
    params: { id: string };
    response: CategoryResponseType;
  };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for categories
export type CategoriesApiClient = {
  [K in keyof CategoriesApiEndpoints]: (
    data: CategoriesApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : CategoriesApiEndpoints[K] extends { body: infer B }
        ? { body: B }
        : CategoriesApiEndpoints[K] extends { query: infer Q }
          ? { query: Q }
          : CategoriesApiEndpoints[K] extends { params: infer P }
            ? { params: P }
            : never,
  ) => Promise<
    CategoriesApiEndpoints[K] extends { response: infer R } ? R : void
  >;
};
