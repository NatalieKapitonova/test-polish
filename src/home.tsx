import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Card = ({ title, Icon }: { title: string; Icon: JSX.Element }) => {
  return (
    <div className="relative group flex flex-row shadow hover:shadow-lg transition duration-150 ease-in-out cursor-pointer rounded-lg">
      <div className="rounded-l-lg text-center bg-primary-600 group-hover:bg-secondary-600 p-5 transition duration-150 ease-in-out">
        {Icon}
      </div>
      <div className="p-5">{title}</div>
      <div>
        <i className="fa-solid fa-chevron-right text-primary-600 group-hover:text-secondary-600 transition duration-150 ease-in-out absolute right-5 bottom-7" />
      </div>
    </div>
  );
};

/**
 *  
  "importantDates": "Важные даты",
  "polishHolidays": "Польские праздники",
  "polishKings": "Польские короли",
  "importantPeople": "Важные люди",
  "polishAnthem": "Польский гимн",
  "generalQuestions": "Общие вопросы"
 */

export default () => {
  const { t }: { t: (s: string) => string } = useTranslation();
  return (
    <div className="bg-white w-full shadow p-10 rounded-lg text-center">
      <h1 className="text-primary-800 text-xl uppercase font-bold">
        {t("welcome")}
      </h1>
      <small>{t("welcomeInfo")}</small>
      <br />
      <br />
      <div className="grid md:grid-cols-2 gap-3 mt-2 md:mt-5">
        <Link to="/dates">
          <Card
            title={t("importantDates")}
            Icon={
              <i className="fa-solid fa-calendar  text-white text-xl w-10"></i>
            }
          />
        </Link>
        <Link to="/kings">
          <Card
            title={t("polishKings")}
            Icon={<i className="fa-solid fa-crown text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/holidays">
          <Card
            title={t("polishHolidays")}
            Icon={<i className="fa-solid fa-gift  text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/personas">
          <Card
            title={t("importantPeople")}
            Icon={
              <i className="fa-solid fa-person text-white text-xl w-10"></i>
            }
          />
        </Link>
        <Link to="/anthem">
          <Card
            title={t("polishAnthem")}
            Icon={<i className="fa-solid fa-drum text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/questions">
          <Card
            title={t("generalQuestions")}
            Icon={
              <i className="fa-solid fa-question text-white text-xl w-10"></i>
            }
          />
        </Link>
      </div>
    </div>
  );
};
