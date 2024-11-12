import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn, MDBListGroup, MDBListGroupItem, MDBBadge, MDBCardText } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import Modal from '@/components/modal/modal';
import CardDetails from '@/components/card/card-details';
import { attributeToWords } from '@/components/card/card';
import { CardProps } from '@/components/card/model';
import styles from './card.module.scss';

// Functional component that takes a spaceship (starship | vehicle | planet | film | pilot), photo, and keysPreview to display card preview
export default function CardPreview({ spaceship, photo, keysPreview }: CardProps) {
	const [open, setOpen] = useState<boolean>(false);

	// Function to render the spaceship details modal if the modal is open
	const spaceshipCardDetailsModal = () => {
		return (
			open && (
				<Modal open={open} setOpen={setOpen}>
					<CardDetails spaceship={spaceship} photo={photo} closeModal={setOpen}></CardDetails>
				</Modal>
			)
		);
	};

	return (
		<>
			<MDBCard className='card'>
				<MDBCardImage src={photo} position='top' alt={spaceship?.name} height='180' />
				<MDBCardBody className='w-100'>
					<MDBCardTitle className={styles.cardPreviewTitle}>{spaceship?.name || spaceship?.title}</MDBCardTitle>
					{spaceship?.opening_crawl && <MDBCardText className={styles.cardPreviewOpeningCrawl}>{spaceship?.opening_crawl}</MDBCardText>}
					<MDBListGroup className='py-0' light>
						{keysPreview.map(
							(key) =>
								key !== 'opening_crawl' && (
									<MDBListGroupItem key={key} className='d-flex justify-content-between align-items-center py-2'>
										{attributeToWords(key)}
										<MDBBadge className={styles.cardPreviewAttributeValue} pill light>
											{spaceship[key]}
										</MDBBadge>
									</MDBListGroupItem>
								)
						)}
					</MDBListGroup>
					<MDBBtn onClick={() => setOpen(true)} className='mt-2'>
						See More
					</MDBBtn>
				</MDBCardBody>
			</MDBCard>
			{spaceshipCardDetailsModal()}
		</>
	);
}
