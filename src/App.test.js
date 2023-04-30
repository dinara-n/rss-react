import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
describe('App', () => {
    it('renders itself', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(App, null)), { wrapper: BrowserRouter });
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});
