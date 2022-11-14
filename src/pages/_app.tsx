// import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app'

import '../../styles/globals.css'

require('../mocks')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
