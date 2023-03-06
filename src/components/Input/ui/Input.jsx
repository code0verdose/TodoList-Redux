import React from "react";
import s from "./Input.module.sass";

const Input = ({ value, setValue, innerRef }) => {
  return (
    <input
      className={s.Input}
      type="text"
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
      ref={innerRef}
    />
  );
};

export { Input };
