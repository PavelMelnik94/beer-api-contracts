// Auto-generated validation rules from CreateBlogPostSchema
export const CreateBlogPostValidation = {
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

export type CreateBlogPostValidationRules = typeof CreateBlogPostValidation;
