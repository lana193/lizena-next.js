import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

import ProjectGallery from '../project/ProjectGallery';
import DeleteObjectModal from './DeleteObjectModal';
import UpdateObjectModal from './UpdateObjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { H3, P2 } from '../../src/theme/StyledElements';

const ObjectWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 100px 0 150px 0;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (max-width: 767.98px) {
        padding: 60px 0 50px 0;
    }

    .object-main-info {
        display: flex;
        width: 70%;
        height: 600px;
        align-items: flex-end;
        background-image:  url(${props => props.background});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        @media only screen and (max-width: 767.98px) {
            width: 100%;
            height: 350px;
        }

            p {
                font-size: 1.3em;
                text-transform: uppercase;
                padding: 1em 3em;
            }

            .object-title {
                width: 70%;
                height: 50px;
                vertical-align: middle;
                position: relative;
                background: ${props => props.theme.colors.mediumseagreen};
                 
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

                .p-title {
                    font-size: 1em;
                    color: ${props => props.theme.colors.aliceBlue};

                    sup {
                        color: ${props => props.theme.colors.aliceBlue};
                    }
                }
            }

            .object-price {
                width: 30%;
                height: 50px;
                vertical-align: middle;
                position: relative;
                background: ${props => props.theme.colors.aliceBlue};
                 
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
                    font-size: 1.5em;
                    padding: 0.5em 0.2em;
                    text-align: right;
                }
                  
            }
        }
        
    }

    .object-desc {
        width: 100%;
    }

    .gallery-wrapper {
        width: 100%;

        .gallery {
            padding-top: 20px;

        }
    }
`;

const ObjectForSale = (props) => {
    const { handleGetObject, selectedObject, handleDeleteObject, handleUpdateObject, objectData } = props;
    const { main_image, object_name, subtitle, metres, rooms, price, description, photos, _id } = objectData;
    const router = useRouter();
    const objectId = router.query.object_id;

    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        objectId && handleGetObject(objectId);
    }, [handleGetObject, objectId])

    return (
        <ObjectWrapper background={ main_image && main_image}>
            <NextSeo
                title = {`Купити котедж - ${object_name && object_name}`}
                description={`Придбати ${subtitle && subtitle}, площа ${metres && metres} м.кв, ${rooms && rooms > 4 ? 'Кімнат' : 'Кімнати'}`}
                canonical={`http://www.lizena.com.ua/object/${_id}`}
                openGraph={{
                    type: 'website',
                    url: `http://www.lizena.com.ua/object/${_id}`,
                    title: `Купити котедж - ${object_name && object_name}`,
                    description: `Придбати ${subtitle && subtitle}, площа ${metres && metres} м.кв, ${rooms && rooms > 4 ? 'Кімнат' : 'Кімнати'}`,
                    images: [
                        {
                            url: `${main_image}`,
                            width: 800,
                            height: 600,
                            alt: `${subtitle && subtitle} - ${object_name && object_name}`,
                        },
                    ],
                    site_name: 'Lizena',
                    tags: ['купити', 'котедж', 'львів'],
                }}
            />
            {objectData &&
                <>
                    <div className='object-main-info'>
                        <div className='object-title'>
                            <p className='p-title'>{object_name} • {metres} м<sup>2</sup></p>
                        </div>
                        <div className='object-price'>
                            <p className='p-price'> {price} $</p>
                        </div>
                    </div>
                    <div className='object-desc'>
                        <H3>Опис котеджу</H3>
                        <P2>{description}</P2>
                    </div>
                    <div className='gallery-wrapper'>
                        <H3>Галерея</H3>
                        <div className='gallery'>
                            <ProjectGallery photos={photos} />
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
