import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddCardForm from './AddCardForm';
import store from '../../store/store';
describe('AddCardForm', () => {
    it('renders itself', () => {
        render(React.createElement(Provider, { store: store },
            React.createElement(AddCardForm, null)));
        expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    });
});
