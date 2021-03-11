import AdminForm from './AdminForm';
import { BodyContainer } from '../../src/theme/StyledElements';

const AdminLogIn = (props) => {
  const { handleLogInUser, selectedUser, setCurrentUserToken } = props;

  const handleSubmit = (values) => {
    handleLogInUser(values, setCurrentUserToken);
  }

  return (
    <BodyContainer>
      <AdminForm onSubmit={handleSubmit} selectedUser={selectedUser} />
    </BodyContainer>
  )
}

export default AdminLogIn;