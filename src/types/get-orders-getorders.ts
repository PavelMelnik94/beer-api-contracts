// Auto-generated from src/modules/orders/dto/get-orders.dto.ts
export type GetOrdersType = {
    page?: string;
    limit?: string;
    status?: ("pending" | "completed" | "cancelled") | undefined;
    sortBy?: ("createdAt" | "total" | "status");
    sortOrder?: ("asc" | "desc");
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
};
