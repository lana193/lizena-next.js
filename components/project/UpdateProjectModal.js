import { useState } from 'react';
import Modal from 'react-modal';

import UpdateProjectForm from './UpdateProjectForm';
import { SmallButton } from '../elements';
import { modalStyles } from '../../src/theme/StyledElements';

const UpdateProjectModal = (props) => {
  const { handleUpdateProject, projectId, selectedProject, handleGetProject, currentUserToken } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
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
    if (values.photos || values.main_image) {
      const fd = new FormData();
      fd.append('project_name', values.project_name);
      fd.append('description', values.description);

      if (values.photos) {
        values.photos.forEach(photo => {
          fd.append('photos', photo);
        })
      }

      if (values.main_image) {
        values.main_image.forEach(photo => {
          fd.append('main_image', photo);
        })
      }
      handleUpdateProject(projectId, fd, currentUserToken).then(handleGetProject(projectId));
    }

    else {
      handleUpdateProject(projectId, values, currentUserToken).then(() => handleGetProject(projectId));
    }
    
    closeModal();
  }

  const initialValues = {
    project_name: selectedProject.project_name,
    description: selectedProject.description
  }

  return (
    <div>
      <SmallButton name='Редагувати роботу' onClick={openModal} />
      <Modal
        appElement={document.getElementById('app')}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        ariaHideApp={false}
        contentLabel='Update Project Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Редагувати роботу</h2>
        <UpdateProjectForm onSubmit={handleSubmit} selectedProject={selectedProject} initialValues={initialValues} />
        <SmallButton danger name='Скасувати' width='100%' onClick={closeModal} />
      </Modal>
    </div>
  );
}
export default UpdateProjectModal;