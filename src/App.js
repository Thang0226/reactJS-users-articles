import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import CreateUserForm from "./components/CreateUserForm";
import UserDetail from "./components/UserDetail";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUserForm />} />
          <Route path="/edit" element={<UserDetail />} />
          <Route path="/article" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
