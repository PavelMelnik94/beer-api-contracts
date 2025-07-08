// Auto-generated validation rules from ProductCommentAuthorSchema
export const ProductCommentAuthorValidation = {
  "id": {
    "type": "string",
    "required": true
  },
  "firstName": {
    "type": "string",
    "required": true
  },
  "lastName": {
    "type": "string",
    "required": true
  },
  "avatar": {
    "required": true,
    "type": "string"
  }
};

export type ProductCommentAuthorValidationRules = typeof ProductCommentAuthorValidation;
