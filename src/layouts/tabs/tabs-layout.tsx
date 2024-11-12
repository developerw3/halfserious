'use client';

import React, { useState, useEffect } from 'react';
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import { useRouter } from 'next/router';
import { tabsPathName } from '@/layouts/tabs/model';
import { tabsRoutes } from '@/routes/tabs-router';
import { routes } from '@/routes/routes';

// TabsLayout component that manages tab navigation and renders the corresponding content based on the active tab
export default function TabsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const [fillActive, setFillActive] = useState('');
	const router = useRouter();

	// useEffect hook that runs when the router is ready and sets the initial active tab based on the current pathname
	useEffect(() => {
		if (router.isReady) {
			setFillActive(tabsRoutes[router.pathname].id);
		}
	}, [router.isReady]);

	// Function to handle tab click events, updating the active tab and changing the route
	const handleFillClick = (value: string) => {
		if (value === fillActive) {
			return;
		}

		router.push({
			pathname: `${routes.spaceships.route.replace(routes.spaceships.params as string, value)}`,
		});

		setFillActive(value);
	};

	return (
		<div>
			<MDBTabs fill>
				{tabsPathName.map((tabPathName, key) => (
					<MDBTabsItem key={key}>
						<MDBTabsLink onClick={() => handleFillClick(tabsRoutes[tabPathName].id)} active={fillActive === tabsRoutes[tabPathName].id}>
							{tabsRoutes[tabPathName].name}
						</MDBTabsLink>
					</MDBTabsItem>
				))}
			</MDBTabs>
			{router.pathname === '/' && children}
			<MDBTabsContent>
				{tabsPathName.map((tabPathName, key) => (
					<MDBTabsPane key={key} open={fillActive === tabsRoutes[tabPathName].id}>
						{tabsPathName.includes(router.pathname) && fillActive === tabsRoutes[tabPathName].id && router.pathname === tabPathName && children}
					</MDBTabsPane>
				))}
			</MDBTabsContent>
		</div>
	);
}
