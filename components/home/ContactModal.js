import React, { useState } from 'react';
import Modal from 'react-modal';
import { isMobile } from 'react-device-detect';

import ContactForm from '../contact-us/ContactForm';
import { SmallButton, BigButton} from '../elements';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '95%',
    maxHeight: '70vh',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: `${isMobile &&  'scroll'}`,
    zIndex: 2
  }
};

const ContactModal = (props) => {
  const { handleSendMessage } = props;
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
    handleSendMessage(values);
  }

  return (
    <div>
      <BigButton name={props.openButtonName} square={props.square} onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel='Send Message Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Замовити консультацію</h2>
        <ContactForm onSubmit={handleSubmit} closeContactModal={closeModal}/>
        <SmallButton danger name='Скасувати' width='100%' onClick={closeModal} />
      </Modal>
    </div>
  );
}
export default ContactModal;