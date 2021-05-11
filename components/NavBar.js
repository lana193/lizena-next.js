import React, { useState } from 'react';
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import { HomeIcon, OpenMenuIcon, CloseMenuIcon } from '../src/icons/Icons';

const NavBarContainer = styled.nav`
    height: 60px;
    width: 100%;
    padding: 0 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    z-index: 2;
    position: fixed;

    .nav-left {
        display: flex;
        justify-content: start;
        align-items: center;
    }
    
    .nav-right {
        display: flex;
        justify-content: flex-end;
    }

    .nav-link {
        text-decoration: none;
        margin-right: 2rem;
        text-transform: uppercase;
        font-family: ${(props) => props.theme.fonts.links};
        color:rgb(47,79,79);
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0px;
        opacity: 0,7;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    
    .nav-link:hover {
        border-top: 2px solid rgb(0, 197, 105);
        color: rgb(0, 197, 105);
    }

    .nav-link:active {
        border-top: 2px solid rgb(0, 197, 105);
        color: rgb(0, 197, 105);
    }

    .mobile-menu {
        display: flex;
        position: absolute;
        margin-top: 43px;
        margin-right: -1.5rem;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100vw;
        background-color: #f9f9f9;
        opacity: 1;
        border-top: 1px solid 	rgb(143,188,143, 1);
        
        .mobile-nav-link {
            width: 100%;
            color: rgba(47,79,79,0.8);
            font-size: 12px;
            height: 35px;
            line-height: 35px;
            border-bottom: 0.1px solid 	rgb(143,188,143, 1);
            text-transform: uppercase;
            font-family: 'Source Sans Pro',sans-serif;
            padding: 0.5em 2em 0.5em 2em;
            font-size: 15px;
            font-weight: 100vw;
            height: 50px;
            vertical-align: middle;   
        }

        .mobile-nav-link:active {
            color: rgb(0, 197, 105, 0.8);
        }
    }

`; 

const NavBar = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false);
    return (
        <NavBarContainer>
            <div className='nav-left'>
                <Link href='/' forvardRef>
                    <HomeIcon />
                </Link>         
                <div className='phone_wrapper'>
                    <a href="tel://+380679044630">+38 (067) 90 44 630,</a> <br/>
                    <a href="tel://+380976608663">+38 (097) 66 08 663</a>
                </div>
            </div>
            { isMobile ? 
                <div className='nav-right'>
                    <div onClick={() => setShowMobileMenu(!showMobileMenu)} className =''>
                        { showMobileMenu ? 
                               <CloseMenuIcon />
                            :
                            <OpenMenuIcon /> 
                        }     
                    </div>
                
                    { showMobileMenu && 
                        <div className='mobile-menu' onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <Link href='/'><a className ='mobile-nav-link'>Головна</a></Link>
                            <Link href='/for-sale'><a className ='mobile-nav-link'>Об'єкти під продаж</a></Link>
                            <Link href='/projects'><a className ='mobile-nav-link'>Наші роботи</a></Link>
                            <Link href='/services'><a className ='mobile-nav-link'>Послуги та розцінки</a></Link>
                            <Link href='/contacts'><a className ='mobile-nav-link'>Контакти</a></Link>
                        </div>
                    }
                </div>
                : 
                <div className ='nav-right'>
                    <Link href='/'><a className ='nav-link'>Головна</a></Link>
                    <Link href='/for-sale'><a className ='nav-link'>Об'єкти під продаж</a></Link>
                    <Link href='/projects'><a className ='nav-link'>Наші роботи</a></Link>
                    <Link href='/services'><a className ='nav-link'>Послуги та розцінки</a></Link>
                    <Link href='/contacts'><a className ='nav-link'>Контакти</a></Link>
                </div>
            }
        </NavBarContainer>
    ) 
}
    
export default NavBar;