import React, { FunctionComponent, useState } from 'react';
import TabsLayout from '@/layouts/tabs/tabs-layout';
import { useRouter } from 'next/router';
import { updateTabRoutePage } from '@/routes/tabs-router';
import { useInitiateTabsUrl } from '@/hooks/tabs-url';
import { PaginationProps } from '@/components/pagination/model';

// HOC Function: Spaceships component that wraps the SpaceshipsList component and provides pagination functionality
export default function Spaceships(SpaceshipsList: FunctionComponent<PaginationProps>) {
	// Return a new component that renders the Spaceships list (Starships | Vehicles | Planets | Films | Pilots)
	return function Spaceships() {
		const router = useRouter();
		const [currentPage, setCurrentPage] = useState(Number(router.query.page));

		// Use the custom hook to initiate the tabs URL with the current page
		useInitiateTabsUrl(setCurrentPage);

		const changeVehiclesPage = (page: number) => {
			setCurrentPage(page);
			updateTabRoutePage(router, page);
		};

		return <TabsLayout>{currentPage > 0 && <SpaceshipsList currentPage={currentPage} changePage={changeVehiclesPage}></SpaceshipsList>}</TabsLayout>;
	};
}
