import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';
function HeaderNavigation() {
    return (React.createElement("nav", { className: styles.navigation },
        React.createElement(NavLink, { className: ({ isActive }) => (isActive ? styles.link__active : styles.link), to: "/" }, "Catalog"),
        React.createElement(NavLink, { className: ({ isActive }) => (isActive ? styles.link__active : styles.link), to: "/form" }, "Form"),
        React.createElement(NavLink, { className: ({ isActive }) => (isActive ? styles.link__active : styles.link), to: "/about" }, "About us")));
}
export default HeaderNavigation;
