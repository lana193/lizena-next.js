import Link from 'next/link';
import styled from 'styled-components';

import { H2, P1 } from '../../src/theme/StyledElements';
import { BigButton } from '../elements/BigButton';

const ByApartmentContainer = styled.div`
    margin: 0 auto;
    padding: 1em;
    text-align: center;

    // @media only screen and (max-width: 767.98px) {
    // }

    .big-letter-p {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

const ByApartment = () => {
    return (
        <ByApartmentContainer>
            <H2>Бажаєте придбати житло?</H2>
            <P1 className='big-letter-p'>Компанія Лізена займається будівництвом котеджів та квартир у Львові та околицях під продаж.</P1>
            <Link href='/for-sale'><BigButton name={"Переглянути доступні об'єкти"} position={'center'} square={true} /></Link>
        </ByApartmentContainer>
    );
}

export default ByApartment;