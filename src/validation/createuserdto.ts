// Auto-generated validation rules from CreateUserDtoSchema
export const CreateUserDtoValidation = {
  email: {
    type: 'string',
    format: 'email',
    required: true,
  },
  firstName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    min: 8,
    required: true,
  },
};

export type CreateUserDtoValidationRules = typeof CreateUserDtoValidation;
