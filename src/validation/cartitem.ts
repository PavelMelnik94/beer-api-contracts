// Auto-generated validation rules from CartItemSchema
export const CartItemValidation = {
  id: {
    type: 'string',
    format: 'uuid',
    required: true,
  },
  quantity: {
    type: 'number',
    min: 0,
    required: true,
  },
  productId: {
    type: 'string',
    format: 'uuid',
    required: true,
  },
  cartId: {
    type: 'string',
    format: 'uuid',
    required: true,
  },
  createdAt: {
    type: 'date',
    required: true,
  },
  updatedAt: {
    type: 'date',
    required: true,
  },
};

export type CartItemValidationRules = typeof CartItemValidation;
