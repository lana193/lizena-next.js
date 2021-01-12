import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleSendMessage, 
    selectContacts
 } from '../store/domains/contacts';

 import Contacts from '../components/contacts/Contacts';

 const mapStateToProps = state => ({
     selectedContacts: selectContacts(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleSendMessage
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Contacts);