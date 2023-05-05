import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should be rendered', () => {
    render(<App />);
    const languageContextProvider = screen.getByText("Weather tracker");
    expect(languageContextProvider).toBeInTheDocument();
  });
});
