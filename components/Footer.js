import React from 'react';
import styled from 'styled-components';

import { LocationIcon, EmailIcon, PhoneIcon, FacebookIcon, InstagramIcon } from '../src/icons/Icons';

const FooterContainer = styled.div`
    min-height: 200px;
    background-color: rgb(245, 245, 245);
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3em 2em 3em 2em;
    font-family: 'Didact Gothic', sans-serif;
    font-size: 16px;
    color: rgba(71, 71, 71, 0.8);
    justify-items: center;
    grid-gap: 25px 25px;

    @media only screen and (max-width: 767.98px) {
        grid-template-columns: 1fr;
    }
    
    .footer-slogan {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @media only screen and (max-width: 767.98px) {
            justify-content: center;
        }

        h4 {
            font-size: 24px;
            font-weight: 700px;
            padding-bottom: 2rem;
            margin-left: 0.5rem;
            font-family: 'Source Sans Pro', sans-serif;
        }
        
    }

    footer-item {
        margin-left: 50px;
        margin-right: 50px;
    }

    h5 {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 17px;
        padding-bottom: 10px;
    }

    .social-icons {
        margin-top: 1em;
    }

    .logo-img {
        height: 200px;
        width: 200px;
        display: inline-block;
    }

    .footer-contact {
        display: flex;
        justify-content: flex-start;
        font-family: 'Didact Gothic', sans-serif;
        align-items: center;
        height: 30px;
        
        .footer-p {
            margin-left: 5px;
            font-family: 'Didact Gothic', sans-serif;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer-slogan'>
                  <img src={'/logo.png'} className='logo-img' alt="Lizena" />
                  <h4 className='slogan'>Будуй з нами – живи краще!</h4>
            </div>
            <div className='footer-item'>
                <h5>Контакти</h5>
                <div className='footer-contact'>
                    <EmailIcon />
        
                    <p className='footer-p'>lizenabud@gmail.com</p>
                </div>
                <div className='footer-contact'>
                    <PhoneIcon />
                    <p className='footer-p'><a href="tel://+380679044630">+38 (067) 90 44 630,</a></p>
                    <p className='footer-p'><a href="tel://+380976608663">+38 (097) 66 08 663</a></p>
                </div>
                <div className='footer-contact'>
                    <LocationIcon />
                    <p className='footer-p'>м. Львів, вул. Богданівська, 11а</p>
                </div>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/lizenabud/?modal=admin_todo_tour'><FacebookIcon /></a>
                    <a href='https://www.instagram.com/lizenabud_lviv/?igshid=1vm6luqm2cl0l'><InstagramIcon /></a>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;