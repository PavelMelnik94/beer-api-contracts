// Auto-generated validation rules from AddToCartSchema
export const AddToCartValidation = {
  "productId": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "quantity": {
    "type": "number",
    "min": 0,
    "required": true
  }
};

export type AddToCartValidationRules = typeof AddToCartValidation;
