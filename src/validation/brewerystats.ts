// Auto-generated validation rules from BreweryStatsSchema
export const BreweryStatsValidation = {
  "totalBreweries": {
    "type": "number",
    "required": true
  },
  "breweriesWithProducts": {
    "type": "number",
    "required": true
  },
  "avgProductsPerBrewery": {
    "type": "number",
    "required": true
  },
  "topBreweries": {
    "type": "array",
    "required": true
  }
};

export type BreweryStatsValidationRules = typeof BreweryStatsValidation;
