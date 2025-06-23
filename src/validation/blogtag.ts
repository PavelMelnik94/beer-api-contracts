// Auto-generated validation rules from BlogTagSchema
export const BlogTagValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "name": {
    "type": "string",
    "required": true
  }
};

export type BlogTagValidationRules = typeof BlogTagValidation;
