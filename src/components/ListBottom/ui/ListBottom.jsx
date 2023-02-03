import React from 'react';
import s from './ListBottom.module.sass'
import clsx from "clsx";

const ListBottom = ({children, isActive}) => {
  return (
    <div className={clsx(s.ListBottom, {[s.active] : isActive})}>
      {children}
    </div>
  );
};

export {ListBottom};
