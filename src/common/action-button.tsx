import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({
  isValidate,
  onClick,
  isLastQuestion,
}: {
  isValidate: boolean;
  onClick: () => void;
  isLastQuestion: boolean;
}) => {
  if (isLastQuestion && isValidate) {
    return (
      <Link
        to="/"
        className="px-5 py-3 rounded-full bg-secondary-600 text-white"
      >
        Finish
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`
      px-5 py-3 rounded-full border-2 border-primary-600 w-24
      ${
        !isValidate
          ? "bg-white hover:bg-primary-100 text-primary-600"
          : "bg-primary-600 text-white hover:bg-primary-500"
      }`}
    >
      {isValidate ? "Next" : "Check"}
    </button>
  );
};

export default ActionButton;
