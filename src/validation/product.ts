// Auto-generated validation rules from ProductSchema
export const ProductValidation = {
  title: {
    type: 'string',
    min: 1,
    max: 255,
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  price: {
    type: 'number',
    min: 0,
    required: true,
  },
  discount: {
    required: true,
    type: 'number',
    min: 0,
  },
  ABV: {
    type: 'number',
    min: 0,
    required: true,
  },
  IBU: {
    required: true,
    type: 'number',
    min: 0,
  },
  country: {
    type: 'string',
    min: 1,
    required: true,
  },
  isDiscount: {
    type: 'unknown',
    required: true,
  },
  images: {
    type: 'array',
    required: true,
  },
  breweryId: {
    type: 'string',
    format: 'uuid',
    required: true,
  },
  categoryIds: {
    type: 'array',
    required: true,
  },
};

export type ProductValidationRules = typeof ProductValidation;
