// Auto-generated validation rules from PaymentSchema
export const PaymentValidation = {
  "paymentMethod": {
    "type": "unknown",
    "required": true
  },
  "billingAddressId": {
    "required": true,
    "type": "string",
    "format": "uuid"
  },
  "shippingAddressId": {
    "required": true,
    "type": "string",
    "format": "uuid"
  }
};

export type PaymentValidationRules = typeof PaymentValidation;
