// Auto-generated from src/modules/products/dto/product.dto.ts
export type ProductResponseType = {
    id: string;
    title: string;
    description: string;
    price: number;
    discount: number | null;
    ABV: number;
    IBU: number | null;
    country: string;
    isDiscount: boolean;
    images: string[];
    categories: {
        name: string;
        description?: string | undefined;
        id: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    }[];
    brewery: {
        name: string;
        description?: string | undefined;
        location?: string | undefined;
        website?: string | undefined;
        id: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    };
    averageRating?: (number | null) | undefined;
    createdAt: Date | string;
    updatedAt: Date | string;
};
