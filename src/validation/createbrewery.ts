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

export type CreateBreweryValidationRules = typeof CreateBreweryValidation;
