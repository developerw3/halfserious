import React from 'react';
import { useGetAllPhotosQuery, useGetAllPilotsQuery } from '@/api/';
import { paginationItems, PaginationProps } from '@/components/pagination/model';
import Pagination from '@/components/pagination/pagination';
import { Pilot, PilotsGetResponse } from '@/api/pilots/pilots-model';
import Spinner from '@/components/spinner/spinner';
import PilotCard from '@/components/pilots/pilot-card';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import Spaceships from '@/components/pages/spaceships/spaceships';
import Error from '@/components/pages/spaceships/error';

function PilotsList({ currentPage, changePage }: PaginationProps) {
	// Fetch photos data using the 'useGetAllPhotosQuery' hook
	const { pilotsPhotos, isPilotsPhotosError, isPilotsPhotosFetching } = useGetAllPhotosQuery(
		{ query: PHOTOS_QUERY_SEARCH_KEYWORDS.PILOTS, page: currentPage, orientation: ORIENTATIONS.LANDSCAPE },
		{
			selectFromResult: (result) => ({
				pilotsPhotos: result.data,
				isPilotsPhotosError: result.isError,
				isPilotsPhotosLoading: result.isLoading,
				isPilotsPhotosFetching: result.isFetching,
			}),
		}
	);

	// Fetch pilots data using the 'useGetAllPilotsQuery' hook
	const { pilots, isPilotsError, isPilotsFetching } = useGetAllPilotsQuery(
		{ page: currentPage },
		{
			selectFromResult: (result) => ({
				pilots: result.data,
				isPilotsError: result.isError,
				isPilotsLoading: result.isLoading,
				isPilotsFetching: result.isFetching,
			}),
		}
	);

	// Prepare pagination data using a helper function (paginationItems)
	const items = paginationItems<Pilot>(pilots as PilotsGetResponse, currentPage, changePage);

	// Function to render pilots and pagination, only if data is ready and no errors
	const pilotsListWithPagination = () => {
		return (
			!isPilotsFetching &&
			!isPilotsPhotosFetching &&
			!isPilotsError &&
			!isPilotsPhotosError &&
			pilotsPhotos?.length &&
			pilots?.results.length && (
				<>
					<div className='card-container'>
						{pilots.results.map((result, key) => (
							<PilotCard key={key} pilot={result} photo={pilotsPhotos[key]}></PilotCard>
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
			{(isPilotsFetching || isPilotsPhotosFetching) && <Spinner></Spinner>}

			{pilotsListWithPagination()}

			{isPilotsError && <Error error={`We couldn't find the pilots page ${currentPage}`}></Error>}
		</>
	);
}

export default Spaceships(PilotsList);
