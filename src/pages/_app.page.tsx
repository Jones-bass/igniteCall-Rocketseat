import { globalStyles } from '@/src/styles/globals'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
