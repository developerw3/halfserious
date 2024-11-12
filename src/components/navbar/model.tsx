import React from 'react';
import HomeIcon from '@/components/svg/home';
import DocumentationIcon from '@/components/svg/documentation';
import AboutIcon from '@/components/svg/about';

export interface NavbarLinkProps {
	href: string;
	name: string;
	icon: React.JSX.Element;
}

// Function to return an array of menu links (NavbarLinkProps)
export default function menu(): Array<NavbarLinkProps> {
	return [
		{
			href: '/',
			name: 'Home',
			icon: <HomeIcon></HomeIcon>,
		},
		{
			href: '/documentation',
			name: 'Documentation',
			icon: <DocumentationIcon></DocumentationIcon>,
		},
		{
			href: '/about',
			name: 'About',
			icon: <AboutIcon></AboutIcon>,
		},
	];
}
