// Auto-generated validation rules from ProductResponseSchema
export const ProductResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "title": {
    "type": "string",
    "required": true
  },
  "description": {
    "type": "string",
    "required": true
  },
  "price": {
    "type": "number",
    "required": true
  },
  "discount": {
    "type": "unknown",
    "required": true
  },
  "ABV": {
    "type": "number",
    "required": true
  },
  "IBU": {
    "type": "unknown",
    "required": true
  },
  "country": {
    "type": "string",
    "required": true
  },
  "isDiscount": {
    "type": "boolean",
    "required": true
  },
  "images": {
    "type": "array",
    "required": true
  },
  "categories": {
    "type": "array",
    "required": true
  },
  "brewery": {
    "type": "unknown",
    "required": true
  },
  "averageRating": {
    "required": true,
    "type": "unknown"
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  },
  "updatedAt": {
    "type": "unknown",
    "required": true
  }
};

export type ProductResponseValidationRules = typeof ProductResponseValidation;
