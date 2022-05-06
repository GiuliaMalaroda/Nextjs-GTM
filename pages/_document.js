import Document, { Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const gtmIframe = `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=env-${process.env.NEXT_PUBLIC_GTM_ENV_ID}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

        return (
            <Html>
                <Head />

                <body>
                    <noscript dangerouslySetInnerHTML={
                        { __html: gtmIframe}
                    }/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;