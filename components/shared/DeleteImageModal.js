import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { SmallButton } from '../elements';
import { DeleteIcon } from '../../src/icons/Icons';
import { baseUrl } from '../../config/base';

const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

const DeleteImageModal = (props) => {
  const { handleEditPhotos, id, imgUrl, handleGet, currentUserToken, folder } = props;
  const imgName = imgUrl.replace(`${baseUrl}uploads/${folder}/`, '');
    
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
  
  const onModalSubmit = (id, img, token) => {
    const fd = new FormData();
    handleEditPhotos(id, img, fd, token).then(()=> handleGet(id));
    closeModal();
  }
  
  return (
    <div>
      <DeleteIcon danger name='Видалити' onClick={openModal}/>
      <Modal
        appElement={document.getElementById('app')}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel='Delete Image Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Ви впевнені, що хочете видалити це фото?</h2>
        <ButtonWrapper>
          <SmallButton danger width='320px' name='Так' onClick={() => onModalSubmit(id, imgName, currentUserToken)} />
          <SmallButton width='320px' name='Ні' onClick={closeModal} />
        </ButtonWrapper>
      </Modal>
    </div>
  );
}

export default  DeleteImageModal;