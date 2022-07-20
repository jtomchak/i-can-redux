import React from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef?.current?.value) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor=""></label>
        <input name="todoItem" ref={inputRef} type="text" />
      </form>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
