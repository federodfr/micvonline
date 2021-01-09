import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MicvOnline</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
