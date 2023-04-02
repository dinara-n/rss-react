import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import SiteContainer from './SiteContainer';
import AboutPage from '../../pages/AboutPage/AboutPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

describe('SiteContainer', () => {
  it('renders itself', () => {
    render(
      <SiteContainer>
        <AboutPage />
      </SiteContainer>
    );
    expect(screen.getByTestId('SiteContainer')).toBeInTheDocument();
  });
  it('renders the About page', () => {
    render(
      <SiteContainer>
        <AboutPage />
      </SiteContainer>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about/i);
  });
  it('renders the Not Found page', () => {
    render(
      <SiteContainer>
        <NotFoundPage />
      </SiteContainer>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/404/i);
  });
});
