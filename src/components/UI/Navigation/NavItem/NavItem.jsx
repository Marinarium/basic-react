import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../NavItem/NavItem.module.css';

const NavItem = ({path, children}) => {
  const appearances = {
    [styles["link--active"]]: useLocation().pathname === path,
  };

  return (
    <li><Link to={path} className={classNames(styles.link, appearances)}>{children}</Link></li>
  );
};

export default NavItem;