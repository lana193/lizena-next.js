import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const BodyContainer = styled.div`
    flex-grow: 1;
    justify-content: center;
    padding: 60px 0 5em 0;
    margin: 0;
    width: 100%;
    @media only screen and (max-width: 767.98px) {
        padding: 60px 0 1em 0;
    }
`;

export const modalStyles = {
    content : {
      top: `${isMobile ? '50%' : '50%'}`,
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: `${isMobile ? '95%' : '60%'}`,
      maxHeight: `${isMobile ? '80vh' : '600px'}`,
      overflow: 'scroll'
    }
  };

export const H2 = styled.h2`
    color: ${(props) => props.theme.colors.darkslategray};
    font-weight: 700;
    font-size: 35px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 0.5em 0;

    
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px) {
        font-size: 30px;
    }
`;


export const H3 = styled.h3`
    color: ${(props) => props.theme.colors.darkslategray};
    font-weight: 700;
    font-size: 1.5em;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 1em 0 0.5em 0;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px) {
        font-size: 1.2em;
    }

`;

export const P1 = styled.p`
   font-family: 'Montserrat', sans-serif;
   font-size: 1em;
   font-weight: 500;
   padding: 20px 10px;
`;

export const P2 = styled.p`
   font-family: 'Montserrat', sans-serif;
   font-size: 1.2em;
   font-weight: 500;
   padding: 20px 10px;
   text-align: left;
   @media only screen and (max-width: 767.98px) {
    padding: 10px 5px 10px 10px;
    }
`;

export const P3 = styled.p`
   font-family: 'Montserrat', sans-serif;
   font-size: 1.2em;
   font-weight: 500;
   padding: 0.5em 1em 0.5em 1.5em;
   text-align: left;
   @media only screen and (max-width: 767.98px) {
        font-size: 1.1em;
    }
`;

export const H4 = styled.h4`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    font-weight: 600px;
    color: ${(props) => props.theme.colors.darkslategray};
    padding: 1em;
    margin: 0;
`;

export const H4white = styled.h4`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    font-weight: 500px;
    color: ${(props) => props.theme.colors.aliceBlue};
    padding: 0.3em 1.5em;
    margin: 0;
`;

export const H5 = styled.h5`
    font-family: 'Open Sans', san-serif;
    font-size: 23px;
    font-weight: 600px;
    color: ${(props) => props.theme.colors.darkslategray};
    padding: 0;
    margin: 0;
`;