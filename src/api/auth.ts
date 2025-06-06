// Auto-generated API endpoint types for auth
import type { RegisterType } from '../types/register-register';
import type { LoginType } from '../types/login-login';

export interface AuthApiEndpoints {
  getById: { params: { id: string }; response: RegisterType };
  getLoginById: { params: { id: string }; response: LoginType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for auth
export type AuthApiClient = {
  [K in keyof AuthApiEndpoints]: (
    data: AuthApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : AuthApiEndpoints[K] extends { body: infer B }
        ? { body: B }
        : AuthApiEndpoints[K] extends { query: infer Q }
          ? { query: Q }
          : AuthApiEndpoints[K] extends { params: infer P }
            ? { params: P }
            : never,
  ) => Promise<AuthApiEndpoints[K] extends { response: infer R } ? R : void>;
};
