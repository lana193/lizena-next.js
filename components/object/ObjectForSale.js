import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';

import Gallery from '../shared/Gallery';
import DeleteObjectModal from './DeleteObjectModal';
import UpdateObjectModal from './UpdateObjectModal';
import AddImageModal from '../shared/AddImageModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { H3, P3 } from '../../src/theme/StyledElements';

const ObjectWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 100px 0 150px 0;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    margin: 0 auto;

    @media only screen and (max-width: 767.98px) {
        padding: 60px 0 50px 0;
        width: 100%;
    }

    .object-main-info {
        width: 80%;
        height: 600px;
        display: flex;
        align-items: flex-end;
        background-image:  url(${props => props.background});
        background-size: cover, contain;
        background-repeat: no-repeat;
        background-position: center;

        @media only screen and (max-width: 767.98px) {
            background-size: cover;
            width: 100%;
            height: 350px;
        }

            p, h1 {
                // font-size: 1.3em;
                text-transform: uppercase;
                font-weight: normal;
            }

            @media only screen and (max-width: 767.98px) {
                background-size: cover;
                width: 100%;
                height: 350px;
            }

            .object-title {
                width: 70%;
                height: 50px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                position: relative;
                background: ${props => props.theme.colors.mediumseagreen};
                padding-left: 3em;
                
                @media only screen and (max-width: 767.98px) {
                    padding-left: 1.8em;
                }
                 
                :after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 0;
                    border-left: 25px solid ${props => props.theme.colors.aliceBlue};
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid transparent;
                }

                .h1-title, .p-title {
                    font-size: 1em;
                    color: ${props => props.theme.colors.aliceBlue};

                    sup {
                        color: ${props => props.theme.colors.aliceBlue};
                    }
                }

                .h1-title {
                    margin-right: 5px;
                    
                }

            }

            .object-price {
                width: 30%;
                height: 50px;
                position: relative;
                background: ${props => props.theme.colors.aliceBlue};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                 
                :after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 0;
                    border-left: 25px solid ${props => props.theme.colors.mediumseagreen};
                    border-top: 25px solid transparent;
                    border-bottom: 25px solid transparent;
                }

                .p-price {
                    font-size: 1.3em;
                    padding-right: 0.5em;
                    text-align: right;
                    @media only screen and (max-width: 767.98px) {
                        padding-right: 0.2em;
                        font-size: 1.2em;
                    }
                }
                  
            }
        }
        
    }

    .object-desc {
        width: 100%;
        text-align: left;

        p {
            margin-bottom: 0.2em;
        }

        ul {
            padding: 0 5em 1em 4em;
            list-style-image: url('/doneIcon.svg');
            vertical-align: center;

            li {
                font-size: 1.2em;
                font-weight: 500;
                font-family: 'Montserrat', sans-serif;
                @media only screen and (max-width: 767.98px) {
                     font-size: 1.1em;
                 }

            }
        }
    }

    .gallery-wrapper {
        width: 100%;
        margin: 0 auto;
        text-align: center;

        .gallery {
            padding-top: 20px;

        }
    }
`;

const ObjectForSale = (props) => {
    const { handleGetObject, selectedObject, handleDeleteObject, handleUpdateObject, objectData, handleEditObjectPhotos } = props;
    const { main_image, object_name, subtitle, metres, rooms, price, description, photos, conclusion, works } = selectedObject;
    
    const router = useRouter();
    const objectId = router.query.object_id;

    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        objectId && handleGetObject(objectId);
    }, [handleGetObject, objectId])

    const shortDesc = `Купити ${objectData.subtitle}, площа ${objectData.metres} м.кв, ${objectData.price}$, ${objectData.rooms > 4 ? `${objectData.rooms} кімнат` : `${objectData.rooms} кімнати`}`;

    return (
        <ObjectWrapper background={main_image && main_image}>
            <Head>
                {/* Primary */}
                <title>{`Купити котедж | ${objectData.object_name}`}</title>
                <meta name="title" content={`Купити котедж | ${objectData.object_name}`}/>
                <meta name="description" content={shortDesc}/>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`http://lizena.com.ua/object/${objectData._id}`}/>
                <meta property="og:title" content={`Купити котедж | ${objectData.object_name}`}/>
                <meta property="og:description" content={shortDesc}/>
                <meta property="og:image" content={objectData.main_image}/>
            </Head>
            {objectData &&
                <>
                    <div className='object-main-info'>
                        <div className='object-title'>
                            <h1 className='h1-title'>{object_name} </h1><p className='p-title'> • {metres} м<sup>2</sup></p>
                        </div>
                        <div className='object-price'>
                            <p className='p-price'> {price} $</p>
                        </div>
                    </div>
                    <div className='object-desc'>
                        <H3>Опис котеджу</H3>
                        { description && description.split("\n").map((paragraph, index) => {
                            return (
                            <P3 key={index}>{paragraph}</P3>
                            )})
                        }
                        {works && <P3>У будинку:</P3>}
                        { works &&
                            <ul>
                                {works.map((work, index) => {
                                    return (
                                        <li key={index}>{work}</li>
                                    )
                                })}
                            </ul>
                        }
                            
                    { conclusion && conclusion.split("\n").map((paragraph, index) => {
                            return (
                            <P3 key={index}>{paragraph}</P3>
                            )})
                        }
                        
                    </div>
                    <div className='gallery-wrapper'>
                        <H3>Галерея</H3> 
                        { currentUserToken && 
                            <div> 
                                <AddImageModal 
                                    id={objectId}
                                    handleUpdate={handleUpdateObject}
                                    handleGet={handleGetObject}
                                    currentUserToken={currentUserToken}
                                /> 
                            </div>
                        }
                        <div className='gallery'>
                            <Gallery 
                                photos={photos} 
                                id={objectId}
                                currentUserToken={currentUserToken} 
                                handleGet={handleGetObject}
                                handleEditPhotos={handleEditObjectPhotos}
                                folder='objects'
                            />
                        </div>
                    </div>

                    {currentUserToken &&
                        <div>
                            <UpdateObjectModal
                                handleUpdateObject={handleUpdateObject}
                                objectId={objectId}
                                selectedObject={selectedObject}
                                handleGetObject={handleGetObject}
                                currentUserToken={currentUserToken}
                            />
                            <DeleteObjectModal
                                handleDeleteObject={handleDeleteObject}
                                objectId={objectId}
                                currentUserToken={currentUserToken}
                            />
                        </div>
                    }
                </>
            }
        </ObjectWrapper>
    )
}

export default ObjectForSale;
