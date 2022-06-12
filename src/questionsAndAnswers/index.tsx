import React, { useState } from "react";

import Question from "./question";

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
  return (
    <div className="bg-white rounded-lg shadow p-5 text-center">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {arr.map((v) => (
          <div
            key={v}
            className={`${labelClasses} ${
              area === v ? activeClass : inactiveClass
            }`}
            onClick={() => setArea(v as Area)}
          >
            {v === "misc" ? "other" : v}
          </div>
        ))}
      </div>
      <Question area={area} />
    </div>
  );
};
