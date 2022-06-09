import React, { useState } from "react";
import { getQuestions } from "./data";

import Score from "./score";
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
      px-5 py-3 rounded-full
      ${
        !isValidate
          ? "border-2 border-primary-600 bg-white hover:bg-primary-100 text-primary-600"
          : "bg-primary-600 text-white hover:bg-primary-500"
      }`}
    >
      {isValidate ? "Next" : "Check"}
    </button>
  );
};

const data = getQuestions();
export default () => {
  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [validate, setValidate] = useState<boolean>(false);
  const [correctCt, setCorrectCtn] = useState<number>(0);
  const [wrongCtn, setWrongCtn] = useState<number>(0);

  const getSuccessClasses = (isCorrect: boolean, selected: boolean) => {
    if (validate) {
      if (isCorrect && selected) {
        return "bg-green-500 hover text-white border-green-500";
      }
      if (isCorrect && !selected) {
        return "bg-white text-green-500 border-green-500";
      }
      if (!isCorrect && selected) {
        return "bg-secondary-600 text-white border-secondary-600";
      }
      if (!isCorrect && selected) {
      }
    } else {
      if (selected) {
        return "bg-primary-600 hover:bg-primary-500 text-white border-primary-600";
      }
      return "bg-white hover:bg-primary-100 border-primary-600";
    }
  };

  const handleValidateClick = () => {
    setValidate(true);
    const corIdx = data[current].answers.findIndex((a) => a.isCorrect);
    if (corIdx === selected) {
      setCorrectCtn(correctCt + 1);
    } else {
      setWrongCtn(wrongCtn + 1);
    }
  };

  const handleNextClick = () => {
    setCurrent(current + 1);
    setValidate(false);
    setSelected(null);
  };

  return (
    <div className="bg-white w-full shadow p-10 rounded-lg text-center">
      <div className="grid grid-cols-2">
        <small className="text-primary-500 text-left">
          Question {current + 1} out of {data.length}
        </small>
        <Score wrongCtn={wrongCtn} correctCtn={correctCt} />
      </div>

      <h1>{data[current].label}</h1>

      <br />
      {data[current].answers.map((a, i) => (
        <div
          key={i}
          className={`p-3 rounded-lg border-2 m-2 cursor-pointer ${getSuccessClasses(
            a.isCorrect,
            i === selected
          )}
          }`}
          onClick={() => setSelected(selected === i ? null : i)}
        >
          {a.label}
        </div>
      ))}
      <br />
      <ActionButton
        isValidate={validate}
        onClick={validate ? handleNextClick : handleValidateClick}
        isLastQuestion={current === data.length - 1}
      />
    </div>
  );
};
