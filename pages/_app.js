import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        ></link>
        <link
          href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />{' '}
    </>
  )
}

export default MyApp
