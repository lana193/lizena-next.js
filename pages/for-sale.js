import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetObjects,
    handleCreateObject,
    selectObjects,
 } from '../store/domains/objects';

 import Objects from '../components/for-sale/Objects';
import { selectAuth } from '../store/domains/auth';

 const mapStateToProps = state => ({
     selectedObjects: selectObjects(state),
     selelectedUser: selectAuth(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetObjects,
    handleCreateObject,
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Objects);