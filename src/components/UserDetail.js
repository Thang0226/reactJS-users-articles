import UserArticles from "./UserArticles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function UserDetail() {
  const user = useSelector((state) => state.user);
  const [article, setArticle] = useState({});

  const handleChangeUser = (e) => {};

  const handleSubmitUser = (e) => {};

  const handleChangeArticle = (e) => {};

  const handleSubmitArticle = (e) => {};

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>User Detail</h3>
        <Link to="/" className="text-primary">
          Back to Home
        </Link>
      </div>
      <form onSubmit={handleSubmitUser}>
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name || ""}
            onChange={handleChangeUser}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={user.email || ""}
            onChange={handleChangeUser}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update User
        </button>
      </form>

      <div className="mb-3 mt-4">
        <h3>Article</h3>
      </div>
      <form onSubmit={handleSubmitArticle}>
        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={article.title || ""}
            onChange={handleChangeArticle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Content</label>
          <input
            type="text"
            className="form-control"
            name="content"
            value={article.content || ""}
            onChange={handleChangeArticle}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Article
        </button>
      </form>
      <div className="mt-4 mb-3">
        <UserArticles />
      </div>
    </div>
  );
}
