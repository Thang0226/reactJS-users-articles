import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUser } from "../redux/action";

export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const showCreateForm = () => {
    navigate("/create");
  };

  const handleEdit = (id) => {
    navigate("/edit");
    dispatch(editUser(id));
  };

  const handleDelete = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    let user = res.data;
    await axios.delete(`${API_URL}/${id}`);
    alert(`Deleted user: ${user.name}`);
    getUsers();
  };

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <button onClick={showCreateForm} className="btn btn-success mb-3">
        Add User
      </button>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th className="col-2">ID</th>
            <th className="col-6">Name</th>
            <th className="col-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
