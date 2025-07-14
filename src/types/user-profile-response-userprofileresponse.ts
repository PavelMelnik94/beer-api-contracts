// Auto-generated from src/modules/users/dto/user-profile-response.dto.ts
export type UserProfileResponseType = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string | null;
    addresses: {
        id: string;
        type: "billing" | "shipping";
        city: string;
        country: string;
        streetName: string;
        zip: string;
        isPrimaryAddress: boolean;
        userId: string;
        billingUserId: string | null;
        shippingUserId: string | null;
    }[];
    likedPostsCount: number;
    likedCommentsCount: number;
    createdAt: string;
    updatedAt: string;
};
