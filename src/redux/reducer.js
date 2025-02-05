const initialState = {
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      return { ...state, user: action.payload };
    case "EDIT_USER_SUCCESS":
      alert("Edit User successfully");
      return state;
    case "ADD_ARTICLE_SUCCESS":
      alert("Added new article of user");
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
