import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
export default function render(url, options) {
    const stream = renderToPipeableStream(React.createElement(Provider, { store: store },
        React.createElement(StaticRouter, { location: url },
            React.createElement(App, null))), options);
    return stream;
}
