// Auto-generated validation rules from CartSchema
export const CartValidation = {
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
  "items": {
    "type": "array",
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

export type CartValidationRules = typeof CartValidation;
