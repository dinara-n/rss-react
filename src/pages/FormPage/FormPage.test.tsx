import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import FormPage from './FormPage';
import store from '../../store/store';

describe('FormPage', () => {
  it('renders the cards list', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByText(/No cards to display/i)).toBeInTheDocument();
  });
});
