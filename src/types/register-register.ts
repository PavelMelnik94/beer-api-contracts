// Auto-generated from src/modules/auth/dto/register.dto.ts
export type RegisterType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  addresses: {
    city: string;
    country: string;
    streetName: string;
    zip: string;
    type: 'billing' | 'shipping';
    isPrimaryAddress?: boolean;
  }[];
};
