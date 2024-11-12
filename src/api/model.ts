// Enum to define the different API endpoints for the Star Wars API
export const enum API_ENDPOINTS {
	FILMS = '/films',
	PILOTS = '/people',
	PLANETS = '/planets',
	STARSHIPS = '/starships',
	VEHICLES = '/vehicles',
}

// Interface representing the structure of a response from the API
export interface ApiGetResponse<Resource> {
	count: number;
	next: string;
	previous: string;
	results: Array<Resource>;
}

// Interface for defining pagination parameters for the API request
export interface ApiGetRequestParameters {
	page: number;
}
