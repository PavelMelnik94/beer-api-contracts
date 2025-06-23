// Auto-generated from src/modules/products/dto/get-products.dto.ts
export type GetProductsType = {
    search?: string | undefined;
    sortBy?: ("price" | "ABV" | "IBU" | "title" | "createdAt") | undefined;
    sortOrder?: ("asc" | "desc") | undefined;
    categoryIds?: (string | string[]) | undefined;
    breweryId?: string | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
    minABV?: number | undefined;
    maxABV?: number | undefined;
    minIBU?: number | undefined;
    maxIBU?: number | undefined;
    isDiscount?: boolean | undefined;
    page?: number | undefined;
    limit?: number | undefined;
};
