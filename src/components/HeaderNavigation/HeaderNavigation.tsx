import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <nav className={styles.navigation}>
      <NavLink className={({ isActive }) => (isActive ? styles.link__active : styles.link)} to="/">
        Catalog
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.link__active : styles.link)}
        to="/about"
      >
        About us
      </NavLink>
    </nav>
  );
}

export default HeaderNavigation;
