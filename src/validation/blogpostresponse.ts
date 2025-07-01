// Auto-generated validation rules from BlogPostResponseSchema
export const BlogPostResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "title": {
    "type": "string",
    "required": true
  },
  "shortDescription": {
    "type": "string",
    "required": true
  },
  "image": {
    "type": "unknown",
    "required": true
  },
  "author": {
    "type": "unknown",
    "required": true
  },
  "tags": {
    "type": "array",
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
  "commentsCount": {
    "type": "number",
    "required": true
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  },
  "longDescription": {
    "type": "string",
    "required": true
  },
  "updatedAt": {
    "type": "unknown",
    "required": true
  }
};

export type BlogPostResponseValidationRules = typeof BlogPostResponseValidation;
