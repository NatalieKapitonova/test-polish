import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Question from "./question";

enum Area {
  geo = "geo",
  culture = "culture",
  personas = "personas",
  misc = "misc",
  history = "history",
}

const labelClasses = `px-3 py-2 rounded-full cursor-pointer border-2`;
const activeClass = `bg-secondary-600 text-white border-secondary-600`;
const inactiveClass = `bg-white border-primary-600`;
export default () => {
  const [area, setArea] = useState<Area | null>(null);
  return (
    <div className="bg-white rounded-large p-5">
      <div className="grid grid-cols-5 gap-3">
        <div
          className={`${labelClasses} ${
            area === Area.geo ? activeClass : inactiveClass
          }`}
          onClick={() => setArea(Area.geo)}
        >
          Geogrpahy
        </div>
        <div
          className={`${labelClasses} ${
            area === Area.culture ? activeClass : inactiveClass
          }`}
          onClick={() => setArea(Area.culture)}
        >
          Culture
        </div>
        <div
          className={`${labelClasses} ${
            area === Area.personas ? activeClass : inactiveClass
          }`}
          onClick={() => setArea(Area.personas)}
        >
          People
        </div>
        <div
          className={`${labelClasses} ${
            area === Area.history ? activeClass : inactiveClass
          }`}
          onClick={() => setArea(Area.history)}
        >
          History
        </div>
        <div
          className={`${labelClasses} ${
            area === Area.misc ? activeClass : inactiveClass
          }`}
          onClick={() => setArea(Area.misc)}
        >
          Other
        </div>
      </div>
      <Question area={area} />
    </div>
  );
};
