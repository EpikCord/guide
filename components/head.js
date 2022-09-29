import Head from "next/head"

export default function HeadContents({pageTitle, pageDescription}) {
    return (
        <Head>
            <title>
                {
                    pageTitle
                }
            </title>
            <meta name="description" content={pageDescription} />
        </Head>
    )
}