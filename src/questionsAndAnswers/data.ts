import rawGeo from "./json/geo.json";
import rawCulture from "./json/culture.json";
import rawHistory from "./json/history.json";
import rawPersonas from "./json/personas.json";
import rawMisc from "./json/misc.json";
import { shuffle } from "../utils";

export interface Question {
  title: string;
  answer: string | number;
  comment?: string | null;
}

interface Raw {
  question: string;
  answer: string | number;
  comment?: string | null;
  language?: string;
}

export type Area = "geo" | "culture" | "history" | "personas" | "misc";

const getRaw = (a: Area): Raw[] => {
  switch (a) {
    case "geo":
      return rawGeo;
    case "culture":
      return rawCulture;
    case "history":
      return rawHistory;
    case "misc":
      return rawMisc;
    case "personas":
      return rawPersonas;
  }
};
export const getData = (a: Area): Question[] => {
  const raw = getRaw(a);

  const language = window.localStorage.getItem("language") || "ru";
  console.log(language);
  console.log(raw);

  const arr = raw
    .filter((r) => !r.language || r.language === language)
    .map((r) => ({
      title: r.question,
      answer: r.answer,
      comment: r.comment,
    }));

  return shuffle(arr);
};
