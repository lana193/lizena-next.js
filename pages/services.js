import Head from 'next/head';

import styled from 'styled-components';

import { BodyContainer, H3, P2 } from '../src/theme/StyledElements';
import * as works from '../components/services/works';
import ServicePackage from '../components/services/ServicePackage';

const ServicesWrapper = styled.div`
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;

    .service-info {
        margin: 0 auto;
        padding: 0 1em 1em 1em;
        width: 80%;

        @media only screen and (max-width: 767.98px) {
            width: 100%;
        }

    }

    .repair-wrapper {
        grid-template-columns: 1fr 1fr 1fr;
        width: 80%;
        margin: 0 auto;
    }

    .build-wrapper {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        // width: 90%;
        margin: 0 auto;
    }

    .repair-wrapper, .build-wrapper {
        background-color: #1abc9c;
        padding: 2em;
        display: grid;
        justify-content: center;
        column-gap: 10px;
        row-gap: 15px;
        justify-items: center;

        @media only screen and (max-width: 767.98px) {
            grid-template-columns: 1fr;
            width: 100%;
        }
       
    }

`;

const Services = () => {
    return (
        <BodyContainer>
            <ServicesWrapper>
                <Head>
                    <title>Лізена | Послуги та розцінки</title>
                    <meta name='description' content='Ремонтні послуги у м. Львів та околицях, дрібні будівельні роботи, ремонт з нуля, фасад, шпаклювання, фарбування, розведення електрики, сантехнічні роботи' />
                </Head>
                <div className='service-info'>
                    <H3>Спектр послуг</H3>
                    <P2>Компанія Лізена надає широкий спектр будівельних послуг, серед них весь перелік внутрішніх ремонтних робіт, робота з фасадом, встановлення сантехніки та проведення електрики. У нас Ви можете замовити, як дрібні будівельні роботи, так і ремонт "з нуля".</P2>
                    <P2>За необхідності ми допоможемо Вам з проектуванням, а наші дизайнери розроблять для Вас макет приміщення, з врахуванням Ваших побажань</P2>
                    <H3>Ремонтні послуги</H3>
                    <P2>Якщо Вас цікавить ремонт приміщення, Ви можете обрати один з запропонованих пакетів:</P2>
                </div>
                <div className='repair-wrapper'>
                    <ServicePackage
                        name='Економ'
                        price='2600 грн.'
                        description='Ремонт за доступними цінами'
                        worksAvl={works.repairEconomyAvl}
                        worksClosed={works.repairEconomyClosed}
                    />
                    <ServicePackage
                        name='Стандарт'
                        price='3000 грн.'
                        description='Пакет включає усі основні роботи'
                        worksAvl={works.repairStandartAvl}
                        worksClosed={works.repairStandartClosed}
                    />
                    <ServicePackage
                        name='Преміум'
                        price='3600 грн.'
                        description='Ремонт з дотриманням найвищих стандартів'
                        worksAvl={works.repairPremiumAvl}
                    />
                </div>

                <H3>Будівництво під ключ</H3>
                <div className='build-wrapper'>
                    <ServicePackage
                        name='Базовий'
                        price='300 $'
                        description='Базовий пакет будівництва'
                        worksAvl={works.buildBaseAvl}
                        worksClosed={works.buildBaseClosed}
                    />
                    <ServicePackage
                        name='Стандарт'
                        price='350 $'
                        description='Включає в себе всі основні роботи'
                        worksAvl={works.buildStandartAvl}
                        worksClosed={works.buildStandartClosed}
                    />
                    <ServicePackage
                        name='Комплексний'
                        price='430 $'
                        description='Розширений пакет будівництва'
                        worksAvl={works.buildComplexAvl}
                        worksClosed={works.buildComplexClosed}
                    />
                    <ServicePackage
                        name='Максимальний'
                        price='500 $'
                        description='Максимальний пакет будівництва'
                        worksAvl={works.buildMaximumAvl}
                    />

                </div>
            </ServicesWrapper>
        </BodyContainer>
    );
}

export default Services;