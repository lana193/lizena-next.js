import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: ${props => props.position ? props.position : 'start'};

    @media screen and (max-width: 600px) {
        justify-content: center;
        margin: ${props => props.margin ? props.margin : '0'};
    }

    button {
        background-color: ${({theme}) => theme.colors.mediumseagreen};
        border: none;
        border-radius: 0.5rem;
        color: white;
        padding: 15px 32px;
        margin: 0 auto;
        
        text-decoration: none;
        display: inline-block;
        font-size: 17px;
        text-transform: uppercase;
        cursor: pointer;
        font-family: 'Open Sans', san-serif;
        font-weight: 400;
        :hover {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }

        @media screen and (max-width: 600px) {
            border-radius: ${props => props.square ? '0.5rem' : '45%'};
            text-align: center;
            padding:  ${props => !props.square && '25px 5px'};
            line-height: 1.5em;
            width: 70%;
            font-size: 15px;
        }
    } 
  
`;

export const BigButton = ({ name, onClick, margin, position, square }) => {
    return (
        <ButtonContainer onClick={onClick} margin={margin} position={position} square={square}>
            <button>{name}</button>    
        </ButtonContainer>
    );
}