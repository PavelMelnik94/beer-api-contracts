// Auto-generated from src/modules/products/dto/product-comment.dto.ts
export type PaginatedProductCommentsResultType = {
    items: {
        id: string;
        content: string;
        author: {
            id: string;
            firstName: string;
            lastName: string;
            avatar?: string | undefined;
        };
        likesCount: number;
        likedByUserIds: string[];
        createdAt: Date;
        updatedAt: Date;
    }[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
};
