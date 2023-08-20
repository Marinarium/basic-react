import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef(({label, id, ...props}) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input className={styles.input} id={id} {...props}/>
    </>
  );
});

export default Input;