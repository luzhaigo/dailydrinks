import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';


const Modal = ({ closeModal, children }) => {
  return (
    ReactDOM.createPortal(
      <div className={styles.outside} onClick={closeModal}>
        {children}
      </div>, 
      document.getElementById('modal-root'))
  );
};

export default Modal;