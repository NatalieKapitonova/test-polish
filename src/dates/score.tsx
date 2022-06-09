import React from "react";

export default ({
  wrongCtn,
  correctCtn,
}: {
  wrongCtn: number;
  correctCtn: number;
}) => {
  return (
    <div className="text-sm mb-3 text-right text-primary-500">
      Your score: <span className="text-primary-500">{correctCtn}</span> /{" "}
      <span className="text-secondary-500">{wrongCtn}</span>
    </div>
  );
};
