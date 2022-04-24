import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/theme.css.ts'

const MyApp = ({ Component, pageProps }: AppProps<{}>) => {
  return (
    <div id="main">
      <Head>
        <title>My New App Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
