// Auto-generated validation rules from UpdateBlogPostSchema
export const UpdateBlogPostValidation = {
  "title": {
    "required": true,
    "type": "string",
    "min": 1,
    "max": 255
  },
  "shortDescription": {
    "required": true,
    "type": "string",
    "min": 1,
    "max": 500
  },
  "longDescription": {
    "required": true,
    "type": "string",
    "min": 1
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

export type UpdateBlogPostValidationRules = typeof UpdateBlogPostValidation;
