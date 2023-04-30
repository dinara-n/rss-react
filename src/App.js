import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage/AboutPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FormPage from './pages/FormPage/FormPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Layout, null) },
            React.createElement(Route, { index: true, element: React.createElement(CatalogPage, null) }),
            React.createElement(Route, { path: "about", element: React.createElement(AboutPage, null) }),
            React.createElement(Route, { path: "form", element: React.createElement(FormPage, null) }),
            React.createElement(Route, { path: "404", element: React.createElement(NotFoundPage, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(Navigate, { to: "404" }) }))));
}
export default App;
