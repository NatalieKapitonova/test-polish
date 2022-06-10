import raw from "./kings.json";

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

const getNames = () => raw.map((r) => r.king);

export const getKings = (): Question[] => {
  const names = getNames();
  const arr: Question[] = raw.map((king, i) => {
    const idx = names.findIndex((n) => n === king.king);
    const idx1 = idx > 20 ? idx - 20 : idx;
    const idx2 = idx < names.length - 21 ? idx + 20 : idx;

    const val1 = U.getRandomBetween(idx1, idx2);
    const val2 = U.getRandomBetween(idx1, idx2);
    const answers: Answer[] = [
      { id: 1, isCorrect: true, title: king.king },
      { id: 2, isCorrect: false, title: names[val1] },
      { id: 3, isCorrect: false, title: names[val2] },
    ];
    return {
      id: i + 1,
      date: king.date,
      info: king.info,
      answers: U.shuffle(answers),
    };
  });

  return U.shuffle(arr);
};
