// Auto-generated validation rules from BlogLikeResponseSchema
export const BlogLikeResponseValidation = {
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
  "createdAt": {
    "type": "unknown",
    "required": true
  }
};

export type BlogLikeResponseValidationRules = typeof BlogLikeResponseValidation;
