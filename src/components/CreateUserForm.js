import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/constants";
import { Link } from "react-router-dom";

export default function CreateUserForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(API_URL, form);
    alert(`Added new user: ${form.name}`);
    setForm({});
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>User Detail</h3>
        <Link to="/" className="text-primary">
          Back to Home
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}
