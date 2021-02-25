import React, { useState } from 'react';
import Modal from 'react-modal';

import UpdateObjectForm from './UpdateObjectForm';
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
    height: '600px',
    overflow: 'scroll'
  }
};

const UpdateObjectModal = (props) => {
  const { handleUpdateObject, objectId, selectedObject, handleGetObject, currentUserToken } = props;
  const [ modalIsOpen, setIsOpen ] = useState(false);
  
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
    
    if(!values.photos && !values.main_image) {
      handleUpdateObject(objectId, values, currentUserToken).then(() => handleGetObject(objectId));
    }

    else {
      const fd = new FormData();
      fd.append('object_name', values.object_name);
      fd.append('subtitle', values.subtitle);
      fd.append('description', values.description);
      fd.append('metres', values.metres);
      fd.append('rooms', values.rooms);
      fd.append('bathrooms', values.bathrooms);
      fd.append('price', values.price);

      if(values.main_image) {
        values.main_image.forEach(photo => {
          fd.append('main_image', photo);
        })  
      }
      if(values.photos) {
        values.photos.forEach(photo => {
          fd.append('photos', photo);
        })
      } 

      handleUpdateObject(objectId, fd, currentUserToken).then(() => handleGetObject(objectId));//handleGetObject(objectId));
    }
    closeModal();
}

const initialvalues = {
      object_name: selectedObject.object_name,
      description: selectedObject.description,
      subtitle: selectedObject.subtitle,
      metres: selectedObject.metres,
      rooms: selectedObject.rooms,
      bathrooms: selectedObject.bathrooms,
      price: selectedObject.price
  }

return (
  <div>
    <SmallButton name='Редагувати роботу' onClick={openModal}/>
    <Modal
      // appElement={document.getElementById('app')}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel='Update Object Modal'
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Редагувати об'єкт</h2>
      <UpdateObjectForm onSubmit={handleSubmit} selectedObject={selectedObject} initialValues={initialvalues}/>
      <SmallButton danger name='Скасувати' onClick={closeModal}/>
    </Modal>
  </div>
  );
}

export default UpdateObjectModal;