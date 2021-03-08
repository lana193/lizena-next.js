import React, { useState } from 'react';
import Modal from 'react-modal';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import UpdateObjectForm from './UpdateObjectForm';
import { SmallButton } from '../elements';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const UpdateObjectModal = (props) => {
  const { handleUpdateObject, objectId, selectedObject, handleGetObject, currentUserToken } = props;
  console.log('OBJECT_WORKS', selectedObject.works)
  const [ tags, setTags ] = useState([]);
  // {selectedObject.works && setTags(selectedObject.works)};
  const [ modalIsOpen, setIsOpen ] = useState(false);
  
  const openModal= () => {
    if(selectedObject.works) {
      setTags(selectedObject.works);
    }
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
    setTags(selectedObject.works);
  }

  const handleSubmit = (values) => {
    console.log('VALUES', values)
    const { photos, main_image, object_name, subtitle, description, metres, price, rooms, bathrooms, conclusion } = values;

    const fd = new FormData();
    object_name && fd.append('object_name', object_name);
    subtitle && fd.append('subtitle', subtitle);
    description && fd.append('description', description);
    metres && fd.append('metres', metres);
    rooms && fd.append('rooms', rooms);
    bathrooms && fd.append('bathrooms', bathrooms);
    price && fd.append('price', price);
    conclusion && fd.append('conclusion', conclusion);
    if(tags) {
      console.log('TAGS', tags );
      tags.forEach(work => {
        fd.append('works', work);
      })
    }
    if(main_image) {
      main_image.forEach(photo => {
        fd.append('main_image', photo);
      })  
    }
    if(photos) {
      photos.forEach(photo => {
        fd.append('photos', photo);
      })
    } 

    handleUpdateObject(objectId, fd, currentUserToken).then(() => handleGetObject(objectId));
    closeModal();
  }

  const initialvalues = {
    object_name: selectedObject.object_name,
    description: selectedObject.description,
    subtitle: selectedObject.subtitle,
    metres: selectedObject.metres,
    rooms: selectedObject.rooms,
    bathrooms: selectedObject.bathrooms,
    price: selectedObject.price,
    conclusion: selectedObject.conclusion
    // work: '23'
  }

  return (
    <div>
      <SmallButton name='Редагувати роботу' onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel='Update Object Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Редагувати об'єкт</h2>
        {/* <ButtonWrapper> */}
        <UpdateObjectForm 
          onSubmit={handleSubmit} 
          selectedObject={selectedObject} 
          initialValues={initialvalues}
          tags={tags}
          setTags={setTags}
        />
        <SmallButton danger name='Скасувати' width='50%' margin='5px 25% 5px 25%' onClick={closeModal}/>
        {/* </ButtonWrapper> */}
      </Modal>
    </div>
  );
}

export default UpdateObjectModal;