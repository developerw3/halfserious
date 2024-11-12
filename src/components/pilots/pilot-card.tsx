import React from 'react';
import { Pilot, pilotAttributesSample } from '@/api/pilots/pilots-model';
import CardPreview from '@/components/card/card-preview';
import { Spaceship } from '@/components/card/model';

// Define the interface for the props that PilotCard will receive
interface PilotCardProps {
	pilot: Pilot;
	photo: string;
}

// Render the CardPreview component with pilot data and associated photo
export default function PilotCard({ pilot, photo }: PilotCardProps) {
	return <CardPreview spaceship={pilot as Spaceship} photo={photo} keysPreview={pilotAttributesSample}></CardPreview>;
}
