import { ApiResponse } from 'unsplash-js/src/helpers/response';
import { Orientation } from 'unsplash-js';
import { ApiGetRequestParameters } from '@/api/model';

// Interface to define the structure of a Photo object
export interface Photo {
	id: number;
	width: number;
	height: number;
	urls: { full: string; large: string; regular: string; raw: string; small: string; small_s3: string; thumb: string };
	color: string | null;
	user: {
		username: string;
		name: string;
	};
	alt_description: string;
	asset_type: string;
}

// Type for the request parameters when fetching Photos, based on the ApiGetRequestParameters interface
export interface PhotosGetRequestParameters extends ApiGetRequestParameters {
	query: string;
	orientation: Orientation;
	perPage?: number;
}

export type Photos = Array<Photo>;

export type Response = {
	total: number;
	total_pages: number;
	results: Photos;
};

// Type for the response of the Photos API, based on the ApiGetResponse generic interface
export type PhotosGetResponse = ApiResponse<Response>;

// Enum defining search keywords to be used for Unsplash queries
export const enum PHOTOS_QUERY_SEARCH_KEYWORDS {
	FILMS = 'starwars movies',
	PILOTS = 'spaceships pilots',
	PLANETS = 'solar system planets',
	STARSHIPS = 'spaceships or starships',
	VEHICLES = 'starwars vehicles',
}

// Enum defining different image orientations for fetching photos
export const enum ORIENTATIONS {
	LANDSCAPE = 'landscape',
	PORTRAIT = 'portrait',
	SQUARISH = 'squarish',
}
