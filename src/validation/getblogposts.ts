// Auto-generated validation rules from GetBlogPostsSchema
export const GetBlogPostsValidation = {
  "page": {
    "type": "unknown",
    "required": true
  },
  "limit": {
    "type": "unknown",
    "required": true
  },
  "search": {
    "required": true,
    "type": "string"
  },
  "tags": {
    "required": true,
    "type": "unknown"
  },
  "sortBy": {
    "type": "unknown",
    "required": true
  },
  "sortOrder": {
    "type": "unknown",
    "required": true
  }
};

export type GetBlogPostsValidationRules = typeof GetBlogPostsValidation;
