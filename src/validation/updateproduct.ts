// Auto-generated validation rules from UpdateProductSchema
export const UpdateProductValidation = {
  "title": {
    "required": true,
    "type": "string",
    "min": 1,
    "max": 255
  },
  "description": {
    "required": true,
    "type": "string"
  },
  "price": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "discount": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "ABV": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "IBU": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "country": {
    "required": true,
    "type": "string",
    "min": 1
  },
  "isDiscount": {
    "required": true,
    "type": "unknown"
  },
  "images": {
    "required": true,
    "type": "array"
  },
  "breweryId": {
    "required": true,
    "type": "string",
    "format": "uuid"
  },
  "categoryIds": {
    "required": true,
    "type": "array"
  }
};

export type UpdateProductValidationRules = typeof UpdateProductValidation;
