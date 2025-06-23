// Auto-generated validation rules from BlogPostSchema
export const BlogPostValidation = {
  "title": {
    "type": "string",
    "min": 1,
    "max": 255,
    "required": true
  },
  "shortDescription": {
    "type": "string",
    "min": 1,
    "max": 500,
    "required": true
  },
  "longDescription": {
    "type": "string",
    "min": 1,
    "required": true
  },
  "image": {
    "required": true,
    "type": "string",
    "format": "url"
  },
  "tagNames": {
    "required": true,
    "type": "array"
  }
};

export type BlogPostValidationRules = typeof BlogPostValidation;
