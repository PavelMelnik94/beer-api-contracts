// Auto-generated from src/modules/blog/dto/blog-post-zod.dto.ts
export type GetBlogPostsType = {
    page?: number;
    limit?: number;
    search?: string | undefined;
    tags?: (string[] | string) | undefined;
    sortBy?: "createdAt" | "title" | "likesCount" | "commentsCount";
    sortOrder?: "asc" | "desc";
};
