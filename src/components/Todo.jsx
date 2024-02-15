import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
const Todo = () => {
  return (
    <div className="todos">
      <div className="w-50 mx-auto">
        <h1 className="text-center mb-3">Todo App</h1>
        <div className="filters d-flex justify-content-between mb-3">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <form action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Please fill..."
            />
            <button className="btn btn-success">Add</button>
          </div>
        </form>
        <div className="todo-list">
          <div className="todo-item d-flex justify-content-between align-items-center my-3">
            <input type="checkbox" />
            <span>Tên công việc</span>
            <div>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
          <div className="todo-item d-flex justify-content-between align-items-center my-3">
            <input type="checkbox" />
            <span>Tên công việc</span>
            <div>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
          <button className="btn btn-danger d-block mx-auto">Delete All</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
