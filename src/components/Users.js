import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/constants";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data); // Log response data
        setUsers(response.data); // Set the response data to state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <button className="btn btn-success mb-3">Add User</button>
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
                <button className="btn btn-primary me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
