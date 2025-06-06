// Auto-generated validation rules from UpdateCategorySchema
export const UpdateCategoryValidation = {
  "name": {
    "required": true,
    "type": "string",
    "min": 1,
    "max": 100
  },
  "description": {
    "required": true,
    "type": "string"
  }
};

export type UpdateCategoryValidationRules = typeof UpdateCategoryValidation;
