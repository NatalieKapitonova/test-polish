import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { i18n } = useTranslation();
  const languages = ["ru", "pl"];

  const handleChangeLang = (l: string) => {
    const c = window.localStorage.getItem("language");
    if (c !== l) {
      window.localStorage.setItem("language", l);
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-column">
      {languages.map((l) => {
        return (
          <button
            className={`mx-1 rounded-full text-center h-7 w-7 ${
              i18n.language === l
                ? "bg-secondary-700 text-white shadow"
                : "bg-primary-50 text-primary-600"
            }`}
            onClick={() => handleChangeLang(l)}
          >
            <small>{l.toUpperCase()}</small>
          </button>
        );
      })}
    </div>
  );
};
