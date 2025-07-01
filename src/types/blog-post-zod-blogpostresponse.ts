// Auto-generated from src/modules/blog/dto/blog-post-zod.dto.ts
export type BlogPostResponseType = {
    id: string;
    title: string;
    shortDescription: string;
    image: string | null;
    author: {
        id: string;
        firstName: string;
        lastName: string;
        avatar: string | null;
    };
    tags: {
        id: string;
        name: string;
    }[];
    likesCount: number;
    commentsCount: number;
    createdAt: Date | string;
    longDescription: string;
    updatedAt: Date | string;
};
