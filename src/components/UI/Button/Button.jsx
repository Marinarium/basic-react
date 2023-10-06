import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css'

const Button = ({children, addClass, small, accent, danger, ...props}) => {
  const appearances = {
    [styles["button--small"]]: small,
    [styles["button--accent"]]: accent,
    [styles["button--danger"]]: danger,
  };
  return (
    <button {...props} className={classNames(styles.button, addClass, appearances)}>{children}</button>
  );
};

export default Button;