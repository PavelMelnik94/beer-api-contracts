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
        description: string | null;
        id: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    }[];
    brewery: {
        name: string;
        description: string | null;
        location: string | null;
        website: string | null;
        shortDescription: string | null;
        logo: string | null;
        id: string;
        createdAt: Date | string;
        updatedAt: Date | string;
    };
    averageRating?: (number | null) | undefined;
    createdAt: Date | string;
    updatedAt: Date | string;
};
