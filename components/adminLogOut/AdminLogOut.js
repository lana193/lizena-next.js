import styled from 'styled-components';

import { SmallButton } from '../elements';
import { BodyContainer, P2 } from '../../src/theme/StyledElements';

const AdminContainer = styled.div`
    padding: 5em 0;
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 767.98px) {
        padding: 2em 0;
    }
`;

const AdminLogOut = ({ handleLogOutUser, selectedUser, setCurrentUserToken }) => {
    const handleLogOutClick = () => {
        handleLogOutUser(setCurrentUserToken);
    }

    return (
        <BodyContainer>
            <AdminContainer>
                <P2>Ви увійшли як адмін</P2>
                <div>
                    <SmallButton onClick={handleLogOutClick} name='Bийти' />
                </div>
            </AdminContainer>
        </BodyContainer>
    )
}

export default AdminLogOut;