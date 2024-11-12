import React from 'react';
import { Vehicle, vehicleAttributesSample } from '@/api/vehicles/vehicles-model';
import CardPreview from '@/components/card/card-preview';
import { Spaceship } from '@/components/card/model';

// Define the interface for the props that VehicleCard will receive
interface VehicleCardProps {
	vehicle: Vehicle;
	photo: string;
}

// Render the CardPreview component with vehicle data and associated photo
export default function VehicleCard({ vehicle, photo }: VehicleCardProps) {
	return <CardPreview spaceship={vehicle as Spaceship} photo={photo} keysPreview={vehicleAttributesSample}></CardPreview>;
}
