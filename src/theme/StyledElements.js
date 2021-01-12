import styled from 'styled-components';

export const H2 = styled.h2`
    color: ${(props) => props.theme.colors.darkslategray};
    // font-family: 'Raleway, sans-serif';
    // font-family: 'Poiret One', cursive;
    // font-family: 'Didact Gothic', sans-serif;
    // font-family: 'Comfortaa', cursive;
    // font-family: 'Inria Sans', sans-serif;
    // font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 35px;
    // font-family: 'Ubuntu', sans-serif;
    // font-family: 'Old Standard TT', serif;
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
    font-size: 25px;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 1em 0 0 0;
    text-align: center;
    text-transform: uppercase;

    @media only screen and (max-width: 767.98px) {
        font-size: 25px;
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
    font-family: 'Comic Neue', cursive;
    font-size: 23px;
    font-weight: 600px;
    color: ${(props) => props.theme.colors.darkslategray};
    padding: 0;
    margin: 0;
`;