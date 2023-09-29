import React from 'react';
import styles from '../Navigation/Navigation.module.css';
import NavItem from './NavItem/NavItem';
import { menu } from '../../../constants/menu';



const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {menu.map(item => <NavItem key={item.href} path={item.path}>{item.content}</NavItem>)}
      </ul>
    </nav>
  );
};

export default Navigation;