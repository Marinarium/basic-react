import React from 'react';
import classNames from 'classnames';
import styles from '../Link/Link.module.css';

const Link = ({href, target="_self", children, className}) => {
  return (
    <a className={classNames(styles.link, className)} href={href} target={target}>{children}</a>
  );
};

export default Link;