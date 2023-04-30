import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import SiteContainer from '../SiteContainer/SiteContainer';
function Layout() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("main", null,
            React.createElement(SiteContainer, null,
                React.createElement(Outlet, null)))));
}
export default Layout;
