'use client';
import React, { useEffect } from 'react';
import { routes } from '@/routes/routes';
import { useRouter } from 'next/router';

export default function StarshipsPage() {
	const router = useRouter();

	useEffect(() => {
		if (router.isReady) {
			router.push({
				pathname: routes.starships.route,
				query: { ...router.query, page: 1 },
			});
		}
	}, [router.isReady]);

	return <></>;
}
