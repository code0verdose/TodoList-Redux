import React from "react";
import s from "./Wrapper.module.sass";
import clsx from "clsx";

const Wrapper = ({ children, className }) => {
  return <div className={clsx(s.Wrapper, className)}>{children}</div>;
};

export { Wrapper };
