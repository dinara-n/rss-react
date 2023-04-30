import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardsList from './CardsList';
import biggsDardlighter from './BiggsHS-ANH.webp';
import store from '../../store/store';
const cards = [
    {
        name: 'Biggs Darklighter',
        birth_year: '2022-10-24',
        species: 'human',
        gender: 'male',
        image: biggsDardlighter,
    },
];
const emptyCards = [];
describe('CardsList', () => {
    it('Renders cards list', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(CardsList, { cards: cards })));
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/Biggs Darklighter/i);
    });
    it('renders a message when no cards are passed', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(CardsList, { cards: emptyCards })));
        expect(screen.getByText(/No cards to display/i)).toBeInTheDocument();
    });
});
