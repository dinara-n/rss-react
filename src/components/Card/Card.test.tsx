import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from './Card';
import lukeSkywalker from './Luke_skywalker.jpg';
import { CharacterGender, CharacterSpecies } from 'types/types';

const cardData = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  species: 'human' as CharacterSpecies,
  gender: 'male' as CharacterGender,
  url: 'https://swapi.dev/api/people/1/',
  image: lukeSkywalker,
};

describe('Card', () => {
  it('Renders card', () => {
    render(<Card cardData={cardData} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/Luke Skywalker/i);
    expect(screen.getAllByRole('img'));
    expect(screen.getByText('Height:')).toBeInTheDocument();
    expect(screen.getByText('Mass:')).toBeInTheDocument();
    expect(screen.getByText('Date of birth:')).toBeInTheDocument();
    expect(screen.getByText('Species:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });
});
