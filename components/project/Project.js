import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import ProjectGallery from './ProjectGallery';
import DeleteProjectModal from './DeleteProjectModal';
import UpdateProjectModal from './UpdateProjectModal';;
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { H3, P2 } from '../../src/theme/StyledElements'

const ProjectWrapper = styled.div`
    padding: 10% 3%;

    @media only screen and (max-width: 767.98px) {
        grid-template-columns: 1fr;
        padding: 6em 0;
        grid-gap: 20px 0;
        padding-top: 20%;
        padding-bottom: 10%;
    }
`;

const Project = (props) => {
    const { handleGetProject, selectedProject, handleDeleteProject, handleUpdateProject } = props;
    
    const router = useRouter();
    const projectId = router.query.project_id;

    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        projectId && handleGetProject(projectId);
    }, [handleGetProject, projectId])

    return (
        <ProjectWrapper>
            {selectedProject &&
                <>
                    <div className='project-desc'>
                        <H3>{selectedProject.project_name}</H3>
                        <P2>{selectedProject.description}</P2>
                    </div>
                    <H3>Галерея</H3>
                    <div className=''>
                        <ProjectGallery photos={selectedProject.photos} />
                    </div>
                    {currentUserToken &&
                        <div>
                            <UpdateProjectModal
                                handleUpdateProject={handleUpdateProject}
                                projectId={projectId}
                                selectedProject={selectedProject}
                                handleGetProject={handleGetProject}
                                currentUserToken={currentUserToken}
                            />
                            <DeleteProjectModal 
                                handleDeleteProject={handleDeleteProject} 
                                projectId={projectId} 
                                currentUserToken={currentUserToken}
                            />
                        </div>
                    }
                </>
            }
        </ProjectWrapper>
    )
}

export default Project;