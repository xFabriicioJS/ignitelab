import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css';
import  App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
)
