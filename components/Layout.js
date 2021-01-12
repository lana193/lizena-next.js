import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat|Didact+Gothic|Comic+Neue:ital@1|Nunito+Sans|Old+Standard+TT:700|Raleway|Source+Sans+Pro:600|Ubuntu:500&display=swap"
                    rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
            </Head>
            <NavBar/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;