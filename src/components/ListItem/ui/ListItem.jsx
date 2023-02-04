import React from 'react';
import s from './ListItem.module.sass'
import clsx from "clsx";
import {Button} from "../../Button/ui/Button";

const ListItem = ({className, todo, toggleIsDone, removeTodo}) => {
  return (
    <li className={clsx(s.ListItem, className)}>
      <input onChange={() => toggleIsDone(todo.id)} checked={todo.isDone} type="checkbox"/>
      <span title={todo.text}>{todo.text}</span>
      <Button onClick={() => removeTodo(todo.id)} text='❌'/>
    </li>
  );
};

export {ListItem};
