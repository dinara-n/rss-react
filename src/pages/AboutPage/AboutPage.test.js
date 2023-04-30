import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';
describe('AboutPage', () => {
    it('renders itself', () => {
        render(React.createElement(AboutPage, null));
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about/i);
    });
});
