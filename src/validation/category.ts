// Auto-generated validation rules from CategorySchema
export const CategoryValidation = {
  "name": {
    "type": "string",
    "min": 1,
    "max": 100,
    "required": true
  },
  "description": {
    "required": true,
    "type": "unknown"
  }
};

export type CategoryValidationRules = typeof CategoryValidation;
