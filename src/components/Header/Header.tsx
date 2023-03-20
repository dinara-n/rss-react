import React from 'react';
import withRouter, { WithRouterProps } from '../../hocs/withRouter';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.css';

function Header(props: WithRouterProps) {
  const { location } = props;
  const pathname = location.pathname ?? '/';
  let currentPage = 'Catalog';
  switch (pathname) {
    case '/':
      currentPage = 'Catalog';
      break;
    case '/about':
      currentPage = 'About us';
      break;
    default:
      currentPage = '404';
      break;
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.page}>{currentPage}</span>
        <HeaderNavigation />
      </div>
    </header>
  );
}

export default withRouter(Header);
