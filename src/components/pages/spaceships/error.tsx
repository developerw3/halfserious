import React from 'react';
import FourZeroFour from '@/components/svg/404';

export default function Error({ error }: { error: string }) {
	return (
		<div className='text-center mx-10 d-block'>
			<FourZeroFour width='350' height='300'></FourZeroFour>
			<h1>{error}</h1>
		</div>
	);
}
