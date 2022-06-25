import datesRaw from "../../dates/dates.json";

import * as T from "../types";
import * as U from "./utils";

export const getQuestionsByType = async (typeId: string) => {
  // const r = await fetch(`/api/questions?type=${typeId}`, { method: "GET" });
  // const d = await r.json();

  // return U.getQuestions(d.model.date);
  return U.getQuestions(
    datesRaw.map((d) => ({
      title: d.Event,
      trueAnswer: d.Date.toString(),
      answers: [{ answer: d.Date.toString() }],
      type: "date",
    }))
  );
};

const getFormBody = (form: any) =>
  Object.entries(form).map(
    ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as any)}`
  );
export const test2 = async () => {
  const form = {
    identityKey: "team@odrive.info",
    type: "email",
    password: "123456789",
  };

  const formBody = getFormBody(form);

  const r = await fetch("/api/pwlogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody.join("&"),
  });
  return await r.json();
};

/**
 * curl 'http://192.168.0.142/secure/question' --data
 * 'title=question-title&description=descr&type=people&trueAnswer=true-answer' -ivb name=JSESSIONID -b kuku
 */

export const addQuestion = async () => {
  const form = {
    title: "Natalie's Title",
    description: "Hi sdf sdg sdg sdgsd fg",
    type: "people",
    trueAnswer: "This is a correct answer",
  };

  const formBody = getFormBody(form);

  const d = await fetch("/api/secure/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formBody.join("&"),
  });

  return await d.json();
};

// export const importQuestions = async () => {
//   const data: T.Question[] = datesRaw.map((d) => {
//     return {
//       title: d.Event,
//       type: "date",
//       trueAnswer: d.Date.toString(),
//     };
//   });

//   const promises = data.map(async (d) => {
//     const formBody = getFormBody(d);

//     const r = await fetch("/api/secure/question", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//       },
//       body: formBody.join("&"),
//     });

//     return await r.json();
//   });

//   return await Promise.all(promises);
// };
