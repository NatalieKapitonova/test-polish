import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ActionButton = ({
  isValidate,
  onClick,
  isLastQuestion,
}: {
  isValidate: boolean;
  onClick: () => void;
  isLastQuestion: boolean;
}) => {
  const { t }: { t: (s: string) => string } = useTranslation();
  if (isLastQuestion && isValidate) {
    return (
      <Link
        to="/"
        className="px-5 py-3 rounded-full bg-secondary-600 text-white"
      >
        {t("finish")}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`
      px-5 py-3 rounded-full border-2 border-primary-600 
      ${
        !isValidate
          ? "bg-white hover:bg-primary-100 text-primary-600"
          : "bg-primary-600 text-white hover:bg-primary-500"
      }`}
    >
      {isValidate ? t("next") : t("check")}
    </button>
  );
};

export default ActionButton;
