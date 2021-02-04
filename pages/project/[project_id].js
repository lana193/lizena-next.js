import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetProject,
    selectProject,
    handleDeleteProject,
    selectDeletedProject,
    handleUpdateProject,
    selectUpdatedProject
 } from '../../store/domains/projects';

 import Project from '../../components/project/Project';

 const mapStateToProps = state => ({
     selectedProject: selectProject(state),
     deletedProject: selectDeletedProject(state),
     updatedProject: selectUpdatedProject(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetProject,
    handleDeleteProject,
    handleUpdateProject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Project);

 export async function getServerSideProps(cxt) {
    const res = await fetch(`https://lizena.com.ua/lizena/project/${cxt.query.project_id}`);
    const data = await res.json();

    return {
        props: {
            projectData: data
        }
    };
}
