// Auto-generated validation rules from RateProductSchema
export const RateProductValidation = {
  "productId": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "rating": {
    "type": "number",
    "min": 1,
    "max": 5,
    "required": true
  }
};

export type RateProductValidationRules = typeof RateProductValidation;
