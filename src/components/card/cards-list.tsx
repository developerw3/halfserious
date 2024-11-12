// This file is not used yet. I created it for future improvement
import React, { Component } from 'react';
import { filmsApi, photosApi, pilotsApi, planetsApi, starshipsApi, vehiclesApi } from '@/api';
import { RootState } from '@/store';
import { connect, ConnectedProps } from 'react-redux';
import { ORIENTATIONS } from '@/api/photos/photos-model';

export type Props = { query: string; page: number };

const mapState = (state: RootState, ownProps: Props) => ({
	starships: starshipsApi.endpoints.getAllStarships.select({ page: ownProps.page })(state),
	vehicles: vehiclesApi.endpoints.getAllVehicles.select({ page: ownProps.page })(state),
	planets: planetsApi.endpoints.getAllPlanets.select({ page: ownProps.page })(state),
	films: filmsApi.endpoints.getAllFilms.select({ page: ownProps.page })(state),
	pilots: pilotsApi.endpoints.getAllPilots.select({ page: ownProps.page })(state),
	photo: photosApi.endpoints.getAllPhotos.select({
		query: ownProps.query,
		page: ownProps.page,
		orientation: ORIENTATIONS.LANDSCAPE,
	})(state),
});

const mapDispatch = {
	getStarships: starshipsApi.endpoints.getAllStarships.initiate,
	getVehicles: vehiclesApi.endpoints.getAllVehicles.initiate,
	getPlanets: planetsApi.endpoints.getAllPlanets.initiate,
	getFilms: filmsApi.endpoints.getAllFilms.initiate,
	getPilot: pilotsApi.endpoints.getAllPilots.initiate,
	getPhotos: photosApi.endpoints.getAllPhotos.initiate,
};

export const connector = connect(mapState, mapDispatch);

export type CardsListProps = Props & ConnectedProps<typeof connector>;

export default class CardsListComponent extends Component<CardsListProps> {
	constructor(props: CardsListProps) {
		super(props);
	}

	unsubscribePhoto: null | (() => void) = null;

	componentDidMount() {
		const { getPhotos, page, query } = this.props;

		const { unsubscribe } = getPhotos({ query, page, orientation: ORIENTATIONS.LANDSCAPE });

		this.unsubscribePhoto = unsubscribe;
	}

	componentWillUnmount() {
		this.unsubscribePhoto?.();
	}

	render() {
		return <></>;
	}
}
