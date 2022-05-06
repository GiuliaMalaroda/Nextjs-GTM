import Document, { Html, Main, Head, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        const consentMode = `window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("consent", "default", {
                ad_storage: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                personalization_storage: "denied",
                security_storage: "granted",
                wait_for_update: 500,
            });
            gtag("set", "ads_data_redaction", true);`;
        const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=env-${process.env.NEXT_PUBLIC_GTM_ENV_ID}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}' );`;

        const gtmIframe = `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=env-${process.env.NEXT_PUBLIC_GTM_ENV_ID}&gtm_cookies_win=x"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

        return (
            <Html>
                <Head>
                    <title>Next.js + GTM</title>
                    {/* <script 
                        data-cookieconsent="ignore"
                        dangerouslySetInnerHTML={
                            { __html: consentMode }
                        } /> */}
                    <script 
                        data-cookieconsent="ignore"
                        dangerouslySetInnerHTML={
                            { __html: gtm }
                        } />
                </Head>

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