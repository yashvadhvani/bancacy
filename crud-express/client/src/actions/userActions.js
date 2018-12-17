import axios from "axios";

import { GET_ERRORS, REGISTRATION_DONE, UPDATION_DONE, DELETION_DONE, VIEW_DONE } from "./types";

//Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post("/api/users/register", userData)
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
    .get("/api/users/delete")
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
    .post("/api/users/update", userData)
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
    .get("/api/users/list", userData)
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