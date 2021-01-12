import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const ProjectCardContainer = styled.div`
  width: 320px;
  height: 300px;
  background-image: url('${props => props.imageUrl}');
  background-size: 100% 100%;
  border-radius: 2%;
  display: flex;
  align-items: flex-end;
  box-shadow: 10px -3px rgb(60, 179, 113);
  cursor: pointer;

  .project-name-wrapper {
    padding: 10px 20px;
    width: 320px;
    cursor: pointer;

    
    .project-name {
      color: white;
      text-transform: uppercase;
    }
  }

  .project-link-wrapper:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ProjectCard = (props) => {
  return(
    <Link href={`/project/${props._id}`}>
      <ProjectCardContainer imageUrl={props.main_image}>
        <div className='project-name-wrapper'>
          <p className='project-name'>{props.project_name}</p>
        </div>
      </ProjectCardContainer>
    </Link>
  );
}

export default ProjectCard;

