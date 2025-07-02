// Auto-generated validation rules from GetOrdersSchema
export const GetOrdersValidation = {
  "page": {
    "type": "unknown",
    "required": true
  },
  "limit": {
    "type": "unknown",
    "required": true
  },
  "status": {
    "required": true,
    "type": "enum"
  },
  "sortBy": {
    "type": "unknown",
    "required": true
  },
  "sortOrder": {
    "type": "unknown",
    "required": true
  },
  "dateFrom": {
    "type": "unknown",
    "required": true
  },
  "dateTo": {
    "type": "unknown",
    "required": true
  }
};

export type GetOrdersValidationRules = typeof GetOrdersValidation;
