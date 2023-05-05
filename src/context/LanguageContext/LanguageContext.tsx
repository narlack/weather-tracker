import React, { createContext, useState } from 'react';

const LanguageContext = createContext({
  language: '',
  setLanguage: (_newLanguage: string) => { /* this method should set new language in state */ }
});

export function LanguageContextProvider(props: React.PropsWithChildren) {
  const [language, setLanguage] = useState(navigator.language || 'en');

  const changeLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  const context = {
    language,
    setLanguage: changeLanguage
  };

  return <LanguageContext.Provider value={context}>{props.children}</LanguageContext.Provider>;
}

export default LanguageContext;
