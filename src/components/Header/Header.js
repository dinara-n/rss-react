import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';
function Header() {
    const location = useLocation();
    const pathname = location.pathname ?? '/';
    let currentPage = 'Catalog';
    switch (pathname) {
        case '/':
            currentPage = 'Catalog';
            break;
        case '/form':
            currentPage = 'Form';
            break;
        case '/about':
            currentPage = 'About us';
            break;
        default:
            currentPage = '404';
            break;
    }
    return (React.createElement("header", { className: styles.header },
        React.createElement("div", { className: styles.container },
            React.createElement("span", { className: styles.page }, currentPage),
            React.createElement(HeaderNavigation, null))));
}
export default Header;
