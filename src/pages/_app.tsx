import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { initMocks } from '../mocks'

initMocks()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
