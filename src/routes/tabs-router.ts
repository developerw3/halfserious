import { NextRouter } from 'next/router';

// Function to update the page query parameter in the URL without changing the pathname
// This helps in keeping track of the current page for pagination or tab navigation
export function updateTabRoutePage(router: NextRouter, page: number) {
	router.push({
		pathname: router.pathname,
		query: { ...router.query, page },
	});
}

// Interface defining the structure of a tab's route information
export interface TabsRoutes {
	id: string;
	name: string;
}

// Interface to map path names to tab route information (e.g., path name to tab details)
export interface TabsRoutesPathName {
	[pathName: string]: TabsRoutes;
}

// Defining the routes for different tabs in the application, mapping pathnames to tab route details
export const tabsRoutes: TabsRoutesPathName = {
	'/': {
		id: '/',
		name: 'Home',
	},
	'/spaceships/starships': {
		id: 'starships',
		name: 'Starships',
	},
	'/spaceships/vehicles': {
		id: 'vehicles',
		name: 'Vehicles',
	},
	'/spaceships/planets': {
		id: 'planets',
		name: 'Planets',
	},
	'/spaceships/films': {
		id: 'films',
		name: 'Films',
	},
	'/spaceships/pilots': {
		id: 'pilots',
		name: 'Pilots',
	},
};
