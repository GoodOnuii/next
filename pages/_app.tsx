import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import { initializeApp } from 'firebase/app';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useApollo } from '@/lib/gql/apollo';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const App = ({ Component, pageProps }: AppProps) => {
  const app = initializeApp(firebaseConfig);

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
