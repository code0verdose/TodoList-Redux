import React from "react";
import s from "./Title.module.sass";
import clsx from "clsx";

const Title = ({ text, className }) => {
  return <h1 className={clsx(s.Title, className)}>{text}</h1>;
};

export { Title };
