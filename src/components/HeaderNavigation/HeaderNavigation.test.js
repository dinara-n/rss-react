import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderNavigation from './HeaderNavigation';
import { BrowserRouter } from 'react-router-dom';
describe('HeaderNavigation', () => {
    it('renders itself', () => {
        render(React.createElement(HeaderNavigation, null), { wrapper: BrowserRouter });
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    it('renders the links', () => {
        render(React.createElement(HeaderNavigation, null), { wrapper: BrowserRouter });
        expect(screen.getByText('Catalog')).toHaveAttribute('href', '/');
        expect(screen.getByText('About us')).toHaveAttribute('href', '/about');
        expect(screen.getByText('Form')).toHaveAttribute('href', '/form');
    });
});
