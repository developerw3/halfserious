import React, { useState } from 'react';
import { MDBCollapse, MDBIcon, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit';
import Menu, { NavbarLinkProps } from '@/components/navbar/model';
import NavbarLink from '@/components/navbar/navbar-link';

export default function Navbar() {
	const [openNavSecond, setOpenNavSecond] = useState(false);

	return (
		<>
			<MDBNavbarToggler onClick={() => setOpenNavSecond(!openNavSecond)}>
				<MDBIcon icon='bars' fas color='light' />
			</MDBNavbarToggler>
			<MDBCollapse navbar open={openNavSecond}>
				<MDBNavbarNav>
					{Menu().map((link: NavbarLinkProps, key: number) => (
						<NavbarLink key={key} href={link.href} name={link.name} icon={link.icon} />
					))}
				</MDBNavbarNav>
			</MDBCollapse>
		</>
	);
}
