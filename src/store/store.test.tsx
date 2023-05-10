import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

export const StoreTestProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};

describe('Store', () => {
  test('Should be rendered success', () => {
    render(
      <StoreTestProvider>
        <div data-testid="s-text">test text</div>
      </StoreTestProvider>
    );

    expect(screen.getByTestId('s-text')).toBeInTheDocument();
  });
});
