// Auto-generated from src/modules/orders/dto/orders.dto.ts
export type PaginatedOrdersType = {
    items: {
        id: string;
        userId: string;
        items: {
            id: string;
            productSnapshot?: any;
            quantity: number;
            price: number;
            discount?: (number | undefined) | null;
            createdAt: Date;
        }[];
        total: number;
        discountedTotal?: (number | undefined) | null;
        promoCode?: (string | undefined) | null;
        status: string;
        userSnapshot?: any;
        billingAddress?: (any | undefined) | null;
        shippingAddress?: (any | undefined) | null;
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
