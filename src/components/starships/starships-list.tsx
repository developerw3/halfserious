import React from 'react';
import { useGetAllPhotosQuery, useGetAllStarshipsQuery } from '@/api/';
import { paginationItems, PaginationProps } from '@/components/pagination/model';
import Pagination from '@/components/pagination/pagination';
import { Starship, StarshipsGetResponse } from '@/api/starships/starships-model';
import Spinner from '@/components/spinner/spinner';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import StarshipCard from '@/components/starships/starship-card';
import Spaceships from '@/components/pages/spaceships/spaceships';
import Error from '@/components/pages/spaceships/error';

function StarshipsList({ currentPage, changePage }: PaginationProps) {
	// Fetch photos data using the 'useGetAllPhotosQuery' hook
	const { starshipsPhotos, isStarshipsPhotosError, isStarshipsPhotosFetching } = useGetAllPhotosQuery(
		{ query: PHOTOS_QUERY_SEARCH_KEYWORDS.STARSHIPS, page: currentPage, orientation: ORIENTATIONS.LANDSCAPE },
		{
			selectFromResult: (result) => ({
				starshipsPhotos: result.data,
				isStarshipsPhotosError: result.isError,
				isStarshipsPhotosLoading: result.isLoading,
				isStarshipsPhotosFetching: result.isFetching,
			}),
		}
	);

	// Fetch starships data using the 'useGetAllStarshipsQuery' hook
	const { starships, isStarshipsError, isStarshipsFetching } = useGetAllStarshipsQuery(
		{ page: currentPage },
		{
			selectFromResult: (result) => ({
				starships: result.data,
				isStarshipsError: result.isError,
				isStarshipsLoading: result.isLoading,
				isStarshipsFetching: result.isFetching,
			}),
		}
	);

	// Prepare pagination data using a helper function (paginationItems)
	const items = paginationItems<Starship>(starships as StarshipsGetResponse, currentPage, changePage);

	// Function to render starships and pagination, only if data is ready and no errors
	const starshipsListWithPagination = () => {
		return (
			!isStarshipsFetching &&
			!isStarshipsPhotosFetching &&
			!isStarshipsError &&
			!isStarshipsPhotosError &&
			starshipsPhotos?.length &&
			starships?.results.length && (
				<>
					<div className='card-container'>
						{starships.results.map((result, key) => (
							<StarshipCard key={key} starship={result} photo={starshipsPhotos[key]}></StarshipCard>
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
			{(isStarshipsFetching || isStarshipsPhotosFetching) && <Spinner></Spinner>}

			{starshipsListWithPagination()}

			{isStarshipsError && <Error error={`We couldn't find the starships page ${currentPage}`}></Error>}
		</>
	);
}

export default Spaceships(StarshipsList);
