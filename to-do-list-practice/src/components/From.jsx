import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/TodoSlice";

const Form = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),   // unique id
        text: todo.trim()
      })
    );

    setTodo("");
  };

  return (
    <section className="form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-3 mt-3">Todo App</h2>

              <div className="mb-3">
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  className="form-control"
                  placeholder="Enter todo item"
                />
              </div>

              <button type="submit" className="btn btn-outline-primary w-100">
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
