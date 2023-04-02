import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders itself', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
