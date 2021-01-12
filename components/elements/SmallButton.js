import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    background-color: ${props => props.danger ? props.theme.colors.darkRed : props.theme.colors.mediumseagreen};
    width: ${props => props.width ? props.width : '100%'};
    color: white;
    padding: 14px 20px;
    margin: 8px 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    @media screen and (max-width: 600px) {
    }
  
`;

export const SmallButton = ({ name, type, onClick, danger, width }) => {
    return (
        <ButtonContainer danger={danger} type={type} onClick={onClick} width={width}>
            {name}
        </ButtonContainer>
    );
}