import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/graphql/apollo'
import { useEffect } from 'react'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

if (process.env.NEXT_PUBLIC_APP_ENV === 'test') {
  const { server } = await import('@/mocks/server')
  server.listen()
}

const App = ({ Component, pageProps }: AppProps) => {
  const app = initializeApp(firebaseConfig)

  const init = async () => {
    const { worker } = await import('@/mocks/browser')
    worker.start()
  }

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_APP_ENV === 'test') init()
  }, [])

  useEffect(() => {
    // const analytics = getAnalytics(app)
  }, [app])

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
