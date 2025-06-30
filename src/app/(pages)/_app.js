import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Google Analytics script */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-5PVC62L8QP"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-5PVC62L8QP');
                    `,
                }}
            />
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}

export default MyApp;
