import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import AddCardForm from './AddCardForm';
import { CharacterGender, CharacterSpecies } from 'types/types';
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

const setCards = vi.fn();

describe('AddCardForm', () => {
  it('renders itself', () => {
    render(<AddCardForm cards={cards} setCards={setCards} />);
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  });
});
