import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBListGroup, MDBListGroupItem, MDBBadge, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import moment from 'moment';
import PilotBadge from '@/components/pilots/pilot-badge';
import styles from './card.module.scss';
import { attributeToWords } from '@/components/card/card';
import { CardDetailsProps, KeyOfStarship, Spaceship } from '@/components/card/model';
import { useRouter } from 'next/router';

export default function CardDetails({ spaceship, photo, closeModal }: CardDetailsProps) {
	const router = useRouter();

	// Serialize and return the appropriate attribute value for display
	const serializeCarAttributes = (key: KeyOfStarship, value: Spaceship): number | string | Array<string> => {
		switch (key) {
			case 'films':
			case 'residents':
			case 'characters':
			case 'planets':
			case 'species':
			case 'starships':
			case 'vehicles':
				return value[key].length;

			case 'pilots':
				return value[key];

			case 'created':
			case 'edited':
				return moment(value[key]).format('LLLL');

			default:
				return value[key];
		}
	};

	// Render the list of pilot names linked to their respective pages
	const pilotsListByNames = () => {
		const pilotsUrls = serializeCarAttributes('pilots', spaceship as Spaceship) as Array<string>;

		if (pilotsUrls.length === 0) {
			return (
				<MDBBadge pill light>
					0
				</MDBBadge>
			);
		} else {
			return (
				<ul className={styles.cardList}>
					{pilotsUrls.map((pilotUrl, key) => (
						<li key={key}>
							<PilotBadge pilotId={pilotUrl.split('/')[5]} router={router}></PilotBadge>
						</li>
					))}
				</ul>
			);
		}
	};

	return (
		<MDBCard className=' w-100  justify-content-center'>
			<MDBCardImage src={photo} position='top' alt={spaceship?.name} />
			<MDBCardBody className='w-100'>
				<MDBCardTitle className={styles.cardDetailsTitle}>{spaceship?.name || spaceship?.title}</MDBCardTitle>
				{spaceship?.opening_crawl && <MDBCardText>{spaceship?.opening_crawl}</MDBCardText>}
				<MDBListGroup className='py-0' light>
					{Object.keys(spaceship).map((key) => (
						<MDBListGroupItem key={key} className='d-flex justify-content-between align-items-center py-2'>
							{attributeToWords(key)}
							{(key === 'pilots' && pilotsListByNames()) || (
								<MDBBadge className={styles.cardDetailsAttributeValue} key={key} pill light>
									{serializeCarAttributes(key as KeyOfStarship, spaceship as Spaceship)}
								</MDBBadge>
							)}
						</MDBListGroupItem>
					))}
				</MDBListGroup>
				<MDBBtn color='secondary' onClick={() => closeModal(false)} className='mt-4 float-end '>
					Close
				</MDBBtn>
			</MDBCardBody>
		</MDBCard>
	);
}
