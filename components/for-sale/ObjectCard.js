import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const ObjectWrapper = styled.div`
    margin: 15px;

    @media only screen and (max-width: 767.98px) {
        margin: 15px 0;
    }
    
    .card {
        box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
        overflow: hidden;
        border-radius: .5rem;
        background-color: #fff;
        width: 360px;
        margin: 0 auto;
        line-height: 1.5;
        .header{
            background-image: url(${props => props.background});
            padding: 1rem;
            height: 14rem;
            background-size: cover;
            background-position: center;
            cursor: pointer;
        }
        .main-info{
            padding: 1rem;
            .title{
                text-transform: uppercase;
                letter-spacing: .025em;
                font-size: .875rem;
                color: #4a5568;
                font-weight: 700;
            }
            .price{
                font-size: 1.875rem;
                color: #1a202c;
            }
            .address{
                color: #4a5568;
            }
        }
        .additional-info{
            color: #4a5568;
            padding: 1rem;
            display: flex;
            border-top-width: 1px;
            border-color: #e2e8f0;
            .items-center{
                flex: 1 1 0%;
                align-items: center;
                display: inline-flex;
                .icon {
                    width: 1.5rem;
                    color: #718096;
                    fill: currentColor;
                    margin-right: .75rem;
                    height: 1.5rem;
                }
            }
        }
        .footer{
            padding-bottom: 1rem;
            padding-top: .75rem;
            padding-left: 1rem;
            padding-right: 1rem;
            border-top-width: 1px;
            border-color: #e2e8f0;
            background-color: #f7fafc;
            text-align: center;
            cursor: pointer; 
            :hover {
                background: rgb(60,179,113);
                .title {
                    color: white;
                }

            }
            .title{
                letter-spacing: .025em;
                text-transform: uppercase;
                font-size: .85rem;
                color: #718096;
                font-weight: 700;
            }
            .contact-info{
                padding-top: .5rem;
                align-items: center;
                display: flex;
                .avatar{
                    background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80);
                    width: 2.5rem;
                    margin-right: .75rem;
                    height: 2.5rem;
                    border-radius: 9999px;
                    background-size: cover;
                    background-position: center;
                }
                .name{
                    color: #1a202c;
                    font-weight: 700;
                }
                .phone{
                    font-size: .875rem;
                    color: #4a5568;
                }
            }
        }
    }
*, ::before, ::after{
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
}
`;

const ObjectCard = (props) => {
    return (
        <ObjectWrapper background={props.main_image}>
            <div className='card'>
            <Link href={`/object/${props._id}`}><div className='header'></div></Link>
                <div className='body'>
                    <div className='main-info'>
                        <p className='title'>{props.subtitle} • {props.metres} м<sup>2</sup></p>
                        <p className='price'>${props.price}</p>
                        <p className='address'>{props.object_name}</p>
                    </div>
                    <div className='additional-info'>
                        <div className='items-center'>
                            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z'></path>
                            </svg>
                            <p><span className='text'>{props.rooms} </span>{props.rooms > 4 ? 'Кімнат' : 'Кімнати'}</p>
                        </div>
                        <div className='items-center'>
                            <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path fillRule='evenodd' d='M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z'></path>
                            </svg>
                            <p><span className='text'>{props.bathrooms} </span>{props.bathrooms > 4 ? 'Санвузлів' : 'Санвузли'}</p>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='title'>
                        <Link href={`/object/[object_id]`} as={`/object/${props._id}`}>Дізнатися більше</Link>
                        {/* <Link href={`/user?id={id}`} as={`/user/${id}`} */}
                    </div>
                </div>
            </div>
        </ObjectWrapper>
    );
}

export default ObjectCard;