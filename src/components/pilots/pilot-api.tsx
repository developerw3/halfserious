import React, { Component } from 'react';
import { photosApi, pilotsApi } from '@/api';
import { RootState } from '@/store';
import { connect, ConnectedProps } from 'react-redux';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import { NextRouter } from 'next/router';

export type Props = { pilotId: string; router: NextRouter };

// mapState: Maps state from the Redux store to props for this pilot component
const mapState = (state: RootState, ownProps: Props) => ({
	pilot: pilotsApi.endpoints.getPilotById.select(ownProps.pilotId)(state),
	photo: photosApi.endpoints.getAllPhotos.select({
		query: `${PHOTOS_QUERY_SEARCH_KEYWORDS.PILOTS} ${ownProps.pilotId}`,
		page: 1,
		orientation: ORIENTATIONS.PORTRAIT,
		perPage: 1,
	})(state),
});

// mapDispatch: Maps Redux actions to props, allowing this component to dispatch actions
const mapDispatch = {
	getPilot: pilotsApi.endpoints.getPilotById.initiate,
	getPilotPhoto: photosApi.endpoints.getAllPhotos.initiate,
};

export const connector = connect(mapState, mapDispatch);

export type PilotProps = Props & ConnectedProps<typeof connector>;

export default class PilotComponent extends Component<PilotProps> {
	constructor(props: PilotProps) {
		super(props);
	}

	unsubscribePilot: null | (() => void) = null;

	// componentDidMount lifecycle method: This is where we initiate data fetching when the component is mounted
	componentDidMount() {
		const { getPilot, pilotId } = this.props;

		/* Start a subscription for the component to the cached data */
		const { unsubscribe } = getPilot(pilotId);

		/* Store the unsubscribe promise for later use when the component will unmount */
		this.unsubscribePilot = unsubscribe;
	}

	// componentWillUnmount lifecycle method: Called before the component is removed from the DOM
	componentWillUnmount() {
		/* Unsubscribe the component from the cached data when unmounting */
		this.unsubscribePilot?.();
	}

	render() {
		return <></>;
	}
}
