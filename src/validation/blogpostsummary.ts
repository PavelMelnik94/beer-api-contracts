// Auto-generated validation rules from BlogPostSummarySchema
export const BlogPostSummaryValidation = {
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
  "commentsCount": {
    "type": "number",
    "required": true
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  }
};

export type BlogPostSummaryValidationRules = typeof BlogPostSummaryValidation;
