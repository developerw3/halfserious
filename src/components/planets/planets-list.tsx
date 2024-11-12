import React from 'react';
import { useGetAllPhotosQuery, useGetAllPlanetsQuery } from '@/api/';
import { paginationItems, PaginationProps } from '@/components/pagination/model';
import Pagination from '@/components/pagination/pagination';
import { Planet, PlanetsGetResponse } from '@/api/planets/planets-model';
import Spinner from '@/components/spinner/spinner';
import PlanetCard from '@/components/planets/planet-card';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import Spaceships from '@/components/pages/spaceships/spaceships';
import Error from '@/components/pages/spaceships/error';

function PlanetsList({ currentPage, changePage }: PaginationProps) {
	// Fetch photos data using the 'useGetAllPhotosQuery' hook
	const { planetsPhotos, isPlanetsPhotosError, isPlanetsPhotosFetching } = useGetAllPhotosQuery(
		{ query: PHOTOS_QUERY_SEARCH_KEYWORDS.PLANETS, page: currentPage, orientation: ORIENTATIONS.LANDSCAPE },
		{
			selectFromResult: (result) => ({
				planetsPhotos: result.data,
				isPlanetsPhotosError: result.isError,
				isPlanetsPhotosLoading: result.isLoading,
				isPlanetsPhotosFetching: result.isFetching,
			}),
		}
	);

	// Fetch planets data using the 'useGetAllPlanetsQuery' hook
	const { planets, isPlanetsError, isPlanetsFetching } = useGetAllPlanetsQuery(
		{ page: currentPage },
		{
			selectFromResult: (result) => ({
				planets: result.data,
				isPlanetsError: result.isError,
				isPlanetsLoading: result.isLoading,
				isPlanetsFetching: result.isFetching,
			}),
		}
	);

	// Prepare pagination data using a helper function (paginationItems)
	const items = paginationItems<Planet>(planets as PlanetsGetResponse, currentPage, changePage);

	// Function to render planets and pagination, only if data is ready and no errors
	const planetsListWithPagination = () => {
		return (
			!isPlanetsFetching &&
			!isPlanetsPhotosFetching &&
			!isPlanetsError &&
			!isPlanetsPhotosError &&
			planetsPhotos?.length &&
			planets?.results.length && (
				<>
					<div className='card-container'>
						{planets.results.map((result, key) => (
							<PlanetCard key={key} planet={result} photo={planetsPhotos[key]}></PlanetCard>
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
			{(isPlanetsFetching || isPlanetsPhotosFetching) && <Spinner></Spinner>}

			{planetsListWithPagination()}

			{isPlanetsError && <Error error={`We couldn't find the planets page ${currentPage}`}></Error>}
		</>
	);
}

export default Spaceships(PlanetsList);
