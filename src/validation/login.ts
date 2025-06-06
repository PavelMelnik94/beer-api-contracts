// Auto-generated validation rules from LoginSchema
export const LoginValidation = {
  "email": {
    "type": "string",
    "format": "email",
    "required": true
  },
  "password": {
    "type": "string",
    "min": 6,
    "required": true
  }
};

export type LoginValidationRules = typeof LoginValidation;
