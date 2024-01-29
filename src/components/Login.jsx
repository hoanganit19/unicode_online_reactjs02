import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = form;
    const errorObj = {};
    if (!name) {
      errorObj.name = "Tên bắt buộc phải nhập";
    }
    if (!email) {
      errorObj.email = "Email bắt buộc phải nhập";
    }
    setErrors(errorObj);
    if (!Object.keys(errorObj).length) {
      //Không có lỗi
      setForm({ name: "", email: "" });
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center">Đăng nhập</h1>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger text-center">
          Vui lòng kiểm tra lại
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Tên..."
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email..."
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
