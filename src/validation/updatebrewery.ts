// Auto-generated validation rules from UpdateBrewerySchema
export const UpdateBreweryValidation = {
  "name": {
    "required": true,
    "type": "string",
    "min": 1,
    "max": 100
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

export type UpdateBreweryValidationRules = typeof UpdateBreweryValidation;
