import React from 'react';
import styled from 'styled-components';

import { QoulityIcon, TimeIcon, ComfortIcon } from '../../src/icons/Icons';
import { H2, H5 } from '../../src/theme/StyledElements';

const WhyUsContainer = styled.div`
    
    padding: 3em 1em 3em 1em;
    @media only screen and (max-width: 767.98px) {
        padding: 1em;
    }

    .benefits-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 1em;

        .benefit-wrapper {
            text-align: center;
            margin: 1rem 2rem 3rem 2rem;
            @media only screen and (max-width: 767.98px) {
                margin: 0.5em;
            }

            .benefit-desc {
                width: 325px;
                padding: 1rem;
                font-family: 'Didact Gothic', sans-serif;
                font-size: 1.3em;
                color: rgba(71, 71, 71, 0.7);
            }
        }

    }

`;

const WhyUs = () => {
    return (
        <WhyUsContainer>
            <H2>Чому варто обрати нас?</H2>
            <div className='benefits-container'>
                <div className='benefit-wrapper'>
                    <TimeIcon />
                    <H5>Доступність</H5>
                    <div className='benefit-desc'>Ми дбаємо про ваш час та гроші. Безкоштовно проводимо попередній розрахунок, та дотримуємося зазначених термінів. Обираючи нас, Ви зможете вчасно отримати виконану роботу за доступними цінами</div>
                </div>
                <div className='benefit-wrapper'>
                    <QoulityIcon />
                    <H5>Якість</H5>
                    <div className='benefit-desc'>Наша команда з відповідальністю ставиться до кожного проєкту, виконує роботу якісно, з дотриманням будівельних норм та забезпечує наших клієнтів надійним житлом на довгі роки</div>
                </div>
                <div className='benefit-wrapper'>
                    <ComfortIcon />
                    <H5>Комфорт</H5>
                    <div className='benefit-desc'>Компанія Лізена піклується про комфорт наших клієнтів. Забезпечує кваліфікованими спеціалістами, усією необхідною технікою та доставкою матеріалів впродовж будівництва.</div>
                </div>
            </div>
        </WhyUsContainer>
    );
}

export default WhyUs;