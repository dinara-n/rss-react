import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import CardsList from './CardsList';
import { CardDataType, CharacterGender, CharacterSpecies } from 'types/types';
import biggsDardlighter from './BiggsHS-ANH.webp';
import store from '../../store/store';

const cards = [
  {
    name: 'Biggs Darklighter',
    birth_year: '2022-10-24',
    species: 'human' as CharacterSpecies,
    gender: 'male' as CharacterGender,
    image: biggsDardlighter,
  },
];

const emptyCards: CardDataType | [] = [];

describe('CardsList', () => {
  it('Renders cards list', () => {
    render(
      <Provider store={store}>
        <CardsList cards={cards} />
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/Biggs Darklighter/i);
  });
  it('renders a message when no cards are passed', () => {
    render(
      <Provider store={store}>
        <CardsList cards={emptyCards} />
      </Provider>
    );
    expect(screen.getByText(/No cards to display/i)).toBeInTheDocument();
  });
});
