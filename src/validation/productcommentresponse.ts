// Auto-generated validation rules from ProductCommentResponseSchema
export const ProductCommentResponseValidation = {
  "id": {
    "type": "string",
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
  "likedByUserIds": {
    "type": "array",
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

export type ProductCommentResponseValidationRules = typeof ProductCommentResponseValidation;
