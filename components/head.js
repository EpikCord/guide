import Head from "next/head"

export default function HeadContents(pageTitle, pageDescription) {
    return (
        <Head>
            <title>
                {
                    pageTitle
                }
            </title>
            <link rel="icon" href="../public/EpikCord_Logo.png"></link>
            <meta name="description" content={pageDescription} />
        </Head>
    )
}