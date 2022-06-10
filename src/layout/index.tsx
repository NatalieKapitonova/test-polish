import React from "react";
import Header from "./header";
import { github, version } from "../config";

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen flex flex-col  flex-auto flex-shrink-0 antialiased  bg-primary-100 font-extralight">
      <Header />
      <main className="content-area flex justify-center mt-10">
        <div className="md:w-3/5 pt-5 md:pt-20 h-full">{children}</div>
      </main>
      <footer style={{ height: "50px" }} className="bg-primary-100 text-center">
        <small>Natalie Kapitonova &copy; {new Date().getFullYear()}</small>
        <br />
        <small>
          <a href={github.sha} className="md:ml-5 ">
            {version}
          </a>
        </small>
      </footer>
    </div>
  );
};
