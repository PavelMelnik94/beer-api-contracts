// Auto-generated from src/modules/users/dto/address-response.dto.ts
export type AddressResponseType = {
    id: string;
    city: string;
    country: string;
    streetName: string;
    zip: string;
    type: "billing" | "shipping";
    isPrimaryAddress: boolean;
    userId: string;
    billingUserId: string | null;
    shippingUserId: string | null;
    createdAt: Date | string;
    updatedAt: Date | string;
};
