import React from "react";
import { useTranslation } from "react-i18next";

export default ({
  wrongCtn,
  correctCtn,
}: {
  wrongCtn: number;
  correctCtn: number;
}) => {
  const { t }: { t: (s: string) => string } = useTranslation();
  return (
    <div className="text-sm mb-3 text-right text-primary-500">
      {t("yourScore")}: <span className="text-primary-500">{correctCtn}</span> /{" "}
      <span className="text-secondary-500">{wrongCtn}</span>
    </div>
  );
};
