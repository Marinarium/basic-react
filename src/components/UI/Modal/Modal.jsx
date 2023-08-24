import React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = ({ children, active, setActive }) => {
  const appearances = {
    [styles.active]: active,
  };

  return (
    <div
      onClick={() => setActive(false)}
      className={classNames(styles.modal, appearances)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.content}
      >
        <Button
          small
          onClick={() => setActive(false)}
          addClass={styles["modal-button"]}
        >
          &#10006;
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;