import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./language";
import PopupMenu from "../common/popup-menu";

const LinkItem = (props: {
  url: string;
  title: string;
  icon?: JSX.Element;
}) => {
  const { t } = useTranslation();
  const { url, title, icon } = props;
  return (
    <Link
      to={url}
      className={`flex flex-cols dark:hover:bg-coolGray-500 hover:bg-secondary-700 py-2 px-4 block whitespace-no-wrap font-extralight dark:text-white`}
    >
      <span className="text-primary-300">{icon}</span>
      <span className="mr-3" />
      {t(title).toString()}
    </Link>
  );
};

const linkTitles = [
  "dates",
  "holidays",
  "kings",
  "people",
  "questions",
  "anthem",
];
const MobileMenu = (props: { open: boolean; onCancel: () => void }) => {
  const { open, onCancel } = props;

  console.log("rendetring?");
  return (
    <PopupMenu
      open={open}
      onCancel={onCancel}
      position={`z-10 w-64 left-2 top-14`}
    >
      <div className="bg-primary-200">
        {linkTitles.map((l, i) => (
          <li key={i} onClick={onCancel}>
            <LinkItem title={l} url={`/${l}`} />
          </li>
        ))}
      </div>
    </PopupMenu>
  );
};

export default () => {
  const { pathname } = useLocation();
  const { t }: { t: (s: string) => string } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="fixed w-full flex items-center justify-between h-14 z-10 shadow-md bg-white max-w-screen relative">
      <div className="hidden md:block ml-5">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-white dark:bg-gray-800  border-r border-secondary">
          <div className="flex items-center">
            <Link to="/">{t("title")}</Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden ml-5">
        <i
          className="fa-solid fa-bars text-primary-600 cursor-pointer"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      <div className="block md:hidden mr-5">
        <Link to="/">
          <i className="fa-solid fa-home text-primary-600 ml-4" />
        </Link>
        <MobileMenu open={open} onCancel={() => setOpen(false)} />
      </div>
      <div className="hidden md:block pl-4 flex items-start justify-start w-full relative">
        {linkTitles.map((l) => (
          <div className={`mx-3 inline`} key={l}>
            <Link
              to={`/${l}`}
              className={`${pathname.includes(l) && "text-secondary-600"}
            hover:text-primary-600`}
            >
              {t(l).toString()}
            </Link>
          </div>
        ))}
      </div>
      <div className="md:absolute right-5 bottom-3 pr-5">
        <Language />
      </div>
    </div>
  );
};
