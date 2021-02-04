import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
    const { handleGetProject, selectedProject, handleDeleteProject, handleUpdateProject, projectData } = props;
    const { project_name, description, main_image, _id } = projectData;
    
    const router = useRouter();
    const projectId = router.query.project_id;

    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        projectId && handleGetProject(projectId);
    }, [handleGetProject, projectId])
    
    const shortDesc = description ? description.substr(0, 160) : "Проєкт будвельно-ремонтної компанії Лізена";

    return (
        <ProjectWrapper>
            <Head>
                {/* Primary */}
                <title>{`Лізена проєкти | ${project_name}`}</title>
                <meta name="title" content={`Лізена проєкти | ${project_name}`}/>
                <meta name="description" content={shortDesc}/>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`http://lizena.com.ua/project/${_id}`}/>
                <meta property="og:title" content={`Лізена проєкти | ${project_name}`}/>
                <meta property="og:description" content={shortDesc}/>
                <meta property="og:image" content={main_image}/>
            </Head>
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