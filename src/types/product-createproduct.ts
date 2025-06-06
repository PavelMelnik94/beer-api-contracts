// Auto-generated from src/modules/products/dto/product.dto.ts
export type CreateProductType = {
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
