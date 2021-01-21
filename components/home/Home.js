import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';

import { KeyIcon, RightArrow } from '../../src/icons/Icons';
import About from './About';
import WhyUs from './WhyUs';
import ContactModal from './ContactModal';
import ByApartment from './ByApartment';

const HomePageWrapper = styled.div`
    .background-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 800px;
        background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%), url(/background.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        padding: 5% 2% 2% 2%;
        background-attachment: fixed;

        .buy-appartment {
            align-self: flex-end;
            display: flex;
            justify-content: space-between;
            align-items: center;

            button {
                display: flex;
                align-items: center;
                border: 5px solid transparent;
                background: rgb(60,179,113);
                color: rgb(240,255,240);
                border-radius: 40px;
                font-family: 'Source Sans Pro',sans-serif;
                font-size: 17px;
                text-transform: uppercase;
                padding: 10px 30px;
                overflow: hidden;
                cursor: pointer;
                width: 220px;
                transition: 
                all        1.2s,
                border     0.5s 1.2s,
                box-shadow 0.3s 1.5s;
                white-space: nowrap;
                text-indent: 23px;
                font-weight: bold;
                span {
                    display: inline-block;
                    transform: translateX(300px);
                    font-weight: normal;
                    font-family: 'Raleway, sans-serif';
                    font-size: 25px;
                    opacity: 0;
                    transition: 
                     opacity 0.1s 0.5s;
                     transform 0.4s 0.5s;
                }

                &:hover {
                text-indent: 0;
                background: #003018;
                color: white;
                width: 260px;
                border: 10px solid rgb(60,179,113);
                box-shadow: 3px 3px 2px rgba(black, 0.15);
                span {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        }
        
    }

    @media only screen and (max-width: 767.98px) {
        padding-top: 10%;
        height: 720px;
    }
`;


const H1 = styled.h1`
    color: rgb(240,255,240);
    padding: 0.5em 0;
    font-size: 2em;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px) {
        font-size: 1.5em;
    }
`;

const Home = (props) => {
  const { handleSendMessage } = props;
  return (
    <div
    // className={styles.container}
    > 
      <Head>
        <title>Лізена | Будівельно-ремонтна компанія</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Будівництво та продаж нерухомості у Львові, +38 (067) 90 44 630, +38 (097) 66 08 663; м. Львів, вул. Богданівська, 11а" />
      </Head>

      <HomePageWrapper>
        <div className='background-container'>
          <div className='header'>
            <H1>Будівельно-ремонтна компанія ЛІЗЕНА</H1>
            <ContactModal handleSendMessage={handleSendMessage} />
          </div>
          <div className='buy-appartment'>
            <Link href='/for-sale'>
              <button>Придбати котедж
                <span><RightArrow/></span> 
              </button>
            </Link>
            <KeyIcon />
          </div>
        </div>
        <About />
        <WhyUs />
        <ByApartment />
      </HomePageWrapper>
    </div>
  );
}

export default Home;

/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */
