// Auto-generated validation rules from OrderResponseSchema
export const OrderResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "userId": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "items": {
    "type": "array",
    "required": true
  },
  "total": {
    "type": "number",
    "min": 0,
    "required": true
  },
  "discountedTotal": {
    "type": "unknown",
    "required": true
  },
  "promoCode": {
    "type": "unknown",
    "required": true
  },
  "status": {
    "type": "string",
    "required": true
  },
  "userSnapshot": {
    "type": "unknown",
    "required": true
  },
  "billingAddress": {
    "type": "unknown",
    "required": true
  },
  "shippingAddress": {
    "type": "unknown",
    "required": true
  },
  "createdAt": {
    "type": "date",
    "required": true
  },
  "updatedAt": {
    "type": "date",
    "required": true
  }
};

export type OrderResponseValidationRules = typeof OrderResponseValidation;
