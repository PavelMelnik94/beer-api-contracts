// Auto-generated API endpoint types for users
import type { UserResponseType } from '../types/user-response-userresponse';
import type { UpdateProfileType } from '../types/update-profile-updateprofile';
import type { ToggleFavoriteType } from '../types/favorite-togglefavorite';
import type { FavoriteType } from '../types/favorite-favorite';
import type { CreateUserDtoType } from '../types/create-user-createuser';
import type { UserAvatarType } from '../types/avatar-useravatar';
import type { AddressResponseType } from '../types/address-response-addressresponse';

export interface UsersApiEndpoints {
  update: { body: UpdateProfileType; params: { id: string }; response: UserResponseType };
  getById: { params: { id: string }; response: ToggleFavoriteType };
  getFavoriteById: { params: { id: string }; response: FavoriteType };
  create: { body: CreateUserDtoType; response: UserResponseType };
  getUserAvatarById: { params: { id: string }; response: UserAvatarType };
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
      : never
  ) => Promise<UsersApiEndpoints[K] extends { response: infer R } ? R : void>;
};
