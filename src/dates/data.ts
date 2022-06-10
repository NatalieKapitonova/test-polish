import datesRaw from "./dates.json";

import * as Utils from "../utils";

interface Answer {
  id: number;
  label: string | number;
  isCorrect: boolean;
}
interface Question {
  id: number;
  label: string;
  answers: Answer[];
}

const getFakeAnwers = (currAnswer: number | string): Answer[] => {
  if (isNaN(Number(currAnswer))) {
    // custom date e.g. mid century
    const val1 = Utils.getRandomBetween(500, 700);
    const val2 = Utils.getRandomBetween(500, 700);
    return [
      { id: 2, label: val1, isCorrect: false },
      { id: 3, label: val2, isCorrect: false },
    ];
  }
  // correct answer is a numeric date - so generate something in between
  const val1 = Utils.getRandomBetween(
    Number(currAnswer) - 20,
    Number(currAnswer) + 20
  );
  const val2 = Utils.getRandomBetween(
    Number(currAnswer) - 25,
    Number(currAnswer) + 25
  );
  return [
    { id: 2, label: val1, isCorrect: false },
    { id: 3, label: val2, isCorrect: false },
  ];
};

export const getQuestions = (): Question[] => {
  const arr = datesRaw.map((dateRaw, i) => {
    const fakeAnswers = getFakeAnwers(dateRaw.Date);
    const answers = [
      ...fakeAnswers,
      { id: 1, label: dateRaw.Date, isCorrect: true },
    ];

    return {
      label: dateRaw.Event,
      id: i + 1,
      answers: Utils.shuffle(answers),
    };
  });

  return Utils.shuffle(arr);
};
