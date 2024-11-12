'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import PilotDetails from '@/components/pilots/pilot-details';

// The PilotByIdPage component renders a page that displays details of a pilot based on the pilotId from the URL.
export default function PilotByIdPage() {
	const params = useParams<{ pilotId: string }>();

	return params && Number(params.pilotId) > 0 && <PilotDetails pilotId={params.pilotId}></PilotDetails>;
}
