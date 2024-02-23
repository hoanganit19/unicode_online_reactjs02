import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import { useState } from "react";
import { uid } from "../utils/uid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
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
  const handleCompleted = (id, status) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = status;
        }
        return todo;
      }),
    );
    toast.success("Update todo success");
  };
  const handleRemove = (id) => {
    confirmAlert({
      title: "Are you sure delete?",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setTodoList(todoList.filter((todo) => todo.id !== id));
            toast.success("Delete todo success");
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const handleDeleteAll = () => {
    confirmAlert({
      title: "Are you sure delete?",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setTodoList([]);
            toast.success("Delete all todo success");
          },
        },
        {
          label: "No",
        },
      ],
    });
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
                <input
                  type="checkbox"
                  onChange={(e) => handleCompleted(id, e.target.checked)}
                />
                <span>{name}</span>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-2">No Todo</p>
          )}

          <button
            className="btn btn-danger d-block mx-auto"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
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
