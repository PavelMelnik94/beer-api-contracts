// Auto-generated utility types for Category
import type { CategoryType } from '../types/category-category';

// Create request type (omit id, createdAt, updatedAt)
export type CreateCategoryRequest = Omit<
  CategoryType,
  'id' | 'createdAt' | 'updatedAt'
>;

// Update request type (partial of create request)
export type UpdateCategoryRequest = Partial<CreateCategoryRequest>;

// Response type (same as base type)
export type CategoryResponse = CategoryType;

// List response type
export type CategoryListResponse = CategoryType[];

// ID type for references
export type CategoryId = string;

// Partial type for patches
export type PartialCategory = Partial<CategoryType>;
