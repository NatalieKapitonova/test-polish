import raw from "./holidays.json";

import * as U from "../utils";

interface Question {
  id: number;
  title: string;
  info: string | null;
  answers: Answer[];
}

interface Answer {
  id: number;

  date: string | number;
  isCorrect: boolean;
}

const getDates = () => raw.map((r) => r.date);
const step = 10;

export const getHolidays = (): Question[] => {
  const dates = getDates();
  const arr: Question[] = raw.map((holiday, i) => {
    const idx = dates.findIndex((n) => n === holiday.date);
    const idx1 = idx > step ? idx - step : idx;
    const idx2 = idx < dates.length - (step + 1) ? idx + step : idx;

    const [val1, val2] = U.getRandomBetweenUnique(idx1, idx2, idx);
    const answers: Answer[] = [
      { id: 1, isCorrect: true, date: holiday.date },
      { id: 2, isCorrect: false, date: dates[val1] },
      { id: 3, isCorrect: false, date: dates[val2] },
    ];
    return {
      id: i + 1,
      title: holiday.holiday,
      info: holiday.info,
      answers: U.shuffle(answers),
    };
  });

  return U.shuffle(arr);
};
