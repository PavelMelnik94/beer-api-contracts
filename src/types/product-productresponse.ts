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
        id: string;
        name: string;
        description: string | null;
        createdAt: Date | string;
        updatedAt: Date | string;
    }[];
    brewery: {
        id: string;
        name: string;
        description: string | null;
        location: string | null;
        website: string | null;
        shortDescription: string | null;
        logo: string | null;
        createdAt: Date | string;
        updatedAt: Date | string;
    };
    averageRating?: (number | null) | undefined;
    createdAt: Date | string;
    updatedAt: Date | string;
};
