import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import { useState } from "react";
import { uid } from "../utils/uid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const todo = {
      id: uid(),
      name,
      completed: false,
    };
    setTodoList([...todoList, todo]);
    setName("");
    toast.success("Add todo success");
  };
  return (
    <div className="todos">
      <div className="w-50 mx-auto">
        <h1 className="text-center mb-3">Todo App</h1>
        <div className="filters d-flex justify-content-between mb-3">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <form action="" onSubmit={handleAdd}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please fill..."
              onChange={handleChange}
              value={name}
            />
            <button className="btn btn-success">Add</button>
          </div>
        </form>
        <div className="todo-list">
          {todoList.length ? (
            todoList.map(({ id, name, completed }) => (
              <div
                key={id}
                className={`todo-item d-flex justify-content-between align-items-center my-3 ${
                  completed ? "completed" : ""
                }`}
              >
                <input type="checkbox" />
                <span>{name}</span>
                <div>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-2">No Todo</p>
          )}

          <button className="btn btn-danger d-block mx-auto">Delete All</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Todo;

/*
State
- todoList --> Lưu trữ danh sách công việc
- name --> Lưu trữ tên công việc ở form
- message --> Thông báo
*/
