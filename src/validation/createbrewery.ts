// Auto-generated validation rules from CreateBrewerySchema
export const CreateBreweryValidation = {
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
  }
};

export type CreateBreweryValidationRules = typeof CreateBreweryValidation;
