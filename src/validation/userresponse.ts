// Auto-generated validation rules from UserResponseSchema
export const UserResponseValidation = {
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
  "orders": {
    "required": true,
    "type": "array"
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  },
  "updatedAt": {
    "type": "unknown",
    "required": true
  }
};

export type UserResponseValidationRules = typeof UserResponseValidation;
