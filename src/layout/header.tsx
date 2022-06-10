import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import AppTitle from "common/components/app-title";

/**
 *   ${
              window.location.pathname.includes("dates")
                ? "text-secondary-600"
                : "text-primary"
            } 
 */
export default () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed w-full flex items-center justify-between h-14 z-10 shadow-md bg-white">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-white dark:bg-gray-800 border-none">
        <div className="flex items-center">
          <Link to="/">Test Polish</Link>
        </div>
      </div>
      <div className="pl-4 flex items-start justify-start w-full border-l border-secondary">
        <div className="mx-5">
          <Link
            to="/dates"
            className={`
          ${pathname.includes("/dates") && "text-secondary-600"}
            hover:text-primary-600`}
          >
            Dates
          </Link>
        </div>
        <div className="mr-5">
          <Link
            to="/holidays"
            className={` ${
              pathname.includes("/holidays") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            Holidays
          </Link>
        </div>
        <div className="mr-5">
          <Link
            to="/personas"
            className={` ${
              pathname.includes("/personas") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            People
          </Link>
        </div>
        <div className="mr-5">
          <Link
            to="/questions"
            className={` ${
              pathname.includes("/questions") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            Q&A
          </Link>
        </div>
        <div>
          <Link
            to="/anthem"
            className={` ${
              pathname.includes("/anthem") && "text-secondary-600"
            } hover:text-primary-600`}
          >
            Anthem
          </Link>
        </div>
      </div>
    </div>
  );
};
