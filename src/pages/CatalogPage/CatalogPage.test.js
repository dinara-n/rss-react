import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CatalogPage from './CatalogPage';
import store from '../../store/store';
describe('CatalogPage', () => {
    it('renders itself', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(CatalogPage, null)));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/catalog/i);
    });
    it('renders the search bar', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(CatalogPage, null)));
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });
});
