import React from "react";
import Header from "./header";

export default ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-screen bg-primary-100 font-extralight flex justify-center text-center">
      <Header />
      <div className="h-full w-full md:w-3/5 pt-5 md:pt-20 flex justify-center">
        {children}
      </div>
    </div>
  );
};
