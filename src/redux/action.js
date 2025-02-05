import axios from "axios";
import { API_URL } from "../constants/constants";

export const editUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: "EDIT_USER", payload: response.data });
  };
};

export const changeUser = (user) => {
  return { type: "EDIT_USER", payload: user };
};

export const submitEditUser = () => {
  return async (dispatch, getState) => {
    const state = getState();
    let user = state.user;
    const res = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: "EDIT_USER_SUCCESS", payload: res.data });
  };
};

export const submitAddNewArticle = (article) => {
  return async (dispatch, getState) => {
    let user = getState().user;
    if (user.articles) {
      let fullArticle = { ...article, id: user.articles.length + 1 };
      user.articles = [...user.articles, fullArticle];
    } else {
      let fullArticle = { ...article, id: 1 };
      user = { ...user, articles: [fullArticle] };
    }
    const res = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: "UPDATE_ARTICLE_SUCCESS", payload: res.data }); // use res.data to synchronise server state & client state
  };
};

export const editArticle = (id) => {
  return (dispatch, getState) => {
    let user = getState().user;
    let article = user.articles.find((item) => item.id === id);
    dispatch({ type: "EDIT_ARTICLE", payload: article });
  };
};

export const changeArticle = (article) => {
  return { type: "EDIT_ARTICLE", payload: article };
};

export const submitEditArticle = () => {
  return async (dispatch, getState) => {
    let user = getState().user;
    let article = getState().article;
    let index = user.articles.findIndex((item) => item.id === article.id);
    user.articles[index] = article;

    const res = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: "UPDATE_ARTICLE_SUCCESS", payload: res.data });
  };
};

export const deleteArticle = (id) => {
  return async (dispatch, getState) => {
    let user = getState().user;
    let articles = user.articles;
    user.articles = articles.filter((article) => article.id !== id);
    const res = await axios.put(`${API_URL}/${user.id}`, user);
    dispatch({ type: "UPDATE_ARTICLE_SUCCESS", payload: res.data });
  };
};
