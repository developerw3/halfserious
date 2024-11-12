import { ApiGetRequestParameters, ApiGetResponse } from '@/api/model';

// Interface to define the structure of a Pilot object
export interface Pilot {
	name: string;
	birth_year: string;
	eye_color: string;
	gender: 'Male' | 'Female' | 'unknown' | 'n/a';
	hair_color: string;
	height: string;
	mass: string;
	skin_color: string;
	homeworld: string;
	films: Array<string>;
	species: Array<string>;
	starships: Array<string>;
	vehicles: Array<string>;
	url: string;
	created: string;
	edited: string;
}

// Interface for a sample subset of Pilot attributes to be used for preview
export interface PilotAttributesSample {
	gender: string;
	mass: string;
	height: string;
}

// Type that extracts the keys from the PilotAttributesSample interface
export type KeysPilotAttributesSample = keyof PilotAttributesSample;

// Type for the response of the Pilots API, based on the ApiGetResponse generic interface
export type PilotsGetResponse = ApiGetResponse<Pilot>;

// Type for the request parameters when fetching Pilots, based on the ApiGetRequestParameters interface
export type PilotsGetRequestParameters = ApiGetRequestParameters;

// An array of keys from PilotAttributesSample to reference specific attributes of a Pilot used for preview
export const pilotAttributesSample: Array<KeysPilotAttributesSample> = ['gender', 'mass', 'height'];
