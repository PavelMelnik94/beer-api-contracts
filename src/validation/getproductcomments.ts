// Auto-generated validation rules from GetProductCommentsSchema
export const GetProductCommentsValidation = {
  "page": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "limit": {
    "required": true,
    "type": "number",
    "min": 0
  },
  "sortOrder": {
    "required": true,
    "type": "enum"
  }
};

export type GetProductCommentsValidationRules = typeof GetProductCommentsValidation;
