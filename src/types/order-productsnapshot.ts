// Auto-generated from src/modules/cart/dto/order.dto.ts
export type ProductSnapshotType = {
    id: string;
    title: string;
    description: string;
    price: number;
    discount?: (number | undefined) | null;
    offPercent?: (number | undefined) | null;
    ABV: number;
    country: string;
    IBU?: (number | undefined) | null;
    images: string[];
    isDiscount: boolean;
    averageRating?: (number | undefined) | null;
    brewery: {
        id: string;
        name: string;
        description?: (string | undefined) | null;
        location?: (string | undefined) | null;
        website?: (string | undefined) | null;
        logo?: (string | undefined) | null;
    };
    categories: {
        id: string;
        name: string;
        description?: (string | undefined) | null;
    }[];
};
