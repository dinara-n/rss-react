import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import { cardsData } from '../../assets/data';

describe('Card', () => {
  it('Renders card', () => {
    render(<Card cardData={cardsData[0]} />);
    expect(screen.getAllByRole('heading', { level: 3 }));
    expect(screen.getAllByRole('img'));
    expect(screen.getAllByText('Height:'));
    expect(screen.getAllByText('Mass:'));
    expect(screen.getAllByText('Date of birth:'));
    expect(screen.getAllByText('Gender:'));
  });
});
