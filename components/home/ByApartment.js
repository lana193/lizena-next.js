import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { H2, P2 } from '../../src/theme/StyledElements';
import { BigButton } from '../elements/BigButton';

const ByApartmentContainer = styled.div`
    padding: 2% 5% 15% 5%;
    text-align: center;

    .big-letter-p {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

const ByApartment = () => {
    return (
        <ByApartmentContainer>
            <H2>Бажаєте придбати житло?</H2>
            <P2 className='big-letter-p'>Компанія Лізена займається будівництвом котеджів та квартир під продаж.</P2>
            {/* <Link to={'/for-sale'}><BigButton name={"Перегляньте доступні об'єкти"} /></Link> */}
        </ByApartmentContainer>
    );
}

export default ByApartment;