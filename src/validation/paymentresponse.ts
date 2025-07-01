// Auto-generated validation rules from PaymentResponseSchema
export const PaymentResponseValidation = {
  "success": {
    "type": "boolean",
    "required": true
  },
  "message": {
    "type": "string",
    "required": true
  },
  "order": {
    "type": "unknown",
    "required": true
  }
};

export type PaymentResponseValidationRules = typeof PaymentResponseValidation;
