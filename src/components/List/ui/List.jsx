import React from 'react';
import {ListItem} from "../../ListItem";

const List = ({className, todos, toggleIsDone, removeTodo}) => {
  return (
    <ul className={className}>
      {todos.map(todo => (
        <ListItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleIsDone={toggleIsDone}/>
      ))}
    </ul>
  );
};

export {List};
