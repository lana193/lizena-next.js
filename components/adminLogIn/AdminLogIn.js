import AdminForm from './AdminForm';

const AdminLogIn = (props) => {
  const { handleLogInUser, selectedUser, setCurrentUserToken } = props;

  const handleSubmit = (values) => {
    handleLogInUser(values, setCurrentUserToken);
  }

  return (
    <AdminForm onSubmit={handleSubmit} selectedUser={selectedUser} />
  )
}

export default AdminLogIn;