// Auto-generated validation rules from BreweryResponseSchema
export const BreweryResponseValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "name": {
    "type": "string",
    "min": 1,
    "max": 100,
    "required": true
  },
  "description": {
    "type": "unknown",
    "required": true
  },
  "shortDescription": {
    "type": "unknown",
    "required": true
  },
  "location": {
    "type": "unknown",
    "required": true
  },
  "website": {
    "type": "unknown",
    "required": true
  },
  "logo": {
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

export type BreweryResponseValidationRules = typeof BreweryResponseValidation;
