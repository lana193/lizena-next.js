import { useState } from 'react';
import Modal from 'react-modal';

import EditImageForm from './EditImageForm';
import { EditIcon } from '../../src/icons/Icons';
import { SmallButton } from '../elements/SmallButton';
import { baseUrl } from '../../config/base';
  
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: 'auto'
  }
};

const EditImageModal = (props) => {
  const { handleEditPhotos, id, imgUrl, handleGet, currentUserToken, folder } = props;
  const imgName = imgUrl.replace(`${baseUrl}uploads/${folder}/`, '');
  const [ modalIsOpen, setIsOpen ] = useState(false);
  
  const openModal= () => {
    setIsOpen(true);
    console.log("URL", imgUrl);
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
        handleEditPhotos(id, imgName, fd, currentUserToken).then(() => handleGet(id));
      } 
      else {
        console.log('Виникла помилка з додованням зображення')
      } 
  closeModal();
}

return (
  <div>
    <EditIcon onClick={openModal}/>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel='Edit Image Modal'
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Редагувати фото</h2>
      <EditImageForm onSubmit={handleSubmit} />
      <SmallButton danger name='Скасувати' onClick={closeModal}/>
    </Modal>
  </div>
  );
}

export default EditImageModal;