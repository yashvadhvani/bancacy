const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email is required";
  }
  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30
    })
  ) {
    errors.password = "password must be 6 character long";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
