import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageButton.css';
const languageFlags = {
  heb: './hebrew.svg',
  en: './english.svg',
};
type LanguageKeys = keyof typeof languageFlags;

function LanguageButton() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageKeys>('heb');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const changeLanguage = (key: LanguageKeys) => {
    setLanguage(key);
    i18n.changeLanguage(key);
    handleClick();
  };
  const flagsArray = () => {
    return Object.keys(languageFlags).map((key) => {
      if (key === language) return;

      return (
        <img
          key={key}
          src={languageFlags[key as LanguageKeys]}
          className="w-7 rounded-full cursor-pointer hover:scale-110 transition-all"
          onClick={() => changeLanguage(key as LanguageKeys)}
        />
      );
    });
  };
  return (
    <div className="relative">
      <img
        src={languageFlags[language]}
        className="w-7 rounded-full cursor-pointer"
        onClick={handleClick}
      />
      <div className="absolute top-10 flex flex-col gap-3">
        {isOpen && flagsArray()}
      </div>
    </div>
  );
}

export default LanguageButton;
