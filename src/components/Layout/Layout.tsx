import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import SiteContainer from '../SiteContainer/SiteContainer';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <SiteContainer>
          <Outlet />
        </SiteContainer>
      </main>
    </>
  );
}

export default Layout;
