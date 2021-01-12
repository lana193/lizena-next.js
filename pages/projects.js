import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetProjects,
    handleCreateProject,
    selectProjects
 } from '../store/domains/projects';

 import Projects from '../components/projects/Projects';

 const mapStateToProps = state => ({
     selectedProjects: selectProjects(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetProjects,
    handleCreateProject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Projects);