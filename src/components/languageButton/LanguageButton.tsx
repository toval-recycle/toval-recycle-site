import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languageFlags = {
  heb: "./hebrew.svg",
  en: "./english.svg",
};

type LanguageKeys = keyof typeof languageFlags;

function LanguageButton() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<LanguageKeys>("heb");

  const changeLanguage = () => {
    const key = language === "heb" ? "en" : "heb";
    setLanguage(key);
    i18n.changeLanguage(key);
  };

  return (
    <img
      alt="language icon"
      src={languageFlags[language]}
      className="w-7 cursor-pointer rounded-full"
      onClick={() => changeLanguage()}
    />
  );
}

export default LanguageButton;
