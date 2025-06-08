// Auto-generated from src/modules/breweries/dto/brewery.dto.ts
export type BreweryStatsType = {
    totalBreweries: number;
    breweriesWithProducts: number;
    avgProductsPerBrewery: number;
    topBreweries: {
        id: string;
        name: string;
        productCount: number;
        location?: (string | null) | undefined;
    }[];
};
