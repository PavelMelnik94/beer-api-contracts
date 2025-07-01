// Auto-generated from src/modules/blog/dto/blog-comment-zod.dto.ts
export type BlogCommentResponseType = {
    id: string;
    content: string;
    author: {
        id: string;
        firstName: string;
        lastName: string;
        avatar: string | null;
    };
    likesCount: number;
    likedByUserIds: string[];
    createdAt: Date | string;
    updatedAt: Date | string;
};
