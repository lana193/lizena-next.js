import styled from 'styled-components';

const ButtonContainer = styled.button`
    background-color: ${props => props.danger ? props.theme.colors.darkRed : props.theme.colors.mediumseagreen};
    width: ${props => props.width && props.width};
    margin: 0.5em 0;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Raleway, sans-serif;
    font-size: 20px;
    :hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export const SmallButton = ({ name, type, onClick, danger, width, margin }) => {
    return (
        <ButtonContainer danger={danger} type={type} onClick={onClick} width={width} margin={margin}>
            {name}
        </ButtonContainer>
    );
}