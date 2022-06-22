import Head from "next/head"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/EpikCord_Logo.png"></link>
        </Head>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp