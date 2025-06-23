// Auto-generated from src/modules/blog/dto/blog-post-zod.dto.ts
export type PaginatedBlogPostsType = {
    items: {
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
    }[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
    };
};
