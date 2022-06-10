import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, Icon }: { title: string; Icon: JSX.Element }) => {
  return (
    <div className="relative group flex flex-row shadow hover:shadow-lg transition duration-150 ease-in-out cursor-pointer rounded-lg">
      <div className="rounded-l-lg text-center bg-primary-600 group-hover:bg-secondary-600 p-5 transition duration-150 ease-in-out">
        {Icon}
      </div>
      <div className="p-5">{title}</div>
      <div>
        <i className="fa-solid fa-chevron-right text-primary-600 group-hover:text-secondary-600 transition duration-150 ease-in-out absolute right-5 bottom-7" />
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
      <small>Select what you would like to train</small>
      <br />
      <br />
      <div className="grid md:grid-cols-2 gap-3 mt-2 md:mt-5">
        <Link to="/dates">
          <Card
            title="Important dates"
            Icon={
              <i className="fa-solid fa-calendar  text-white text-xl w-10"></i>
            }
          />
        </Link>
        <Link to="/kings">
          <Card
            title="Polish Kings"
            Icon={<i className="fa-solid fa-crown text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/holidays">
          <Card
            title="Polish holidays"
            Icon={<i className="fa-solid fa-gift  text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/personas">
          <Card
            title="Important People"
            Icon={
              <i className="fa-solid fa-person text-white text-xl w-10"></i>
            }
          />
        </Link>
        <Link to="/anthem">
          <Card
            title="Polish Anthem"
            Icon={<i className="fa-solid fa-drum text-white text-xl w-10"></i>}
          />
        </Link>
        <Link to="/questions">
          <Card
            title="General questions"
            Icon={
              <i className="fa-solid fa-question text-white text-xl w-10"></i>
            }
          />
        </Link>
      </div>
    </div>
  );
};
