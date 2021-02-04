import Head from 'next/head';
import styled from 'styled-components';

import ContactForm from '../contact-us/ContactForm';
import { P1, H5, H3, H4 } from '../../src/theme/StyledElements';
import { EnvelopeRoundIcon, PhoneRoundIcon, LocationRoundIcon } from '../../src/icons/Icons';

const ContactsContainer = styled.div`
    padding-top: 60px;

    .contacts-background {
        margin: 0em 20em 0em 20em;
        height: 500px;
        background-image: url('/contact-us.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;

        @media only screen and (max-width: 767.98px) {
            height: 350px;
            margin: 0;
        }
    }

    .contacts-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 7% 10% 10% 10%;
        text-align: center;
        grid-column-gap: 5em;

        @media only screen and (max-width: 767.98px) {
            grid-template-columns: 1fr;
            padding: 7% 2% 20% 2%;
        }

        .contacts-column-first {
            padding-top: 2em;
            .contact-wrapper {
                display: flex;
                align-items: center;
                padding: 2% 0;

                .contact-info {
                    margin-left: 8px;
                    display: flex;
                    flex-wrap: wrap;
                    span {
                        font-family: 'Montserrat', sans-serif;
                    }
                }
            }

            @media only screen and (max-width: 767.98px) {
                height: 500px;
                padding-top: 0;
            }
    
        }

        .social-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            text-align: center;
            margin: 0 auto;

            hr {
                border-top: 2px solid rgba(60,179,113, 0.8);
                color: rgb(60,179,113);
                margin: 5%;
                width: 40%;     
            }

            .social {
                padding: 2em 2em 1em 2em;
                display: flex;
                justify-content: space-around;
                align-atems: center;
                width: 270px;
                height: 70px;
                margin: 0 auto;
    
                .social-img {
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
        
                    :hover {
                        width: 55px;
                        height: 55px;
                        transition: width 1s, height 1s;
                    }
                }
            }
        }
        
        .contacts-column-second {
            background-color: #f3f3f3;
            padding: 1em 2em 2em 2em;
            border: 1px solid rgba(47, 79, 79, 0.6);
            border-radius: 7%;
        }

    }
`;

const Contacts = (props) => {
    const { handleSendMessage } = props;

    const handleSubmit = (values) => {
        handleSendMessage(values);
    }
    return (
        <ContactsContainer>
            <Head>
                <title>Лізена | Контакти</title>
                <meta name='description' content='Лізена - Контакти | тел.: +38 (067) 90 44 630, +38 (097) 66 08 663, email: lizenabud@gmail.com, м. Львів, вул. Богданівська, 11а' />
            </Head>
            <div className='contacts-background'></div>
            <div className='contacts-wrapper'>
                <div className='contacts-column-first'>
                    <H3>Наші контакти</H3>
                    <div className='contact-wrapper'>
                        <EnvelopeRoundIcon />
                        <P1 className='contact-info'>lizenabud@gmail.com</P1>
                    </div>
                    <div className='contact-wrapper'>
                        <PhoneRoundIcon />
                        <P1 className='contact-info'><span>+38 (067) 90 44 630,</span><span>+38 (097) 66 08 663</span></P1>
                    </div>
                    <div className='contact-wrapper'>
                        <LocationRoundIcon />
                        <P1 className='contact-info'>м. Львів, вул. Богданівська, 11а</P1>
                    </div>
                    <div className='social-wrapper'>
                        
                        <hr className='contacts-hr'/>
                        <H5>Знайдіть нас у соціальних мережах!</H5>
                        <div className='social'>
                            <a href='https://www.facebook.com/lizenabud/?modal=admin_todo_tour'>
                                <img className='social-img' src={'/social_facebook.png'} alt='Lizena facebook'/>
                            </a>
                            <a href='https://www.instagram.com/lizenabud_lviv/?igshid=1vm6luqm2cl0l'>
                                <img className='social-img' src={'/social_instagram.png'} alt='Lizena instagram'/>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className='contacts-column-second'>
                    <H4>Напишіть нам</H4>
                    <ContactForm onSubmit={handleSubmit} />
                </div>  
            </div>
            

        </ContactsContainer>
    );
}

export default Contacts;