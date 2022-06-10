import raw from "./personas.json";

import * as U from "../utils";

interface Question {
  id: number;
  date: string | number;
  info: string | null;
  answers: Answer[];
}

interface Answer {
  id: number;
  title: string;
  isCorrect: boolean;
}

const getNames = () => raw.map((r) => r.author);
const step = 10;

export const getPersonas = (): Question[] => {
  const names = getNames();
  const arr: Question[] = raw.map((person, i) => {
    const idx = names.findIndex((n) => n === person.author);
    const idx1 = idx > step ? idx - step : idx;
    const idx2 = idx < names.length - (step + 1) ? idx + step : idx;

    const val1 = U.getRandomBetween(idx1, idx2);
    const val2 = U.getRandomBetween(idx1, idx2);
    const answers: Answer[] = [
      { id: 1, isCorrect: true, title: person.author },
      { id: 2, isCorrect: false, title: names[val1] },
      { id: 3, isCorrect: false, title: names[val2] },
    ];
    return {
      id: i + 1,
      date: person.date,
      info: person.info,
      answers: U.shuffle(answers),
    };
  });

  return U.shuffle(arr);
};
