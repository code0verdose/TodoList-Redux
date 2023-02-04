import { useState } from "react";
import { Layout } from "../layout";
import { Wrapper } from "../components/Wrapper";
import clsx from "clsx";
import { List } from "../components/List";
import { ListTop } from "../components/ListTop";
import { ListBottom } from "../components/ListBottom/ui/ListBottom";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: value.trim(),
          isDone: false,
        },
      ]);
    }
    setValue("");
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  const removeAllTodo = () => {
    setTodos([]);
  };

  const removeIsDoneTodo = () => {
    setTodos(todos.filter((todo) => !todo.isDone));
  };

  const toggleIsDone = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  return (
    <div className="App">
      <Layout>
        <Wrapper>
          <ListTop value={value} setValue={setValue} addTodo={addTodo} />
          <List
            todos={todos}
            removeTodo={removeTodo}
            toggleIsDone={toggleIsDone}
            className={clsx({ ["list"]: todos.length })}
          />
          <ListBottom
            removeAllTodo={removeAllTodo}
            removeIsDoneTodo={removeIsDoneTodo}
            isActive={!!todos.length}
          />
        </Wrapper>
      </Layout>
    </div>
  );
}

export { App };
