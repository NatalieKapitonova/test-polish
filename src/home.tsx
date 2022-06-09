import React from "react";
import { Link } from "react-router-dom";

import { Calendar32, ChevronRight32 } from "@carbon/icons-react";

const Card = ({ title, Icon }: { title: string; Icon: JSX.Element }) => {
  return (
    <div className="relative group flex flex-row shadow hover:shadow-lg transition duration-150 ease-in-out cursor-pointer rounded-lg">
      <div className="rounded-l-lg text-center bg-primary-600 group-hover:bg-secondary-600 p-5 transition duration-150 ease-in-out">
        {Icon}
      </div>
      <div className="p-5">{title}</div>
      <div>
        <ChevronRight32 className="text-primary-600 group-hover:text-secondary-600 transition duration-150 ease-in-out absolute right-5 bottom-5" />
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className="bg-white w-full shadow p-10 rounded-lg text-center">
      <h1 className="text-primary-800 text-xl uppercase font-bold">
        Welcome to Polish Culture Training!
      </h1>
      <p>Select what you would like to train</p>
      <div className=" grid grid-cols-2 mt-5">
        <Link to="/dates">
          <Card
            title="Train important dates"
            Icon={<Calendar32 className="text-white" />}
          />
        </Link>
      </div>
    </div>
  );
};
