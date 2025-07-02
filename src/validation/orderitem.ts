// Auto-generated validation rules from OrderItemSchema
export const OrderItemValidation = {
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

export type OrderItemValidationRules = typeof OrderItemValidation;
