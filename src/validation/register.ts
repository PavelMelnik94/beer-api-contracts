// Auto-generated validation rules from RegisterSchema
export const RegisterValidation = {
  "email": {
    "type": "string",
    "format": "email",
    "required": true
  },
  "password": {
    "type": "string",
    "min": 6,
    "required": true
  },
  "firstName": {
    "type": "string",
    "min": 1,
    "required": true
  },
  "lastName": {
    "type": "string",
    "min": 1,
    "required": true
  },
  "addresses": {
    "type": "unknown",
    "required": true
  }
};

export type RegisterValidationRules = typeof RegisterValidation;
