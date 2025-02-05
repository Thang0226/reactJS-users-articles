import axios from "axios";
import { API_URL } from "../constants/constants";

export const editUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: "EDIT_USER", payload: response.data });
  };
};
