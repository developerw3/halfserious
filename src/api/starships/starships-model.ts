import { ApiGetRequestParameters, ApiGetResponse } from '@/api/model';

// Interface to define the structure of a Starship object
export interface Starship {
	name: string;
	model: string;
	starship_class: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	crew: string;
	passengers: string;
	max_atmosphering_speed: string;
	hyperdrive_rating: string;
	MGLT: string;
	cargo_capacity: string;
	consumables: string;
	films: Array<string>;
	pilots: Array<string>;
	url: string;
	created: string;
	edited: string;
}

// Interface for a sample subset of Starship attributes to be used for preview
export interface StarshipAttributesSample {
	crew: string;
	cost_in_credits: string;
	cargo_capacity: string;
}

// Type that extracts the keys from the StarshipAttributesSample interface
export type KeysStarshipAttributesSample = keyof StarshipAttributesSample;

// Type for the response of the Starship API, based on the ApiGetResponse generic interface
export type StarshipsGetResponse = ApiGetResponse<Starship>;

// Type for the request parameters when fetching Starships, based on the ApiGetRequestParameters interface
export type StarshipsGetRequestParameters = ApiGetRequestParameters;

// An array of keys from StarshipAttributesSample to reference specific attributes of a Starships used for preview
export const starshipAttributesSample: Array<KeysStarshipAttributesSample> = ['crew', 'cost_in_credits', 'cargo_capacity'];
