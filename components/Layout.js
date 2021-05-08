import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Didact+Gothic|Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800|Nunito+Sans|Old+Standard+TT:700|Raleway|Source+Sans+Pro:600&display=swap"
                    rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
                <link rel="icon" href="/favicon.ico" />
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-193690651-1">
                </script>
                <script dangerouslySetInnerHTML={
                    {
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-193690651-1');
                    `}
                }>
                </script>
                {/* <!-- Google Tag Manager --> */}
                <script dangerouslySetInnerHTML={{
                        __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NTW5S2R');`
                    }}>   
                </script>
            </Head>
            <body>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript dangerouslySetInnerHTML={{
                    __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTW5S2R"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }}>
            </noscript>
                <NavBar />
                {children}
                <Footer />
            </body>
        </>
    )
}

export default Layout;