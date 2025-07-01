// Auto-generated validation rules from UserSnapshotSchema
export const UserSnapshotValidation = {
  "id": {
    "type": "string",
    "format": "uuid",
    "required": true
  },
  "firstName": {
    "type": "string",
    "required": true
  },
  "lastName": {
    "type": "string",
    "required": true
  },
  "email": {
    "type": "string",
    "required": true
  },
  "avatar": {
    "type": "unknown",
    "required": true
  }
};

export type UserSnapshotValidationRules = typeof UserSnapshotValidation;
