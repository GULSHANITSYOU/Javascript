import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removeTodo } from "./features/todos/todoSlice";


function App() {
  const { todos } = useSelector((state) => state.todos);
  const [newtodo, setnewtodo] = useState("");
  const dispatch = useDispatch();

  function handelOnSubmit(e) {
    e.preventDefault();

    if (newtodo) {
      dispatch(addtodo(newtodo));
      setnewtodo("");
    }
  }

  return (
    <>
      <div className="App">
        <h1>Todo list</h1>
        <form onSubmit={handelOnSubmit}>
          <input
            value={newtodo}
            type="text"
            onChange={(e) => setnewtodo(e.target.value)}
          />
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}  <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
