import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddCardForm from './AddCardForm';
import { CharacterGender, CharacterSpecies, FormPageState } from 'types/types';
import biggsDardlighter from './BiggsHS-ANH.webp';

const cards = [
  {
    name: 'Biggs Darklighter',
    birth_year: '2022-10-24',
    species: 'human' as CharacterSpecies,
    gender: 'male' as CharacterGender,
    image: biggsDardlighter,
  },
];

const setPageState = (newState: FormPageState) => {
  return { cards: newState };
};

describe('AddCardForm', () => {
  it('renders itself', () => {
    render(<AddCardForm cards={cards} setPageState={setPageState} />);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  });
});
