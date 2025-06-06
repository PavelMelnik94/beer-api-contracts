// Auto-generated validation rules from BreweryResponseSchema
export const BreweryResponseValidation = {
  "name": {
    "type": "string",
    "min": 1,
    "max": 100,
    "required": true
  },
  "description": {
    "required": true,
    "type": "string"
  },
  "location": {
    "required": true,
    "type": "string"
  },
  "website": {
    "required": true,
    "type": "string",
    "format": "url"
  },
  "id": {
    "type": "string",
    "format": "uuid",
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

export type BreweryResponseValidationRules = typeof BreweryResponseValidation;
