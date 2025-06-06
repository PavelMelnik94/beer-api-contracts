// Auto-generated validation rules from FavoriteSchema
export const FavoriteValidation = {
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
  "createdAt": {
    "type": "date",
    "required": true
  },
  "product": {
    "required": true,
    "type": "unknown"
  }
};

export type FavoriteValidationRules = typeof FavoriteValidation;
