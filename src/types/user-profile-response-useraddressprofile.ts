// Auto-generated from src/modules/users/dto/user-profile-response.dto.ts
export type UserAddressProfileType = {
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
};
