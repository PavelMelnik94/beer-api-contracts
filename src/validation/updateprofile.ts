// Auto-generated validation rules from UpdateProfileSchema
export const UpdateProfileValidation = {
  "firstName": {
    "required": true,
    "type": "string",
    "min": 1
  },
  "lastName": {
    "required": true,
    "type": "string",
    "min": 1
  },
  "email": {
    "required": true,
    "type": "string",
    "format": "email"
  }
};

export type UpdateProfileValidationRules = typeof UpdateProfileValidation;
