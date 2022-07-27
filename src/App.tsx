import React from "react";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./todoSlice";
import "./App.css";

function App() {
  const globalTodos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef?.current?.value) {
      //dispatch our action
      dispatch(add({ title: inputRef.current.value }));

      if (formRef?.current) {
        formRef.current.reset();
      }
    }
  };
  return (
    <div>
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <label htmlFor=""></label>
        <input name="todoItem" ref={inputRef} type="text" />
      </form>
      <ul>
        {globalTodos.map(({ title, id }) => (
          <li key={title}>
            {title}
            <button onClick={() => dispatch(remove(id))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
