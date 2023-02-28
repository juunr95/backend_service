import {NhostClient, NhostProvider} from '@nhost/react';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {sendToVercelAnalytics} from "./vitals";
import {Analytics} from "@vercel/analytics/react";
import AuthProvider from './providers/AuthProvider';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from "./reportWebVitals";

const nhost = new NhostClient({
	subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
	region: import.meta.env.VITE_NHOST_REGION,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<NhostProvider nhost={nhost}>
			<NhostApolloProvider nhost={nhost}>
				<AuthProvider>
					<App/>
				</AuthProvider>
			</NhostApolloProvider>
		</NhostProvider>
		<Analytics/>
	</React.StrictMode>,
)

reportWebVitals(sendToVercelAnalytics)