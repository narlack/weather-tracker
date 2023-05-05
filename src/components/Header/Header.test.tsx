import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should be rendered and collect selector', () => {
    render(<Header />);
    const selectorElement = screen.getByTestId("h-selector");
    expect(selectorElement).toBeInTheDocument();
  });
})

