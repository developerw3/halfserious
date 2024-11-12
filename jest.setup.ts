import '@testing-library/jest-dom';

jest.mock('@reduxjs/toolkit/query/react', () => ({
	...jest.requireActual('@reduxjs/toolkit/query/react'),
	fetchBaseQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
	useRouter() {
		return {
			query: { page: '199' },
			route: '/',
			pathname: '',
			asPath: '',
			push: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
			},
			beforePopState: jest.fn(() => null),
			prefetch: jest.fn(() => null),
		};
	},
}));
