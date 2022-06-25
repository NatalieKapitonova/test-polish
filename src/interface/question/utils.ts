import { getRandomBetweenUnique, shuffle } from "../../utils";
import * as T from "../types";

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

const getDates = (d: T.Question[]) => d.map((i) => i.answers[0].answer);
const step = 10;
export const getQuestions = (dataRaw: T.Question[]): Question[] => {
  const dates = getDates(dataRaw);
  const arr = dataRaw.map((dateRaw, i) => {
    const idx = dates.findIndex((n) => n === dateRaw.answers[0].answer);
    const idx1 = idx > step ? idx - step : 0;
    const idx2 =
      idx < dates.length - (step + 1) ? idx + step : dates.length - 1;

    const [val1, val2] = getRandomBetweenUnique(idx1, idx2, idx);
    const answers = [
      { id: 1, label: dateRaw.answers[0].answer, isCorrect: true },
      { id: 2, label: dates[val1], isCorrect: false },
      { id: 3, label: dates[val2], isCorrect: false },
    ];

    return {
      label: dateRaw.title,
      id: i + 1,
      answers: shuffle(answers),
    };
  });

  return shuffle(arr);
};
