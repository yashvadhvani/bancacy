const axios = require("axios");
const getUsers = page => {
  const params = {
    params: {
      page
    }
  }
  try {
    return axios.get("https://reqres.in/api/users", params

    );
  } catch (error) {
    console.error(error);
  }
};
const registerUser = (name, job) => {
  try {
    return axios.post("https://reqres.in/api/users", {
      params: {
        name,
        job
      }
    }); ``
  } catch (error) {
    console.error(error);
  }
};
const deleteUser = id => {
  try {
    return axios.delete("https://reqres.in/api/users/2");
  } catch (error) {
    console.error(error);
  }
};
const updateUser = (name, job) => {
  try {
    return axios.put("https://reqres.in/api/users/2", {
      params: { name, job }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  registerUser,
  deleteUser,
  updateUser
};
