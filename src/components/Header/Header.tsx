import React, { useContext } from 'react';
import './Header.css';
import LanguageContext from '../../context/LanguageContext/LanguageContext';

function Header() {
  const languageContext = useContext(LanguageContext);

  // TODO: create a separate component for selector and remove hardcode of languages
  return (
    <header>
      <select data-testid="h-selector" defaultValue={languageContext.language}>
        <option value="en">en</option>
        <option value="ru">ru</option>
      </select>
    </header>
  );
}

export default Header;
