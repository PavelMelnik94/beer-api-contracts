// Auto-generated validation rules from ChangePasswordDtoSchema
export const ChangePasswordDtoValidation = {
  "oldPassword": {
    "type": "string",
    "min": 6,
    "required": true
  },
  "newPassword": {
    "type": "string",
    "min": 6,
    "required": true
  }
};

export type ChangePasswordDtoValidationRules = typeof ChangePasswordDtoValidation;
