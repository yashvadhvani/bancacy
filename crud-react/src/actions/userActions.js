//Register user
import axios from "axios";

import { GET_ERRORS, REGISTRATION_DONE, UPDATION_DONE, DELETION_DONE, VIEW_DONE } from "./types";

//Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post("https://reqres.in/api/users", userData)
    .then(res => {
      dispatch({
        type: REGISTRATION_DONE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


//Delete User
export const deleteUser = () => dispatch => {
  axios
    .delete("https://reqres.in/api/users/2")
    .then(res => {
      dispatch({
        type: DELETION_DONE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Update User
export const updateUser = (userData) => dispatch => {
  axios
    .put("https://reqres.in/api/users/2", userData)
    .then(res => {
      dispatch({
        type: UPDATION_DONE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//List User
export const listUser = (page) => dispatch => {
  const userData = {
    params: {
      page
    }
  }
  axios
    .get("https://reqres.in/api/users", userData)
    .then(res => {
      dispatch({
        type: VIEW_DONE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};  