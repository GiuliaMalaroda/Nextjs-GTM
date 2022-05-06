import Script from 'next/script';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    const gtm = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=${process.env.NEXT_PUBLIC_GTM_AUTH}&gtm_preview=env-${process.env.NEXT_PUBLIC_GTM_ENV_ID}&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}' );`;

    return (
        <>
            <Script
                id="gtm-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={
                    { __html: gtm }
                } />
            <Component {...pageProps} />
        </>
    )
}

export default App;