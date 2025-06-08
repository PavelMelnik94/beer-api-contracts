// Auto-generated validation rules from AddressResponseSchema
export const AddressResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "city": {
    "type": "string",
    "required": true
  },
  "country": {
    "type": "string",
    "required": true
  },
  "streetName": {
    "type": "string",
    "required": true
  },
  "zip": {
    "type": "string",
    "required": true
  },
  "type": {
    "type": "enum",
    "required": true
  },
  "isPrimaryAddress": {
    "type": "boolean",
    "required": true
  },
  "userId": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "billingUserId": {
    "type": "unknown",
    "required": true
  },
  "shippingUserId": {
    "type": "unknown",
    "required": true
  },
  "createdAt": {
    "type": "unknown",
    "required": true
  },
  "updatedAt": {
    "type": "unknown",
    "required": true
  }
};

export type AddressResponseValidationRules = typeof AddressResponseValidation;
