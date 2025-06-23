// Auto-generated validation rules from GetProductsSchema
export const GetProductsValidation = {
  "search": {
    "required": true,
    "type": "string"
  },
  "sortBy": {
    "required": true,
    "type": "enum"
  },
  "sortOrder": {
    "required": true,
    "type": "enum"
  },
  "categoryIds": {
    "type": "unknown",
    "required": true
  },
  "breweryId": {
    "required": true,
    "type": "string"
  },
  "minPrice": {
    "required": true,
    "type": "number"
  },
  "maxPrice": {
    "required": true,
    "type": "number"
  },
  "minABV": {
    "required": true,
    "type": "number"
  },
  "maxABV": {
    "required": true,
    "type": "number"
  },
  "minIBU": {
    "required": true,
    "type": "number"
  },
  "maxIBU": {
    "required": true,
    "type": "number"
  },
  "isDiscount": {
    "required": true,
    "type": "boolean"
  },
  "page": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "limit": {
    "required": true,
    "type": "number",
    "min": 0
  }
};

export type GetProductsValidationRules = typeof GetProductsValidation;
