import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import './index.css';
ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(BrowserRouter, null,
            React.createElement(App, null)))));
