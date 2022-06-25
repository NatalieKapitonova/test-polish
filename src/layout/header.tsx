import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./language";

export default () => {
  const { pathname } = useLocation();
  const { t }: { t: (s: string) => string } = useTranslation();

  return (
    <div className="fixed w-full flex items-center justify-between h-14 z-10 shadow-md bg-white max-w-screen overflow-scroll">
      <div className="hidden md:block ">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-white dark:bg-gray-800  border-r border-secondary">
          <div className="flex items-center">
            <Link to="/">{t("title")}</Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Link to="/">
          <i className="fa-solid fa-home text-primary-600 ml-4" />
        </Link>
      </div>
      <div className="md:pl-4 flex items-start justify-start w-full relative">
        <div className="mx-3 md:mx-5">
          <Link
            to="/dates"
            className={`
          ${pathname.includes("/dates") && "text-secondary-600"}
            hover:text-primary-600`}
          >
            {t("dates")}
          </Link>
        </div>
        <div className="mr-3 md:mr-5">
          <Link
            to="/holidays"
            className={` ${
              pathname.includes("/holidays") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            {t("holidays").toString()}
          </Link>
        </div>
        <div className="mr-3 md:mr-5">
          <Link
            to="/kings"
            className={` ${
              pathname.includes("/kings") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            {t("kings")}
          </Link>
        </div>
        <div className="mr-3 md:mr-5">
          <Link
            to="/personas"
            className={` ${
              pathname.includes("/personas") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            {t("people")}
          </Link>
        </div>
        <div className="mr-3 md:mr-5">
          <Link
            to="/questions"
            className={` ${
              pathname.includes("/questions") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            {t("qAndA")}
          </Link>
        </div>
        <div>
          <Link
            to="/anthem"
            className={` ${
              pathname.includes("/anthem") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            {t("anthem")}
          </Link>
        </div>
        <div className="absolute right-5">
          <Language />
        </div>
      </div>
    </div>
  );
};
