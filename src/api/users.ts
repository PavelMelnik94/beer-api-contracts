// Auto-generated API endpoint types for users
import type { UpdateProfileType } from '../types/update-profile-updateprofile';
import type { CreateUserDtoType } from '../types/create-user-createuser';
import type { UserAvatarType } from '../types/avatar-useravatar';

export interface UsersApiEndpoints {
  update: {
    body: UpdateProfileType;
    params: { id: string };
    response: UpdateProfileType;
  };
  create: { body: CreateUserDtoType; response: CreateUserDtoType };
  getById: { params: { id: string }; response: UserAvatarType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for users
export type UsersApiClient = {
  [K in keyof UsersApiEndpoints]: (
    data: UsersApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : UsersApiEndpoints[K] extends { body: infer B }
        ? { body: B }
        : UsersApiEndpoints[K] extends { query: infer Q }
          ? { query: Q }
          : UsersApiEndpoints[K] extends { params: infer P }
            ? { params: P }
            : never,
  ) => Promise<UsersApiEndpoints[K] extends { response: infer R } ? R : void>;
};
