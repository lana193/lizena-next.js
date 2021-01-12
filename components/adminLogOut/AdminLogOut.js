import styled from 'styled-components';

import { SmallButton } from '../elements';
import { P2 } from '../../src/theme/StyledElements';

const AdminContainer = styled.div`
    padding-top: 200px;
    height: 600px;
    width: 80%;
    margin: 0 auto;
`;

const AdminLogOut = ({ handleLogOutUser, selectedUser, setCurrentUserToken }) => {
    const handleLogOutClick = () => {
        handleLogOutUser(setCurrentUserToken);
    }

    return (
        <AdminContainer>
            <P2>Ви увійшли як адмін</P2>
            <div>
                <SmallButton onClick={handleLogOutClick} name='Bийти' />
            </div>
        </AdminContainer>
    )
}

export default AdminLogOut;