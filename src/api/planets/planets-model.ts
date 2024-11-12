import { ApiGetRequestParameters, ApiGetResponse } from '@/api/model';

// Interface to define the structure of a Planet object
export interface Planet {
	name: string;
	diameter: string;
	rotation_period: string;
	orbital_period: string;
	gravity: string;
	population: string;
	climate: string;
	terrain: string;
	surface_water: string;
	residents: Array<string>;
	films: Array<string>;
	url: string;
	created: string;
	edited: string;
}

// Interface for a sample subset of Planet attributes to be used for preview
export interface PlanetAttributesSample {
	diameter: string;
	orbital_period: string;
	surface_water: string;
	rotation_period: string;
	climate: string;
}

// Type that extracts the keys from the PlanetAttributesSample interface
export type KeysPlanetAttributesSample = keyof PlanetAttributesSample;

// Type for the response of the Planets API, based on the ApiGetResponse generic interface
export type PlanetsGetResponse = ApiGetResponse<Planet>;

// Type for the request parameters when fetching Planets, based on the ApiGetRequestParameters interface
export type PlanetsGetRequestParameters = ApiGetRequestParameters;

// An array of keys from PlanetAttributesSample to reference specific attributes of a Planet used for preview
export const planetAttributesSample: Array<KeysPlanetAttributesSample> = [
	'diameter',
	'orbital_period',
	'surface_water',
	'rotation_period',
	'climate',
];
