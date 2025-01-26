import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation(); // Agregar `t` para traducciones

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative group">
      <button className="text-neutral-400 hover:text-white px-4 py-2 rounded-lg border border-neutral-600 hover:bg-neutral-700 transition-colors">
        {t("languageSwitcher.buttonText")}
      </button>
      <div className="absolute top-full left-0 mt-2 bg-neutral-800 text-white rounded-lg shadow-lg w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="block w-full px-4 py-2 text-left hover:bg-neutral-700"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="block w-full px-4 py-2 text-left hover:bg-neutral-700"
          onClick={() => changeLanguage("es")}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
