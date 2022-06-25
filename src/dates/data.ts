import datesRaw from "./dates.json";

import * as Utils from "../utils";
import { getRandomBetweenUnique } from "../utils";

export interface Answer {
  id: number;
  label: string | number;
  isCorrect: boolean;
}
export interface Question {
  id: number;
  label: string;
  answers: Answer[];
}

const getDates = () => datesRaw.map((d) => d.Date);
const step = 10;
export const getQuestions = (): Question[] => {
  const dates = getDates();
  const arr = datesRaw.map((dateRaw, i) => {
    const idx = dates.findIndex((n) => n === dateRaw.Date);
    const idx1 = idx > step ? idx - step : 0;
    const idx2 =
      idx < dates.length - (step + 1) ? idx + step : dates.length - 1;

    const [val1, val2] = getRandomBetweenUnique(idx1, idx2, idx);
    const answers = [
      { id: 1, label: dateRaw.Date, isCorrect: true },
      { id: 2, label: dates[val1], isCorrect: false },
      { id: 3, label: dates[val2], isCorrect: false },
    ];

    return {
      label: dateRaw.Event,
      id: i + 1,
      answers: Utils.shuffle(answers),
    };
  });

  return Utils.shuffle(arr);
};
