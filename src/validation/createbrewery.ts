// Auto-generated validation rules from CreateBrewerySchema
export const CreateBreweryValidation = {
  "name": {
    "type": "string",
    "min": 1,
    "max": 100,
    "required": true
  },
  "description": {
    "required": true,
    "type": "unknown"
  },
  "shortDescription": {
    "required": true,
    "type": "unknown"
  },
  "location": {
    "required": true,
    "type": "unknown"
  },
  "website": {
    "required": true,
    "type": "unknown"
  },
  "logo": {
    "required": true,
    "type": "unknown"
  }
};

export type CreateBreweryValidationRules = typeof CreateBreweryValidation;
