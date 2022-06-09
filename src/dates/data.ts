import datesRaw from "./dates.json";

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

const getRandomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getFakeAnwers = (currAnswer: number | string): Answer[] => {
  if (isNaN(Number(currAnswer))) {
    // custom date e.g. mid century
    const val1 = getRandomBetween(500, 700);
    const val2 = getRandomBetween(500, 700);
    return [
      { id: 2, label: val1, isCorrect: false },
      { id: 3, label: val2, isCorrect: false },
    ];
  }
  // correct answer is a numeric date - so generate something in between
  const val1 = getRandomBetween(
    Number(currAnswer) - 20,
    Number(currAnswer) + 20
  );
  const val2 = getRandomBetween(
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
      answers: shuffle(answers),
    };
  });

  return shuffle(arr);
};
