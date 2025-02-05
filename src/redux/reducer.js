const initialState = {
  user: {},
  article: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "EDIT_USER_SUCCESS":
      alert("Edit User successfully");
      return state;
    case "UPDATE_ARTICLE_SUCCESS":
      alert("Modified article(s) of user");
      return { ...state, user: action.payload };
    case "EDIT_ARTICLE":
      return { ...state, article: action.payload };
    default:
      return state;
  }
};
