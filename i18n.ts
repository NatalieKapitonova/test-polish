import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import en from "./src/locales/en.json";
import pl from "./src/locales/pl.json";
import ru from "./src/locales/ru.json";

const resources = {
  pl: {
    translation: pl,
  },
  ru: {
    translation: ru,
  },
};

const currentLang = window.localStorage.getItem("language");

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

i18n.changeLanguage(currentLang || "ru");

export default i18n;
