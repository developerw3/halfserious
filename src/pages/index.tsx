'use client';
import React, { ReactElement } from 'react';
import TabsLayout from '@/layouts/tabs/tabs-layout';
import StarWarsLogo from '@/components/svg/starwars';

// The Page component represents the content of a single page.
const Page = () => {
	return (
		<TabsLayout>
			<div className='star-wars'>
				<StarWarsLogo height={'100%'} width={'100%'} />
			</div>
		</TabsLayout>
	);
};

// The getLayout function allows to define a custom layout for this page.
// It wraps the page content with the provided layout (in this case, just returning the page itself).
Page.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};

export default Page;
