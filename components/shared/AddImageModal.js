import { useState } from 'react';
import Modal from 'react-modal';

import AddImageForm from './AddImageForm';
import { SmallButton } from '../elements';
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: 'auto',
    // overflow: 'scroll'
  }
};

const AddImageModal = (props) => {
  const { id, handleGet, currentUserToken, handleUpdate } = props;
  const [ modalIsOpen, setIsOpen ] = useState(false);
  
  const openModal= () => {
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

  const handleSubmit = (values) => {
    if(values.photos) {
      const fd = new FormData();
      values.photos.forEach(photo => {
        fd.append('photos', photo);
      })
      handleUpdate(id, fd, currentUserToken).then(() => handleGet(id));
    } 
    else {
      console.log('Виникла помилка з додованням зображень')
    } 
  closeModal();
}

return (
  <div>
    <SmallButton name='Додати фото' width='180px' onClick={openModal}/>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel='Add Image Modal'
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Додати нове/нові фото до галереї</h2>
      <AddImageForm onSubmit={handleSubmit} />
      <SmallButton danger name='Скасувати' onClick={closeModal}/>
    </Modal>
  </div>
  );
}

export default AddImageModal;