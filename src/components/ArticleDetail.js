import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { editUser, changeArticle, submitEditArticle } from "../redux/action";

export default function ArticleDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let article = useSelector((state) => state.article);

  const handleEditUser = (id) => {
    navigate("/edit");
    dispatch(editUser(id));
  };

  const handleChangeArticle = (e) => {
    let newArticle = { ...article, [e.target.name]: e.target.value };
    dispatch(changeArticle(newArticle));
  };

  const handleSubmitArticle = (e) => {
    e.preventDefault();
    dispatch(submitEditArticle());
  };

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>User</h3>
        <Link to="/" className="text-primary">
          Back to Home
        </Link>
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={user.name || ""}
          disabled
        />
      </div>
      <button
        onClick={() => handleEditUser(user.id)}
        className="btn btn-success"
      >
        Edit User
      </button>

      <form onSubmit={handleSubmitArticle}>
        <div className="mb-3 mt-4">
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
          <textarea
            className="form-control"
            name="content"
            value={article.content || ""}
            onChange={handleChangeArticle}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Update Article
        </button>
      </form>
    </div>
  );
}
