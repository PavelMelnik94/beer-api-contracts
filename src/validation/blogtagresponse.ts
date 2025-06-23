// Auto-generated validation rules from BlogTagResponseSchema
export const BlogTagResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "name": {
    "type": "string",
    "required": true
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  }
};

export type BlogTagResponseValidationRules = typeof BlogTagResponseValidation;
