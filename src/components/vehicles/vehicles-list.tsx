import React from 'react';
import { useGetAllPhotosQuery, useGetAllVehiclesQuery } from '@/api/';
import { paginationItems, PaginationProps } from '@/components/pagination/model';
import Pagination from '@/components/pagination/pagination';
import { Vehicle, VehiclesGetResponse } from '@/api/vehicles/vehicles-model';
import Spinner from '@/components/spinner/spinner';
import VehicleCard from '@/components/vehicles/vehicle-card';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import Spaceships from '@/components/pages/spaceships/spaceships';
import Error from '@/components/pages/spaceships/error';

function VehiclesList({ currentPage, changePage }: PaginationProps) {
	// Fetch photos data using the 'useGetAllPhotosQuery' hook
	const { vehiclesPhotos, isVehiclesPhotosError, isVehiclesPhotosFetching } = useGetAllPhotosQuery(
		{ query: PHOTOS_QUERY_SEARCH_KEYWORDS.VEHICLES, page: currentPage, orientation: ORIENTATIONS.LANDSCAPE },
		{
			selectFromResult: (result) => ({
				vehiclesPhotos: result.data,
				isVehiclesPhotosError: result.isError,
				isVehiclesPhotosLoading: result.isLoading,
				isVehiclesPhotosFetching: result.isFetching,
			}),
		}
	);

	// Fetch vehicle data using the 'useGetAllVehiclesQuery' hook
	const { vehicles, isVehiclesError, isVehiclesFetching } = useGetAllVehiclesQuery(
		{ page: currentPage },
		{
			selectFromResult: (result) => ({
				vehicles: result.data,
				isVehiclesError: result.isError,
				isVehiclesLoading: result.isLoading,
				isVehiclesFetching: result.isFetching,
			}),
		}
	);

	// Prepare pagination data using a helper function (paginationItems)
	const items = paginationItems<Vehicle>(vehicles as VehiclesGetResponse, currentPage, changePage);

	// Function to render vehicles and pagination, only if data is ready and no errors
	const vehiclesListWithPagination = () => {
		return (
			!isVehiclesFetching &&
			!isVehiclesPhotosFetching &&
			!isVehiclesError &&
			!isVehiclesPhotosError &&
			vehiclesPhotos?.length &&
			vehicles?.results.length && (
				<>
					<div className='card-container'>
						{vehicles.results.map((result, key) => (
							<VehicleCard key={key} vehicle={result} photo={vehiclesPhotos[key]}></VehicleCard>
						))}
					</div>
					<div className='pagination'>
						<Pagination items={items}></Pagination>
					</div>
				</>
			)
		);
	};

	return (
		<>
			{(isVehiclesFetching || isVehiclesPhotosFetching) && <Spinner></Spinner>}

			{vehiclesListWithPagination()}

			{isVehiclesError && <Error error={`We couldn't find the vehicles page ${currentPage}`}></Error>}
		</>
	);
}

export default Spaceships(VehiclesList);
