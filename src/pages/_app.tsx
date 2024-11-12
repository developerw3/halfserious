'use client';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';
import GlobalLayout from '@/layouts/global/global-layout';

// The AppContent component renders the page component passed from Next.js, wrapped in the GlobalLayout
function AppContent({ Component, pageProps }: AppProps) {
	return (
		<GlobalLayout>
			<Component {...pageProps} />
		</GlobalLayout>
	);
}

// The main App component that wraps the application in the Redux Provider and renders the AppContent
export default function App(props: AppProps) {
	// Providing the Redux store to the entire application so components can connect to it
	return (
		<Provider store={store}>
			<AppContent {...props} />
		</Provider>
	);
}
