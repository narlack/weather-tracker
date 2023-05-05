import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import LanguageContext, { LanguageContextProvider } from './LanguageContext';
import SpyInstance = jest.SpyInstance;
import { act } from 'react-dom/test-utils';

const TEST_LANGUAGE_NAME = 'testName';

const TestingComponent = () => {
  const languageContext = useContext(LanguageContext);

  const setNewLanguage = () => {
    languageContext.setLanguage(TEST_LANGUAGE_NAME);
  };

  return (
    <div>
      Current language <span data-testid="currentLanguage">{languageContext.language}</span>
      <button data-testid="setLanguage" onClick={setNewLanguage}>
        Change language
      </button>
    </div>
  );
};

let languageGetter: SpyInstance<string | undefined>;

describe('LanguageContext', () => {
  beforeAll(() => {
    languageGetter = jest.spyOn(window.navigator, 'language', 'get');
  });

  test('Should get default language from browser', () => {
    const mockLanguage = 'en';

    languageGetter.mockReturnValue(mockLanguage);
    render(
      <LanguageContextProvider>
        <TestingComponent />
      </LanguageContextProvider>
    );

    const currentLanguage = screen.getByTestId('currentLanguage');
    expect(currentLanguage).toHaveTextContent(mockLanguage);
  });



  test('Should get as default language en', () => {
    languageGetter.mockReturnValue(undefined);
    render(
      <LanguageContextProvider>
        <TestingComponent />
      </LanguageContextProvider>
    );

    const currentLanguage = screen.getByTestId('currentLanguage');
    expect(currentLanguage).toHaveTextContent('en');
  });

  test('Button should change language', () => {
    const mockLanguage = 'en';

    languageGetter.mockReturnValue(mockLanguage);
    render(
      <LanguageContextProvider>
        <TestingComponent />
      </LanguageContextProvider>
    );

    let currentLanguage = screen.getByTestId('currentLanguage');
    expect(currentLanguage).toHaveTextContent(mockLanguage);

    const setNewLanguageButton = screen.getByTestId('setLanguage');
    act(() => setNewLanguageButton.click());

    currentLanguage = screen.getByTestId('currentLanguage');
    expect(currentLanguage).toHaveTextContent(TEST_LANGUAGE_NAME);
  });
});
