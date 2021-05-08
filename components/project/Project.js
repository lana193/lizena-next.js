import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';

import Gallery from '../shared/Gallery';
import AddImageModal from '../shared/AddImageModal';
import DeleteProjectModal from './DeleteProjectModal';
import UpdateProjectModal from './UpdateProjectModal';;
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { BodyContainer, H3, P3 } from '../../src/theme/StyledElements'

const ProjectWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 0 1em 1em 1em;

    @media only screen and (max-width: 767.98px) {
        width: 100%;
    }

    .modal-wrapper {
        width: 100%;
        margin: 0 auto;
        button {
            width: 230px;
        }
        text-align: center;
    }
`;

const Project = (props) => {
    const { handleGetProject, selectedProject, handleDeleteProject, handleUpdateProject, handleEditProjectPhotos, projectData } = props;
    const { description, photos } = selectedProject;
    
    const router = useRouter();
    const projectId = router.query.project_id;

    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        projectId && handleGetProject(projectId);
    }, [handleGetProject, projectId])
    
    const shortDesc = projectData.description ? projectData.description.substr(0, 160) : "Проєкт будвельно-ремонтної компанії Лізена";

    return (
        <BodyContainer>
            <ProjectWrapper>
                <Head>
                    {/* Primary */}
                    <title>{`Лізена проєкти | ${projectData.project_name}`}</title>
                    <meta name="title" content={`Лізена роботи | ${projectData.project_name}`}/>
                    <meta name="description" content={shortDesc}/>

                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={`http://lizena.com.ua/project/${projectData._id}`}/>
                    <meta property="og:title" content={`Лізена роботи | ${projectData.project_name}`}/>
                    <meta property="og:description" content={shortDesc}/>
                    <meta property="og:image" content={projectData.main_image}/>
                </Head>
                {selectedProject &&
                    <>
                        <div className='project-desc'>
                        <H3>Опис котеджу</H3>
                            { description && description.split("\n").map((paragraph, index) => {
                                return (
                                <P3 key={index}>{paragraph}</P3>
                                )})
                            }
                        </div>
                        <H3>Галерея</H3>
                        { currentUserToken && 
                            <div className='modal-wrapper'> 
                                <AddImageModal 
                                    id={projectId}
                                    handleUpdate={handleUpdateProject}
                                    handleGet={handleGetProject}
                                    currentUserToken={currentUserToken}
                                /> 
                            </div>
                        }
                        <div className='gallery-wrapper'>
                            <Gallery 
                                photos={photos} 
                                id={projectId}
                                currentUserToken={currentUserToken} 
                                handleGet={handleGetProject}
                                handleEditPhotos={handleEditProjectPhotos}
                                folder='projects'
                            />
                        </div>
                        {currentUserToken &&
                            <div className='modal-wrapper'>
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
        </BodyContainer>  
    )
}

export default Project;