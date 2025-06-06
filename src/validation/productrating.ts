// Auto-generated validation rules from ProductRatingSchema
export const ProductRatingValidation = {
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

export type ProductRatingValidationRules = typeof ProductRatingValidation;
