import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { initializeApp } from 'firebase/app';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { useApollo } from '@/graphql/apollo';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
};

if (process.env.NEXT_PUBLIC_APP_ENV === 'test') {
  const { server } = await import('@/mocks/server');
  server.listen();
}

const App = ({ Component, pageProps }: AppProps) => {
  const app = initializeApp(firebaseConfig);

  const init = async () => {
    const { worker } = await import('@/mocks/browser');
    worker.start();
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_APP_ENV === 'test') init();
  }, []);

  useEffect(() => {
    // const analytics = getAnalytics(app)
  }, [app]);

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
