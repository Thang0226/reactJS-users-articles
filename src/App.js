import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import CreateUserForm from "./components/CreateUserForm";
import UserDetail from "./components/UserDetail";
import UserArticle from "./components/UserArticles";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/reactJS-users-articles" element={<Users />} />
        <Route
          path="/reactJS-users-articles/create"
          element={<CreateUserForm />}
        />
        <Route path="/reactJS-users-articles/edit" element={<UserDetail />} />
        <Route
          path="/reactJS-users-articles/article"
          element={<UserArticle />}
        />
      </Routes>
    </div>
  );
}

export default App;
