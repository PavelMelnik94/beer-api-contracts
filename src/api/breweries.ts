// Auto-generated API endpoint types for breweries
import type { BreweryType } from '../types/brewery-brewery';
import type { CreateBreweryType } from '../types/brewery-createbrewery';
import type { UpdateBreweryType } from '../types/brewery-updatebrewery';
import type { BreweryResponseType } from '../types/brewery-breweryresponse';
import type { BreweryStatsType } from '../types/brewery-brewerystats';

export interface BreweriesApiEndpoints {
  getById: { params: { id: string }; response: BreweryType };
  create: { body: CreateBreweryType; response: BreweryResponseType };
  update: { body: UpdateBreweryType; params: { id: string }; response: BreweryResponseType };
  getBreweryStatsById: { params: { id: string }; response: BreweryStatsType };
  delete: { params: { id: string }; response: void };
}

// Generic API client type for breweries
export type BreweriesApiClient = {
  [K in keyof BreweriesApiEndpoints]: (
    data: BreweriesApiEndpoints[K] extends { body: infer B; params: infer P }
      ? { body: B; params: P }
      : BreweriesApiEndpoints[K] extends { body: infer B }
      ? { body: B }
      : BreweriesApiEndpoints[K] extends { query: infer Q }
      ? { query: Q }
      : BreweriesApiEndpoints[K] extends { params: infer P }
      ? { params: P }
      : never
  ) => Promise<BreweriesApiEndpoints[K] extends { response: infer R } ? R : void>;
};
