import React from 'react';
import s from './ListTop.module.sass'
import {Input} from "../../Input/ui/Input";
import {Button} from "../../Button/ui/Button";

const ListTop = ({value, setValue, addTodo}) => {
  return (
    <div className={s.ListTop}>
      <label>
        <Input value={value} setValue={setValue}/>
        <Button className={'btn btn__add'} text='Добавить' onClick={addTodo}/>
      </label>
    </div>
  );
};

export {ListTop};
