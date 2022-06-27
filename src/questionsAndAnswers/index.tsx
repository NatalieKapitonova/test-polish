import React, { useState } from "react";

import Question from "./question";
import { useTranslation } from "react-i18next";

enum Area {
  geo = "geo",
  culture = "culture",
  personas = "personas",
  misc = "misc",
  history = "history",
}

const labelClasses = `px-2 py-1 rounded-full cursor-pointer border-2`;
const activeClass = `bg-secondary-600 text-white border-secondary-600 hover:bg-secondary-500`;
const inactiveClass = `bg-white border-primary-600 hover:bg-primary-100`;

const arr = ["geo", "culture", "personas", "history", "misc"];

export default () => {
  const [area, setArea] = useState<Area | null>(Area.geo);
  const { t } = useTranslation();
  return (
    <div className="bg-white md:rounded-lg shadow p-5 text-center">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {arr.map((v) => (
          <div
            key={v}
            className={`${labelClasses} ${
              area === v ? activeClass : inactiveClass
            }`}
            onClick={() => setArea(v as Area)}
          >
            {t(v) as string}
          </div>
        ))}
      </div>
      <Question area={area} />
    </div>
  );
};
