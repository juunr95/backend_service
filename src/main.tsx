import { NhostClient, NhostProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import AuthProvider from './providers/AuthProvider';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const nhost = new NhostClient({
  subdomain: 'bgucztygthkmmckmkpvr',
  region: 'sa-east-1',
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
  </React.StrictMode>,
)
