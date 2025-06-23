// Auto-generated validation rules from BlogCommentResponseSchema
export const BlogCommentResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "content": {
    "type": "string",
    "required": true
  },
  "author": {
    "type": "unknown",
    "required": true
  },
  "likesCount": {
    "type": "number",
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

export type BlogCommentResponseValidationRules = typeof BlogCommentResponseValidation;
