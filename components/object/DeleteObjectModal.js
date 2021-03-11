import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { SmallButton } from '../elements';
import { modalStyles } from '../../src/theme/StyledElements';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const DeleteObjectModal = (props) => {
    const { handleDeleteObject, objectId, currentUserToken } = props;
    const router = useRouter();
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
    
    const onModalSubmit = async (objectId) => {
        const deletedProject = await handleDeleteObject(objectId, currentUserToken);
        closeModal();
        router.push('/for-sale');
    }
    
    return (
      <div>
        <SmallButton danger width='100%' name='Видалити' onClick={openModal}/>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalStyles}
          ariaHideApp={false}
          contentLabel='Delete Object Modal'
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Ви впевнені, що хочете видалити об'єкт?</h2>
          <ButtonWrapper>
            <SmallButton danger name='Так' width='48%' onClick={()=> onModalSubmit(objectId)}/>
            <SmallButton name='Ні' width='48%' onClick={closeModal}/>
          </ButtonWrapper>
        </Modal>
      </div>
    );
}

export default  DeleteObjectModal;