import React from 'react';
import { useGetAllPhotosQuery, useGetAllFilmsQuery } from '@/api/';
import { paginationItems, PaginationProps } from '@/components/pagination/model';
import Pagination from '@/components/pagination/pagination';
import { Film, FilmsGetResponse } from '@/api/films/films-model';
import Spinner from '@/components/spinner/spinner';
import FilmCard from '@/components/films/film-card';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import Spaceships from '@/components/pages/spaceships/spaceships';
import Error from '@/components/pages/spaceships/error';

function FilmsList({ currentPage, changePage }: PaginationProps) {
	// Fetch photos data using the 'useGetAllPhotosQuery' hook
	const { filmsPhotos, isFilmsPhotosError, isFilmsPhotosFetching } = useGetAllPhotosQuery(
		{ query: PHOTOS_QUERY_SEARCH_KEYWORDS.FILMS, page: currentPage, orientation: ORIENTATIONS.LANDSCAPE },
		{
			selectFromResult: (result) => ({
				filmsPhotos: result.data,
				isFilmsPhotosError: result.isError,
				isFilmsPhotosLoading: result.isLoading,
				isFilmsPhotosFetching: result.isFetching,
			}),
		}
	);

	// Fetch films data using the 'useGetAllFilmsQuery' hook
	const { films, isFilmsError, isFilmsFetching } = useGetAllFilmsQuery(
		{ page: currentPage },
		{
			selectFromResult: (result) => ({
				films: result.data,
				isFilmsError: result.isError,
				isFilmsLoading: result.isLoading,
				isFilmsFetching: result.isFetching,
			}),
		}
	);

	// Prepare pagination data using a helper function (paginationItems)
	const items = paginationItems<Film>(films as FilmsGetResponse, currentPage, changePage);

	// Function to render films and pagination, only if data is ready and no errors
	const filmsListWithPagination = () => {
		return (
			!isFilmsFetching &&
			!isFilmsPhotosFetching &&
			!isFilmsError &&
			!isFilmsPhotosError &&
			filmsPhotos?.length &&
			films?.results.length && (
				<>
					<div className='card-container'>
						{films.results.map((result, key) => (
							<FilmCard key={key} film={result} photo={filmsPhotos[key]}></FilmCard>
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
			{(isFilmsFetching || isFilmsPhotosFetching) && <Spinner></Spinner>}

			{filmsListWithPagination()}

			{isFilmsError && <Error error={`We couldn't find the films page ${currentPage}`}></Error>}
		</>
	);
}

export default Spaceships(FilmsList);
