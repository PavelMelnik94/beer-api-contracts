// Auto-generated from src/modules/products/dto/get-products.dto.ts
export const ProductSortFields = [
  'price',
  'ABV',
  'IBU',
  'title',
  'createdAt',
] as const;
export type ProductSortFieldsType = (typeof ProductSortFields)[number];

// Alternative union type
export type ProductSortFieldsUnion =
  | 'price'
  | 'ABV'
  | 'IBU'
  | 'title'
  | 'createdAt';
