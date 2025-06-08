// Auto-generated validation rules from CategoryResponseSchema
export const CategoryResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "name": {
    "type": "string",
    "min": 1,
    "max": 100,
    "required": true
  },
  "description": {
    "type": "unknown",
    "required": true
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

export type CategoryResponseValidationRules = typeof CategoryResponseValidation;
