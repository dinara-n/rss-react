import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import FormPage from './FormPage';

describe('FormPage', () => {
  it('renders the cards list', () => {
    render(<FormPage />);
    expect(screen.getByText(/No cards to display/i)).toBeInTheDocument();
  });
});
