import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { BodyContainer } from '../../src/theme/StyledElements';

const ObjectsContainer = styled.div`
    padding: 1em;
    width: 100%;

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
        <BodyContainer>
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
        </BodyContainer>
    )
}

export default Objects;