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
  }
};

export type UpdateBreweryValidationRules = typeof UpdateBreweryValidation;
