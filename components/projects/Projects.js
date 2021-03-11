import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import ProjectCard from './ProjectCard';
import AddProjectModal from './AddProjectModal';
import useCurrentUserToken from '../../src/utils/useCurrentUserToken';
import { BodyContainer } from '../../src/theme/StyledElements';

const ProjectsContainer = styled.div`
    width: 100%;

    .modal-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .projects-wrapper {
        display: grid;
        justify-content: center;
        justify-items: center;
        grid-template-columns: 320px 320px 320px;
        grid-gap: 20px 20px;
        padding: 1em 0;
    
        @media only screen and (max-width: 767.98px) {
            grid-template-columns: 1fr;
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
        <BodyContainer>
            <ProjectsContainer>
            <Head>
                <title>Лізена | Наші роботи</title>
                <meta name='description' content="Ремонтно-будівельні роботи, у м. Львів, ремонт квартир, будинків, шпаклювання та малярка, розведення води та електрики, реконструкція балкону, дерев'яні вироби" />
            </Head>
            <div className='modal-wrapper'>
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
        </BodyContainer>
    )
}

export default Projects;