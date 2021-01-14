import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import ObjectCard from './ObjectCard';
import AddObjectModal from './AddObjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';

const ObjectsContainer = styled.div`
    padding: 70px 0 150px 0;
    width: 100%;
    min-height: 80vh;

    @media only screen and (max-width: 767.98px) {
        padding: 60px 0 50px 0;
    }

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
                <title>Лізена | Об'єкти під продаж</title>
                <meta name='description' content='Будівельно-ремонтна компанія Лізена | Продаж котеджів Львів' />
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