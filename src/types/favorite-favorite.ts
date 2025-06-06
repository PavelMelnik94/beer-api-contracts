// Auto-generated from src/modules/users/dto/favorite.dto.ts
export type FavoriteType = {
    id: string;
    userId: string;
    productId: string;
    createdAt: Date;
    product?: {
        id: string;
        title: string;
        price: number;
        description: string;
        images?: string[] | undefined;
        averageRating?: (number | undefined) | null;
    } | undefined;
};
