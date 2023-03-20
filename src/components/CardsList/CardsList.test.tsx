import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardsList from './CardsList';

describe('CardsList', () => {
  it('Renders cards list', () => {
    render(<CardsList />);
    expect(screen.getAllByRole('heading', { level: 3 }));
  });
});
