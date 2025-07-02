// Auto-generated from src/modules/orders/dto/orders.dto.ts
export type OrderStatsType = {
    totalOrders: number;
    totalSpent: number;
    averageOrderValue: number;
    ordersByStatus: {
        [x: string]: number;
    };
    recentOrdersCount: number;
};
