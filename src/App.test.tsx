import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreTestProvider } from './store/store.test';

describe('App', () => {
  test('should be rendered', () => {
    render(
      <StoreTestProvider>
        <App />
      </StoreTestProvider>
    );
    const languageContextProvider = screen.getByText('Weather tracker');
    expect(languageContextProvider).toBeInTheDocument();
  });
});
