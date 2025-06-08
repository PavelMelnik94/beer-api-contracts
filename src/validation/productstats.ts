// Auto-generated validation rules from ProductStatsSchema
export const ProductStatsValidation = {
  "totalProducts": {
    "type": "number",
    "required": true
  },
  "discountedProducts": {
    "type": "number",
    "required": true
  },
  "availableProducts": {
    "type": "number",
    "required": true
  },
  "avgPrice": {
    "type": "number",
    "required": true
  },
  "priceRange": {
    "type": "unknown",
    "required": true
  },
  "topCategories": {
    "type": "array",
    "required": true
  }
};

export type ProductStatsValidationRules = typeof ProductStatsValidation;
