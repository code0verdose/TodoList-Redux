import {useState} from "react";
import {Layout} from "../layout";
import {Input} from "../components/Input/ui/Input";
import {Button} from "../components/Button/ui/Button";
import {Wrapper} from "../components/Wrapper";
import s from './style.module.sass'
import clsx from "clsx";
import {List} from "../components/List";
import {ListTop} from "../components/ListTop";
import {ListItem} from "../components/ListItem";
import {ListBottom} from "../components/ListBottom/ui/ListBottom";

function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  const addTodo = () => {
    if (value.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: value.trim(),
          isDone: false
        }
      ])
    }
    setValue('')
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todoId !== todo.id))
  }

  const removeAllTodo = () => {
    setTodos([])
  }

  const removeIsDoneTodo = () => {
    setTodos(todos.filter(todo => !todo.isDone))
  }


  const toggleIsDone = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo

          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
      )
    )
  }


  return (
    <div className="App">
      <Layout>
        <Wrapper>
          <ListTop>
            <label>
              <Input value={value} setValue={setValue}/>
              <Button className={clsx(s.btn, s.btn__add)} text='Добавить' onClick={addTodo}/>
            </label>
          </ListTop>
          <List className={clsx({[s.list] : todos.length})}>
            {todos.map(todo => (
              <ListItem key={todo.id}>
                <input onChange={() => toggleIsDone(todo.id)} checked={todo.isDone} type="checkbox"/>
                <span title={todo.text}>{todo.text}</span>
                <Button onClick={() => removeTodo(todo.id)} text='❌'/>
              </ListItem>
            ))}
          </List>
          <ListBottom isActive={!!todos.length}>
            <Button onClick={removeIsDoneTodo} className={clsx(s.btn, s.btn__del_done)} text='Удалить завершенные'/>
            <Button onClick={removeAllTodo} className={clsx(s.btn, s.btn__del_all)} text='Удалить все'/>
          </ListBottom>
        </Wrapper>
      </Layout>

    </div>
  );
}

export {App};
