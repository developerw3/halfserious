import React from 'react';
import { Starship, starshipAttributesSample } from '@/api/starships/starships-model';
import CardPreview from '@/components/card/card-preview';
import { Spaceship } from '@/components/card/model';

// Define the interface for the props that StarshipCard will receive
export interface StarshipCardProps {
	starship: Starship;
	photo: string;
}

// Render the CardPreview component with starship data and associated photo
export default function StarshipCard({ starship, photo }: StarshipCardProps) {
	return <CardPreview spaceship={starship as Spaceship} photo={photo} keysPreview={starshipAttributesSample}></CardPreview>;
}
