import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleLogInUser, 
    selectAuth
 } from '../../store/domains/auth';

 import AdminLogIn from './AdminLogIn';

 const mapStateToProps = state => ({
    selectedUser: selectAuth(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleLogInUser
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(AdminLogIn);