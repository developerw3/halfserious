import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import queryString from 'query-string';

// Creating an API slice with Redux Toolkit Query
export const swApi = createApi({
	// Define the base query configuration
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_SWAPI_URL,
		//paramsSerializer: (params) => queryString.stringify(params),
	}),
	// Keep the cached data for 600 seconds (10 minutes to avoid calling the apis again) except when we reload the page
	keepUnusedDataFor: 600,
	// No endpoints defined yet, must be injected later by category
	endpoints: () => ({}),
});
