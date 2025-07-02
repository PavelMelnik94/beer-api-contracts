// Auto-generated validation rules from OrderStatsSchema
export const OrderStatsValidation = {
  "totalOrders": {
    "type": "number",
    "required": true
  },
  "totalSpent": {
    "type": "number",
    "required": true
  },
  "averageOrderValue": {
    "type": "number",
    "required": true
  },
  "ordersByStatus": {
    "type": "unknown",
    "required": true
  },
  "recentOrdersCount": {
    "type": "number",
    "required": true
  }
};

export type OrderStatsValidationRules = typeof OrderStatsValidation;
