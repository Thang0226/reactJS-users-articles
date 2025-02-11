import { useSelector, useDispatch } from "react-redux";
import { deleteArticle, editArticle } from "../redux/action";
import { useNavigate } from "react-router-dom";

export default function UserArticles() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => state.user);
  let articles = user.articles ? user.articles : [];

  const handleEdit = (id) => {
    navigate("/article");
    dispatch(editArticle(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
  };

  return (
    <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Articles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.title}</td>
              <td>
                <button
                  onClick={() => handleEdit(article.id)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(article.id)}
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
