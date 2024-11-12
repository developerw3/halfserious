'use client';
import React from 'react';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

// GlobalLayout component wraps the children with a header and footer
export default function GlobalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header></Header>
			<div>{children}</div>
			<Footer></Footer>
		</>
	);
}
