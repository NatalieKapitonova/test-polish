import React, { useEffect, useRef } from "react";

const useOutsideAlerter = (ref: any, onClickOutside: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default (props: {
  open: boolean;
  onCancel: () => void;
  children: JSX.Element;
  position?: string;
}) => {
  const { open, onCancel, position = "z-10  right-5 -top-16" } = props;

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => onCancel());
  return (
    <div
      ref={wrapperRef}
      className={` ${open ? "opacity-100" : "opacity-0"}
      ${open ? "visible" : "invisible"}`}
    >
      <ul
        className={`
        max-h-64 w-64 overflow-auto
        cursor-pointer z-50
        transition-opacity duration-500 
        ${position} 
        bg-white dark:bg-coolGray-700 
        absolute shadow-2xl 
        ${open ? "opacity-100" : "opacity-0"}
        ${open ? "visible" : "invisible"}`}
      >
        {props.children}
      </ul>
    </div>
  );
};
