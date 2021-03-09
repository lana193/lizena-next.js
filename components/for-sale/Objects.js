import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';

const ObjectsContainer = styled.div`
    padding: ${props => props.theme.paddings.wrapperPadding};
    width: 100%;
    min-height: 80vh;

    // @media only screen and (max-width: 767.98px) {
    //     padding: 60px 0 50px 0;
    // }

    .objects-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const Objects = ({
    handleGetObjects,
    handleCreateObject,
    selectedObjects
}) => {
     
    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        !selectedObjects.length && handleGetObjects();
    }, [handleGetObjects, selectedObjects.length])

    return (
        <ObjectsContainer>
            <Head>
                <title>Лізена | Купити котедж</title>
                <meta name='description' content='Продаж котеджів та будинків у м. Львів та околицях, купити двохповерховий будинок у Рясне, с. Запитів. Придбайте житло у нас - компанія Lizena'/>
            </Head>
            
            { currentUserToken && <AddObjectModal 
                                        handleCreateObject={handleCreateObject}
                                        handleGetObjects={handleGetObjects}
                                        currentUserToken={currentUserToken}
                                    /> 
            }      
                <div className='objects-wrapper'>
                    { selectedObjects.map((item, i) => (
                        <ObjectCard key={i} {...item} />
                        )
                    )}
                </div>
        </ObjectsContainer>
    )
}

export default Objects;