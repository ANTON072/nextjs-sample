import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app'
import { useCallback, useEffect, useState } from 'react'

import '../../styles/globals.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  const [isReadyMsw, setReadyMsw] = useState(false)

  // mswの起動が遅いので無理やりタイミングをずらす
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_API_MOCKING) return
    setTimeout(() => {
      setReadyMsw(true)
    }, 500)
  }, [])

  const render = useCallback(() => {
    if (!process.env.NEXT_PUBLIC_API_MOCKING) {
      return <Component {...pageProps} />
    }

    if (!isReadyMsw) return null

    return <Component {...pageProps} />
  }, [Component, pageProps, isReadyMsw])

  return <UserProvider>{render()}</UserProvider>
}
