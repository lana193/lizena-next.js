import { useState } from 'react';
import Modal from 'react-modal';
import { isMobile } from 'react-device-detect';

import styled from 'styled-components';

import AddObjectForm from './AddObjectForm';
import { SmallButton } from '../elements';
// import useCurrentUserToken from '../../src/utils/useCurrentUserToken';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: `${isMobile ? '95%' : '60%'}`,
    height: '600px',
    overflow: 'scroll'
  }
};

const AddObjectModal = (props) => {
  const { handleCreateObject, handleGetObjects, currentUserToken } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal= () => {
    setIsOpen(true);
  }
 
  let subtitle;
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.padding = '10px';
    subtitle.style.fontFamily = 'Raleway, sans-serif';
    subtitle.style.fontSize = '20px';
    subtitle.style.textAlign = 'center';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (values) => {
    const fd = new FormData();
    fd.append('object_name', values.object_name);
    fd.append('description', values.description);
    fd.append('subtitle', values.subtitle);
    fd.append('metres', values.metres);
    fd.append('rooms', values.rooms);
    fd.append('bathrooms', values.bathrooms);
    fd.append('price', values.price);
  
    
    values.photos.forEach(photo => {
      (fd.append('photos', photo));
    })

    if(values.main_image) {
      values.main_image.forEach(photo => {
        fd.append('main_image', photo);
      })  
    }
    
    handleCreateObject(fd, currentUserToken).then(() => handleGetObjects());
    closeModal();
}

return (
  <ModalWrapper>
    <SmallButton name="Додати новий об'єкт" onClick={openModal} width='300px'/>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Object Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Додати новий об'єкт</h2>
        <AddObjectForm onSubmit={handleSubmit}/>
        <SmallButton danger name='Скасувати' width='100%' onClick={closeModal}/>
      </Modal>
    </ModalWrapper>
  );
}

export default  AddObjectModal;