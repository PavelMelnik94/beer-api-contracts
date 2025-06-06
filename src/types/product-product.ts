// Auto-generated from src/modules/products/dto/product.dto.ts
export type ProductType = {
  title: string;
  description: string;
  price: number;
  discount?: number | undefined;
  ABV: number;
  IBU?: number | undefined;
  country: string;
  isDiscount?: boolean;
  images: string[];
  breweryId: string;
  categoryIds: string[];
};
