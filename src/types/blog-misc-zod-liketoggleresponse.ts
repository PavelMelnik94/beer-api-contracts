// Auto-generated from src/modules/blog/dto/blog-misc-zod.dto.ts
export type LikeToggleResponseType = {
    liked: boolean;
    like: {
        id: string;
        userId: string;
        createdAt: Date | string;
    } | null;
};
