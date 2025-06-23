// Auto-generated validation rules from AuthorSchema
export const AuthorValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
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
  }
};

export type AuthorValidationRules = typeof AuthorValidation;
