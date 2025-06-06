// Auto-generated validation rules from CategoryResponseSchema
export const CategoryResponseValidation = {
  name: {
    type: 'string',
    min: 1,
    max: 100,
    required: true,
  },
  description: {
    required: true,
    type: 'string',
  },
  id: {
    type: 'string',
    format: 'uuid',
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

export type CategoryResponseValidationRules = typeof CategoryResponseValidation;
