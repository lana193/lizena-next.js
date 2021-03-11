import React, { useState } from 'react';
import Modal from 'react-modal';

import AddProjectForm from './AddProjectForm';
import { SmallButton } from '../elements';
import { modalStyles } from '../../src/theme/StyledElements';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // width: 100%;
`;
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px'
  }
};

const AddProjectModal = (props) => {
  const { handleCreateProject, handleGetProjects, currentUserToken } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const openModal= () => {
    setIsOpen(true);
  }
 
  let subtitle;
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.padding = '20px';
    subtitle.style.fontFamily = 'Raleway, sans-serif';
    subtitle.style.textAlign = 'center';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (values) => {
    const fd = new FormData();
    fd.append('project_name', values.project_name);
    fd.append('description', values.description);
    
    values.photos.forEach(photo => {
      fd.append('photos', photo);
    })

    if(values.main_image) {
      values.main_image.forEach(photo => {
        fd.append('main_image', photo);
      })  
    }
    
    handleCreateProject(fd, currentUserToken).then(() => handleGetProjects());;
    closeModal();
}

return (
  <ModalWrapper>
    <SmallButton name='Додати нову роботу' onClick={openModal} width='300px'/>
    <Modal
      appElement={document.getElementById('app')}
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel='Add Project Modal'
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Додати нову роботу</h2>
        <AddProjectForm onSubmit={handleSubmit}/>
        <SmallButton danger name='Скасувати' width='100%' onClick={closeModal}/>
      </Modal>
    </ModalWrapper>
  );
}

export default  AddProjectModal;