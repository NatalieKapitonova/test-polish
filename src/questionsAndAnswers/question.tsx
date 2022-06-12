import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Question, Area, getData } from "./data";
import ActionButton from "../common/action-button";

// const ActionButton = ({
//   showAnswer,
//   onClick,
//   isLastQuestion,
// }: {
//   showAnswer: boolean;
//   onClick: () => void;
//   isLastQuestion: boolean;
// }) => {
//   if (isLastQuestion && showAnswer) {
//     return (
//       <Link
//         to="/"
//         className="px-4 py-2 rounded-full bg-secondary-600 text-white"
//       >
//         Finish
//       </Link>
//     );
//   }
//   return (
//     <button
//       onClick={onClick}
//       className={`
//       px-5 py-3 rounded-full
//       ${
//         !showAnswer
//           ? "border-2 border-primary-600 bg-white hover:bg-primary-100 text-primary-600"
//           : "bg-primary-600 text-white hover:bg-primary-500"
//       }`}
//     >
//       {showAnswer ? "Next question" : "Check answer"}
//     </button>
//   );
// };

export default ({ area }: { area: Area | null }) => {
  if (!area) {
    return <div className="my-10">Please select a category</div>;
  }

  const [data, setData] = useState<Question[] | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    if (!data) {
      setData([...getData(area as Area)]);
    }
  }, [data]);

  useEffect(() => {
    setData([...getData(area as Area)]);
    setCurrent(0);
    setShowAnswer(false);
  }, [area]);

  if (!data) {
    return <div className="my-10">Please select a category</div>;
  }

  return (
    <div className="mt-5">
      <div className="font-semibold	">{data[current].title}</div>
      <br />
      {showAnswer && (
        <div>
          {data[current].answer
            .toString()
            .split("\n")
            .map((a, i) => (
              <div key={i}>{a}</div>
            ))}
        </div>
      )}
      {showAnswer && <div>{data[current].comment}</div>}
      <br />
      <ActionButton
        isLastQuestion={current === data.length - 1}
        isValidate={showAnswer}
        onClick={() => {
          if (showAnswer) {
            setCurrent(current + 1);
            setShowAnswer(false);
          } else {
            setShowAnswer(true);
          }
        }}
      />
    </div>
  );
};
