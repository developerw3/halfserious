'use client';
import React from 'react';
import FourZeroFour from '@/components/svg/404';

// The Page404Page component renders a 404 error page when a page is not found
export default function Page404Page() {
	return (
		<div className='page-not-found'>
			<FourZeroFour width='400' height='400'></FourZeroFour>
			<h1>Page Not Found!</h1>
		</div>
	);
}
