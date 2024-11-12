import { Film, filmAttributesSample } from '@/api/films/films-model';
import CardPreview from '@/components/card/card-preview';
import React from 'react';
import { Spaceship } from '@/components/card/model';

// Define the interface for the props that FilmCard will receive
interface FilmCardProps {
	film: Film;
	photo: string;
}

// Render the CardPreview component with film data and associated photo
export default function FilmCard({ film, photo }: FilmCardProps) {
	return <CardPreview spaceship={film as Spaceship} photo={photo} keysPreview={filmAttributesSample}></CardPreview>;
}
