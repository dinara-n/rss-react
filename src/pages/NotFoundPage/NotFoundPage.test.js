import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
describe('NotFoundPage', () => {
    it('renders itself', () => {
        render(React.createElement(NotFoundPage, null));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/404/);
    });
});
