// Auto-generated validation rules from OrderItemResponseSchema
export const OrderItemResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "productSnapshot": {
    "type": "unknown",
    "required": true
  },
  "quantity": {
    "type": "number",
    "min": 0,
    "required": true
  },
  "price": {
    "type": "number",
    "min": 0,
    "required": true
  },
  "discount": {
    "type": "unknown",
    "required": true
  },
  "createdAt": {
    "type": "date",
    "required": true
  }
};

export type OrderItemResponseValidationRules = typeof OrderItemResponseValidation;
