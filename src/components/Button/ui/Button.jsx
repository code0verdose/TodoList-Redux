import React from "react";
import clsx from "clsx";
import s from "./Button.module.sass";

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx(s.Button, className)}>
      {text}
    </button>
  );
};

export { Button };
