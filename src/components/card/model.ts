import { Starship } from '@/api/starships/starships-model';
import { Vehicle } from '@/api/vehicles/vehicles-model';
import { Planet } from '@/api/planets/planets-model';
import { Film } from '@/api/films/films-model';
import { Pilot } from '@/api/pilots/pilots-model';

export type KeyOfStarship = keyof Starship | keyof Vehicle | keyof Planet | keyof Film | keyof Pilot;

export type Spaceship = Starship & Vehicle & Planet & Film & Pilot;

export interface CardDetailsProps {
	closeModal: (value: boolean) => void;
	spaceship: Spaceship;
	photo: string;
}

export interface CardProps {
	spaceship: Spaceship;
	photo: string;
	keysPreview: Array<keyof Starship | keyof Vehicle | keyof Planet | keyof Film | keyof Pilot>;
}
