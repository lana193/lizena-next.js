import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    background-color: ${({theme}) => theme.colors.mediumseagreen};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
    line-height: 17px;
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Comic Neue', cursive;
    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    @media screen and (max-width: 600px) {
    }
  
`;

export const BigButton = ({ name, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {name}
        </ButtonContainer>
    );
}