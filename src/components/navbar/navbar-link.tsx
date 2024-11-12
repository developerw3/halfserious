import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { NavbarLinkProps } from './model';

export default function NavbarLink({ href, name, icon }: NavbarLinkProps) {
	return (
		<Link href={href}>
			<div className={styles.navbarLink}>
				{icon}
				<div>{name}</div>
			</div>
		</Link>
	);
}
