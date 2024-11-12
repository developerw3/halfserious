// It maps route names (string keys) to an object with a 'route' string and 'params' which can be a string or null
export interface Routes {
	[key: string]: {
		route: string;
		params: string | null;
	};
}

// Defining the routes object with various route names and their respective URL paths and parameters
export const routes: Routes = {
	home: {
		route: '/',
		params: null,
	},
	about: {
		route: '/about',
		params: null,
	},
	documentation: {
		route: '/documentation',
		params: null,
	},
	spaceships: {
		route: '/spaceships/[tabId]',
		params: '[tabId]',
	},
	starships: {
		route: '/spaceships/starships',
		params: null,
	},
	vehicles: {
		route: '/spaceships/vehicles',
		params: null,
	},
	planets: {
		route: '/spaceships/planets',
		params: null,
	},
	films: {
		route: '/spaceships/films',
		params: null,
	},
	pilots: {
		route: '/spaceships/pilots',
		params: null,
	},
	pilot: {
		route: '/spaceships/pilots/[pilotId]',
		params: '[pilotId]',
	},
};
