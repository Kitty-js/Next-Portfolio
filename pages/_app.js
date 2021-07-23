import "bootswatch/dist/lux/bootstrap.min.css";
import Head from 'next/head';
import '../global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
 
}

export default MyApp;
