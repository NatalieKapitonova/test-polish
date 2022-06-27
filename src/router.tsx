// import { basename } from "config";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Dates from "./dates";
import Kings from "./kings";
import Holidays from "./holidays";
import Personas from "./personas";
import Anthem from "./anthem";
import QandA from "./questionsAndAnswers";

import { basename } from "./config";

const MyRouter = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dates" element={<Dates />} />
      <Route path="/kings" element={<Kings />} />
      <Route path="/holidays" element={<Holidays />} />
      <Route path="/people" element={<Personas />} />
      <Route path="/anthem" element={<Anthem />} />
      <Route path="/questions" element={<QandA />} />
    </Routes>
  </Layout>
);

const content = () => (
  <BrowserRouter basename={basename}>
    <MyRouter />
  </BrowserRouter>
);

export default content;
