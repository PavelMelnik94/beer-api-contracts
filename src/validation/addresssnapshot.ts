// Auto-generated validation rules from AddressSnapshotSchema
export const AddressSnapshotValidation = {
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
    "type": "string",
    "required": true
  },
  "isPrimaryAddress": {
    "type": "boolean",
    "required": true
  }
};

export type AddressSnapshotValidationRules = typeof AddressSnapshotValidation;
