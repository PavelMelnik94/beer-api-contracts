// Auto-generated validation rules from ProductSnapshotSchema
export const ProductSnapshotValidation = {
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
  "offPercent": {
    "type": "unknown",
    "required": true
  },
  "ABV": {
    "type": "number",
    "required": true
  },
  "country": {
    "type": "string",
    "required": true
  },
  "IBU": {
    "type": "unknown",
    "required": true
  },
  "images": {
    "type": "array",
    "required": true
  },
  "isDiscount": {
    "type": "boolean",
    "required": true
  },
  "averageRating": {
    "type": "unknown",
    "required": true
  },
  "brewery": {
    "type": "unknown",
    "required": true
  },
  "categories": {
    "type": "array",
    "required": true
  }
};

export type ProductSnapshotValidationRules = typeof ProductSnapshotValidation;
