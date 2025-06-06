// Auto-generated validation rules from UserAvatarSchema
export const UserAvatarValidation = {
  id: {
    type: 'string',
    format: 'uuid',
    required: true,
  },
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
  avatar: {
    type: 'unknown',
    required: true,
  },
  createdAt: {
    type: 'unknown',
    required: true,
  },
  updatedAt: {
    type: 'unknown',
    required: true,
  },
};

export type UserAvatarValidationRules = typeof UserAvatarValidation;
