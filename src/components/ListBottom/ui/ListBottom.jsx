import React from 'react';
import s from './ListBottom.module.sass'
import clsx from "clsx";
import {Button} from "../../Button/ui/Button";

const ListBottom = ({isActive, removeIsDoneTodo, removeAllTodo}) => {
  return (
    <div className={clsx(s.ListBottom, {[s.active] : isActive})}>
      <Button onClick={removeIsDoneTodo} className={'btn btn__del_done'} text='Удалить завершенные'/>
      <Button onClick={removeAllTodo} className={'btn btn__del_all'} text='Удалить все'/>
    </div>
  );
};

export {ListBottom};
