// import { basename } from "config";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./layout";
import Home from "./home";
import Dates from "./dates";
import { basename } from "config";
// const Dates = lazy(() => import("./dates"));

const MyRouter = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dates" element={<Dates />} />
    </Routes>
  </Layout>
);

const content = () => (
  <BrowserRouter basename={basename}>
    <MyRouter />
  </BrowserRouter>
);

export default content;
