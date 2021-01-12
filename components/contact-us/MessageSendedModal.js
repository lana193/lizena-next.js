import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { SmallButton } from './../elements';

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

const MessageSendedModal = (props) => {
    const { showModal, closeContactModal } = props;
    const [modalIsOpen, setIsOpen] = useState(showModal);

    let subtitle;
    const afterOpenModal = () => {
      subtitle.style.padding = '20px';
      subtitle.style.fontFamily = 'Raleway, sans-serif';
      subtitle.style.textAlign = 'center';
    }
    
    const closeModal = () => {
        console.log(555, closeContactModal )
        if(closeContactModal)
        {closeContactModal()};
        setIsOpen(false);
    }
    
    return (
        <div>
          <Modal
            // appElement={document.getElementById('app')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel='Message sended modal'
          >
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Дякуємо, що написали нам. Ми відповімо на Ваше повідомлення найближчим часом</h2>
            <ButtonWrapper>
              <SmallButton width='320px' name='Гаразд' onClick={closeModal}/>
            </ButtonWrapper>
          </Modal>
        </div>
  );
}

export default  MessageSendedModal;