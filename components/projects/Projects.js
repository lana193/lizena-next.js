import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import AddProjectModal from './AddProjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';

const ProjectsContainer = styled.div`
    padding-top: 60px;
    width: 100%;
    @media only screen and (max-width: 767.98px) {
        padding-top: 60px;
    }
    .projects-wrapper {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px 20px;
        padding: 2em 15em 10em 15em;
    
        @media only screen and (max-width: 767.98px) {
            grid-template-columns: 1fr;
            padding: 2em 0;
            grid-gap: 20px 0;
        }
    }
`;

const Projects = ({
    handleGetProjects,
    handleCreateProject,
    selectedProjects
}) => {
    const currentUserToken = useCurrentUserToken();

    useEffect(() => {
        !selectedProjects.length && handleGetProjects();
    }, [handleGetProjects, selectedProjects.length])

    return (
        <ProjectsContainer>
            <Head>
                <title>Лізена | Наші роботи</title>
                <meta name='description' content='Лізена - наші роботи | Ремонтно-будівельні роботи, Львів' />
            </Head>
            <div>
                {currentUserToken && 
                    <AddProjectModal 
                        handleCreateProject={handleCreateProject} 
                        handleGetProjects={handleGetProjects} 
                        currentUserToken={currentUserToken} 
                    />
                }

            </div>

            <div className='projects-wrapper'>
                {selectedProjects.map((item, i) => (
                    <ProjectCard key={i} {...item} />
                )
                )}
            </div>
        </ProjectsContainer>
    )
}

export default Projects;