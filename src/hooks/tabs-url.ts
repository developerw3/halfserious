import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { updateTabRoutePage } from '@/routes/tabs-router';

// Custom hook to initiate the tabs URL and execute a callback with the page number
export function useInitiateTabsUrl(callBack: (page: number) => void) {
	const router = useRouter();

	useEffect(() => {
		// Runs when the router is ready (ensures the query parameters are available)
		if (router.isReady) {
			let page = Number(router.query.page);
			// If the page parameter is invalid or <= 0, defaults to page 1
			page = Number.isNaN(page) || page <= 0 ? 1 : page;
			// Updates the route with the page number, related to tabs with pagination
			updateTabRoutePage(router, page);
			// Executes the callback with the determined page number
			callBack(page);
		}
	}, [router.isReady]); // Dependency array ensures this effect runs when isReady changed value
}
