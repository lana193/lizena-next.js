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
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;