export default function Head(pageTitle, pageDescription) {
    return (
        <head>
            <title>
                {
                    pageTitle
                }
            </title>
            <meta name="description" content={pageDescription} />
        </head>
    )
}