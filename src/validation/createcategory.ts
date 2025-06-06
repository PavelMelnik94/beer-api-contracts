// Auto-generated validation rules from CreateCategorySchema
export const CreateCategoryValidation = {
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
};

export type CreateCategoryValidationRules = typeof CreateCategoryValidation;
