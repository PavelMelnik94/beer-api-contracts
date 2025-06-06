// Auto-generated validation rules from PromoCodeSchema
export const PromoCodeValidation = {
  code: {
    type: 'string',
    required: true,
  },
  discount: {
    type: 'number',
    required: true,
  },
  valid: {
    type: 'boolean',
    required: true,
  },
};

export type PromoCodeValidationRules = typeof PromoCodeValidation;
