import React from 'react';
import { Planet, planetAttributesSample } from '@/api/planets/planets-model';
import CardPreview from '@/components/card/card-preview';
import { Spaceship } from '@/components/card/model';

// Define the interface for the props that PlanetCard will receive
interface PlanetCardProps {
	planet: Planet;
	photo: string;
}

// Render the CardPreview component with planet data and associated photo
export default function PlanetCard({ planet, photo }: PlanetCardProps) {
	return <CardPreview spaceship={planet as Spaceship} photo={photo} keysPreview={planetAttributesSample}></CardPreview>;
}
