export const getRandomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shuffle = <T>(array: T[]): T[] => {
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

export const getRandomBetweenUnique = (
  min: number,
  max: number,
  exclude?: number,
  length: number = 2
): number[] => {
  const arr = Array.from({ length: max - min + 1 }, (_v, k) => k + min).filter(
    (f) => !exclude || f !== exclude
  );
  const shuffled = shuffle(arr);
  return shuffled.slice(0, length);
};
