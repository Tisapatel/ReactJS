import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../features/todos/TodoSlice";

const Table = () => {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();

  return (
    <section className="table-section mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h4 className="text-center mb-3">Todo List</h4>

            {todos.length === 0 ? (
              <p className="text-center text-muted">No todos added yet</p>
            ) : (
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Todo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={todo.id}>
                      <td>{index + 1}</td>
                      <td>{todo.text}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => dispatch(removeTodos(todo.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
