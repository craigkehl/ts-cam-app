import React from 'react';
import classes from './Modal.module.css';

interface ModalProps {
  className?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  return <div className={`${classes.modal} ${props.className}`}>{props.children}</div>;
};

export default Modal;
