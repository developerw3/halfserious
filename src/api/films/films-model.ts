import { ApiGetRequestParameters, ApiGetResponse } from '@/api/model';

// Interface to define the structure of a Film object
export interface Film {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	species: Array<string>;
	starships: Array<string>;
	vehicles: Array<string>;
	characters: Array<string>;
	planets: Array<string>;
	url: string;
	created: string;
	edited: string;
}

// Interface for a sample subset of Film attributes to be used for preview
export interface FilmAttributesSample {
	opening_crawl: string;
	producer: string;
	director: string;
	release_date: string;
	episode_id: string;
}

// Type that extracts the keys from the FilmAttributesSample interface
export type KeysFilmAttributesSample = keyof FilmAttributesSample;

// Type for the response of the Films API, based on the ApiGetResponse generic interface
export type FilmsGetResponse = ApiGetResponse<Film>;

// Type for the request parameters when fetching Films, based on the ApiGetRequestParameters interface
export type FilmsGetRequestParameters = ApiGetRequestParameters;

// An array of keys from FilmAttributesSample to reference specific attributes of a Film used for preview
export const filmAttributesSample: Array<KeysFilmAttributesSample> = ['opening_crawl', 'producer', 'director', 'release_date', 'episode_id'];
