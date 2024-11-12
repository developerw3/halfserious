'use client';
import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem, MDBCardHeader } from 'mdb-react-ui-kit';
import Link from 'next/link';
import styles from './documentation.module.scss';

// The DocumentationPage component renders a page with a list of tech stack links to various resources, which used to build this Web App
export default function DocumentationPage() {
	return (
		<MDBCard className={styles.documentation} alignment='center'>
			<MDBCardHeader>Tech Stack</MDBCardHeader>
			<MDBListGroup className={styles.listGroup}>
				<MDBListGroupItem>
					<Link href='https://www.typescriptlang.org/' target='_blank'>
						TypeScript
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>
						JavaScript
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://nodejs.org/en' target='_blank'>
						Node.js
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://nextjs.org/' target='_blank'>
						Next.js
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://react.dev/' target='_blank'>
						React
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://redux.js.org/' target='_blank'>
						Redux
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://redux-toolkit.js.org/' target='_blank'>
						Redux Toolkit
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://swapi.dev/' target='_blank'>
						Star Wars API
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://unsplash.com/developers' target='_blank'>
						Unsplash API
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://mdbootstrap.com/docs/react/' target='_blank'>
						Material Design & Bootstrap
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://sass-lang.com/' target='_blank'>
						Sass
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://tailwindcss.com/' target='_blank'>
						Tailwind CSS
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://fontawesome.com/' target='_blank'>
						Font Awesome
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://eslint.org/' target='_blank'>
						Eslint
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://prettier.io/' target='_blank'>
						Prettier
					</Link>
				</MDBListGroupItem>
				<MDBListGroupItem>
					<Link href='https://momentjs.com/' target='_blank'>
						Moment
					</Link>
				</MDBListGroupItem>
			</MDBListGroup>
		</MDBCard>
	);
}
