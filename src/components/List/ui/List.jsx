import React from 'react';
import s from './List.module.sass'
import clsx from "clsx";

const List = ({children, className}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

export {List};
