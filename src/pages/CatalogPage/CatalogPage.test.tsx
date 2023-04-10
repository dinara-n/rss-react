import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CatalogPage from './CatalogPage';

describe('CatalogPage', () => {
  it('renders itself', () => {
    render(<CatalogPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/catalog/i);
  });
  it('renders the search bar', () => {
    render(<CatalogPage />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
