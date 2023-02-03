import React from 'react';
import s from './ListItem.module.sass'
import clsx from "clsx";

const ListItem = ({className, children}) => {
  return (
    <li className={clsx(s.ListItem, className)}>
      {children}
    </li>
  );
};

export {ListItem};
