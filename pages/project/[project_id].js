import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { baseUrl } from '../../config/base';

import { 
    handleGetProject,
    selectProject,
    handleDeleteProject,
    selectDeletedProject,
    handleUpdateProject,
    selectUpdatedProject,
    handleEditProjectPhotos
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
    handleUpdateProject,
    handleEditProjectPhotos
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Project);

 export async function getServerSideProps(cxt) {
    const res = await fetch(`${baseUrl}lizena/project/${cxt.query.project_id}`);
    const data = await res.json();

    return {
        props: {
            projectData: data
        }
    };
}
