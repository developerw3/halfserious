'use client';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

export default function AboutPage() {
	return (
		<MDBCard className='m-5 mx-auto'>
			<MDBCardImage
				position='top'
				src='https://images.unsplash.com/photo-1726497657175-ac4cdb6cb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzI4MjR8MHwxfHNlYXJjaHwyfHxzdGFyd2FycyUyMHZlaGljbGVzfGVufDB8MHx8fDE3MzEyOTM2NjF8MA&ixlib=rb-4.0.3&q=80&w=1080'
				alt='Pilot'
			/>
			<MDBCardBody>
				<MDBCardTitle>About Page</MDBCardTitle>
				<MDBCardText>About page here...</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	);
}
