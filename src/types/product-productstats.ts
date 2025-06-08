// Auto-generated from src/modules/products/dto/product.dto.ts
export type ProductStatsType = {
    totalProducts: number;
    discountedProducts: number;
    availableProducts: number;
    avgPrice: number;
    priceRange: {
        min: number;
        max: number;
    };
    topCategories: {
        id: string;
        name: string;
        productCount: number;
    }[];
};
