import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
	return (
		<MDBFooter bgColor='light' className='text-center text-lg-start'>
			<section className='d-flex justify-content-center justify-content-lg-between border-bottom'></section>

			<section>
				<MDBContainer className='text-center text-md-start mt-5'>
					<MDBRow className='mt-3'>
						<MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>
								<MDBIcon icon='gem' className='me-3' />
								Profile
							</h6>
							<p>
								Highly skilled, bilingual Senior Software Engineer with over 12 years of experience in software development and two master’s degrees.{' '}
							</p>
							<p>Multidisciplinary developer with a deep understanding of software engineering principles, high standards and best practices.</p>
						</MDBCol>

						<MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Expertise</h6>
							<div className='py-2'>MEAN & MERN Stack</div>
							<div className='py-2'>RESTful API</div>
							<div className='py-2'>Database Modeling</div>
							<div className='py-2'>Systems Modeling</div>
							<div className='py-2'>Software Architecture</div>
						</MDBCol>

						<MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
							<div className='py-2'>TypeScript</div>
							<div className='py-2'>JavaScript</div>
							<div className='py-2'>Node.JS</div>
							<div className='py-2'>Jest</div>
							<div className='py-2'>Cypress</div>
						</MDBCol>

						<MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
							<div className='py-2'>
								<MDBIcon icon='home' className='me-3' />
								Montreal, Quebec, Canada
							</div>
							<div className='py-2'>
								<MDBIcon icon='envelope' className='me-3' />
								developerw3@gmail.com
							</div>
							<div className='py-2'>
								<MDBIcon icon='phone' className='me-3' />+ 1 (514) 260 - 2646
							</div>
							<div className='py-2'>
								<MDBIcon fab icon='github' className='me-3' />
								developerw3
							</div>
							<div className='py-2'>
								<MDBIcon fab icon='instagram' className='me-3' />
								the.beautiful.nature.photos
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			<section className='d-flex justify-content-center justify-content-lg-between border-bottom'></section>
			<div className='text-center p-4 copyright'>© 2024 Copyright - Hamza Chorfi</div>
		</MDBFooter>
	);
}
