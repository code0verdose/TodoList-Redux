import React from 'react';
import s from './ListTop.module.sass'

const ListTop = ({children}) => {
  return (
    <div className={s.ListTop}>
      {children}
    </div>
  );
};

export {ListTop};
