import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchCity from './SearchCity';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { StoreTestProvider } from '../../store/store.test';
import { LanguageContextProvider } from '../../context/LanguageContext/LanguageContext';

describe('SearchCity', () => {
  jest.spyOn(window.navigator, 'language', 'get').mockReturnValue('en');

  test('Search value should be passed to store', () => {
    render(
      <LanguageContextProvider>
        <StoreTestProvider>
          <SearchCity />
        </StoreTestProvider>
      </LanguageContextProvider>
    );
    const cityName = 'City';

    act(() => {
      userEvent.type(screen.getByTestId('sc-input'), cityName);
      userEvent.click(screen.getByTestId('sc-button'));
    });
    // TODO: validate sending search value (problematic: mock thunk)

    expect(screen.getByTestId('sc-input')).toHaveDisplayValue(cityName);
  });

  test('Should call alert if provided empty value', () => {
    const alertMock = jest.spyOn(window, 'alert');
    alertMock.mockImplementation(() => {
      // dump function to mock alert() call
    });
    render(
      <StoreTestProvider>
        <SearchCity />
      </StoreTestProvider>
    );

    act(() => {
      userEvent.click(screen.getByTestId('sc-button'));
    });

    expect(alertMock).toBeCalled();
  });
});
