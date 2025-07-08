// Auto-generated from src/modules/products/dto/product-comment.dto.ts
export type ProductCommentResponseType = {
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
};
