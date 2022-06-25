export type Type = "date" | "people" | "kings" | "holidays";
export interface Question {
  title: string;
  description?: string;
  type: Type;
  trueAnswer: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
}
