import { ApiGetRequestParameters, ApiGetResponse } from '@/api/model';

// Interface to define the structure of a Vehicle object
export interface Vehicle {
	name: string;
	model: string;
	vehicle_class: string;
	manufacturer: string;
	length: string;
	cost_in_credits: string;
	crew: string;
	passengers: string;
	max_atmosphering_speed: string;
	cargo_capacity: string;
	consumables: string;
	films: Array<string>;
	pilots: Array<string>;
	url: string;
	created: string;
	edited: string;
}

// Interface for a sample subset of Vehicle attributes to be used for preview
export interface VehicleAttributesSample {
	model: string;
	passengers: string;
	vehicle_class: string;
	consumables: string;
}

// Type that extracts the keys from the VehicleAttributesSample interface
export type KeysVehicleAttributesSample = keyof VehicleAttributesSample;

// Type for the response of the Vehicles API, based on the ApiGetResponse generic interface
export type VehiclesGetResponse = ApiGetResponse<Vehicle>;

// Type for the request parameters when fetching Vehicles, based on the ApiGetRequestParameters interface
export type VehiclesGetRequestParameters = ApiGetRequestParameters;

// An array of keys from VehicleAttributesSample to reference specific attributes of a Vehicle used for preview
export const vehicleAttributesSample: Array<KeysVehicleAttributesSample> = ['model', 'passengers', 'vehicle_class', 'consumables'];
