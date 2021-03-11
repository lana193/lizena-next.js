import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { SmallButton } from '../elements';
import { modalStyles } from '../../src/theme/StyledElements';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DeleteProjectModal = (props) => {
    const { handleDeleteProject, projectId, currentUserToken } = props;
    
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    }
    
    let subtitle;
    const afterOpenModal = () => {
      subtitle.style.padding = '20px';
      subtitle.style.fontFamily = 'Raleway, sans-serif';
      subtitle.style.textAlign = 'center';
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }
    
    const onModalSubmit = async(projectId) => {
        const isProjectDeleted = await handleDeleteProject(projectId, currentUserToken);
        closeModal();
        (window.location.replace('/projects'));
    }
    
    return (
        <div>
          <SmallButton danger name='Видалити роботу' width='100%' onClick={openModal}/>
          <Modal
            appElement={document.getElementById('app')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={modalStyles}
            ariaHideApp={false}
            contentLabel='Delete Project Modal'
          >
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Ви впевнені, що хочете видалити проєкт?</h2>
            <ButtonWrapper>
              <SmallButton danger width='48%' name='Так' onClick={()=> onModalSubmit(projectId)}/>
              <SmallButton width='48%' name='Ні' onClick={closeModal} />
            </ButtonWrapper>
          </Modal>
        </div>
  );
}

export default  DeleteProjectModal;