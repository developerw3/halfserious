import Navbar from '@/components/navbar/navbar';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import styles from './header.module.scss';
import React from 'react';
import HalfseriousLogo from '@/components/svg/halfserious';

export default function Header() {
	return (
		<MDBNavbar expand='lg' light bgColor='primary' className={styles.headerNavbar}>
			<MDBContainer fluid className={styles.container}>
				<MDBNavbarBrand href='https://halfserious.com/' target='_blank'>
					<HalfseriousLogo height={60} width={200} />
				</MDBNavbarBrand>
				<Navbar></Navbar>
			</MDBContainer>
		</MDBNavbar>
	);
}
