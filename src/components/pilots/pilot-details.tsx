import React from 'react';
import { MDBBadge, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import PilotComponent, { connector } from '@/components/pilots/pilot-api';
import { ORIENTATIONS, PHOTOS_QUERY_SEARCH_KEYWORDS } from '@/api/photos/photos-model';
import Spinner from '@/components/spinner/spinner';
import { attributeToWords } from '@/components/card/card';
import { Pilot } from '@/api/pilots/pilots-model';
import styles from './pilots.module.scss';
import moment from 'moment/moment';
import { withRouter } from 'next/router';
import Error from '@/components/pages/spaceships/error';

// Class component to display detailed information about a specific pilot
class PilotDetailsComponent extends PilotComponent {
	unsubscribePhoto: null | (() => void) = null;

	// Component lifecycle method: Called when the component is mounted (initially rendered)
	componentDidMount() {
		const { getPilotPhoto } = this.props;

		// Fetch the pilot using a query based on the pilotID
		const { unsubscribe } = getPilotPhoto({
			query: `${PHOTOS_QUERY_SEARCH_KEYWORDS.PILOTS} ${this.props.pilotId}`,
			page: 1,
			orientation: ORIENTATIONS.PORTRAIT,
			perPage: 1,
		});

		super.componentDidMount();

		this.unsubscribePhoto = unsubscribe;
	}

	// Component lifecycle method: Called when the component is about to be unmounted (removed from DOM)
	componentWillUnmount() {
		super.componentWillUnmount();
		this.unsubscribePhoto?.();
	}

	render() {
		const { isError, isLoading, data } = this.props.pilot;
		const { isError: isPhotoError, isLoading: isPhotoLoading, data: photo } = this.props.photo;

		return (
			<>
				{!isError && !isLoading && data && (
					<MDBCard className={styles.pilotCard}>
						<MDBRow>
							<MDBCol md='4' className={styles.photo}>
								{(!isPhotoError && !isPhotoLoading && <MDBCardImage src={photo?.length ? photo[0] : ''} alt={data.name} fluid />) || (
									<Spinner></Spinner>
								)}
							</MDBCol>
							<MDBCol md='8'>
								<MDBBtn onClick={() => this.props.router?.back()} className='m-4'>
									Back to the previous page
								</MDBBtn>
								<MDBCardBody>
									<MDBCardTitle>{data.name}</MDBCardTitle>
									<MDBListGroup className='py-0' light>
										{Object.keys(data).map((key) => (
											<MDBListGroupItem key={key} className='d-flex justify-content-between align-items-center py-2'>
												{attributeToWords(key)}
												<MDBBadge className={styles.cardDetailsAttributeValue} key={key} pill light>
													{key === 'films' || key === 'species' || key === 'starships' || key === 'vehicles'
														? data[key as keyof Pilot].length
														: key === 'created' || key === 'edited'
															? moment(data[key]).format('LLLL')
															: data[key as keyof Pilot]}
												</MDBBadge>
											</MDBListGroupItem>
										))}
									</MDBListGroup>
								</MDBCardBody>
							</MDBCol>
						</MDBRow>
					</MDBCard>
				)}

				{isLoading && <Spinner></Spinner>}

				{isError && <Error error={`We couldn't find the pilot  #${this.props.pilotId}`}></Error>}
			</>
		);
	}
}

export default withRouter(connector(PilotDetailsComponent));
