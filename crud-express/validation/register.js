const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.job = !isEmpty(data.job) ? data.job : "";
  
  if (
    !Validator.isLength(data.name, {
      min: 2,
      max: 30
    })
  ) {
    errors.name = "Name must be between 2 to 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (Validator.isEmpty(data.job)) {
    errors.job = "Job is required";
  }
 return {   
    errors,
    isValid: isEmpty(errors)
  };
};
