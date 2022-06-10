import React from "react";

import { anthemPolish, anthemBel } from "./anthem";

export default () => {
  return (
    <div className="bg-white shadow rounded-large p-5 mt-5 md:mt-1">
      <div className="grid md:grid-cols-2 gap-3 text-center">
        <div>
          <h1 className="font-bold mb-2">Polish</h1>
          <div
            dangerouslySetInnerHTML={{ __html: anthemPolish }}
            className="border-r"
          />
        </div>
        <div>
          <h1 className="font-bold mb-2">Belarusian</h1>
          <div dangerouslySetInnerHTML={{ __html: anthemBel }} />
        </div>
      </div>
    </div>
  );
};
