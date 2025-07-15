// Auto-generated validation rules from UserProfileResponseSchema
export const UserProfileResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "email": {
    "type": "string",
    "format": "email",
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
    "type": "unknown",
    "required": true
  },
  "addresses": {
    "type": "array",
    "required": true
  },
  "likedPostsCount": {
    "type": "number",
    "required": true
  },
  "likedCommentsCount": {
    "type": "number",
    "required": true
  },
  "ordersCount": {
    "type": "number",
    "required": true
  },
  "createdAt": {
    "type": "string",
    "required": true
  },
  "updatedAt": {
    "type": "string",
    "required": true
  },
  "orders": {
    "required": true,
    "type": "array"
  },
  "likedPostIds": {
    "required": true,
    "type": "array"
  },
  "likedCommentIds": {
    "required": true,
    "type": "array"
  }
};

export type UserProfileResponseValidationRules = typeof UserProfileResponseValidation;
